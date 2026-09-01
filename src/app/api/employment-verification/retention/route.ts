import { NextResponse } from "next/server";

import { employmentVerificationBucket } from "@/lib/employment-verification";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

function retentionDays() {
  const configured = Number(
    process.env.EMPLOYMENT_VERIFICATION_RETENTION_DAYS ?? 30,
  );
  if (!Number.isFinite(configured)) return 30;
  return Math.min(365, Math.max(7, Math.floor(configured)));
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (
    !cronSecret ||
    request.headers.get("authorization") !== `Bearer ${cronSecret}`
  ) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const cutoff = new Date(Date.now() - retentionDays() * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const supabase = createSupabaseAdminClient();
  const storage = supabase.storage.from(employmentVerificationBucket);
  const { data: dateEntries, error: dateListError } = await storage.list("", {
    limit: 1000,
    sortBy: { column: "name", order: "asc" },
  });

  if (dateListError) {
    return NextResponse.json(
      { error: "Unable to inspect retention paths." },
      { status: 500 },
    );
  }

  let deletedObjects = 0;
  const expiredDatePaths = (dateEntries ?? [])
    .map((entry) => entry.name)
    .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name) && name < cutoff);

  for (const datePath of expiredDatePaths) {
    const { data: requestEntries, error: requestListError } =
      await storage.list(datePath, { limit: 1000 });
    if (requestListError) {
      return NextResponse.json(
        { error: "Unable to inspect an expired retention path." },
        { status: 500 },
      );
    }

    for (const requestEntry of requestEntries ?? []) {
      const requestPath = `${datePath}/${requestEntry.name}`;
      if (requestEntry.id) {
        const { error: removeError } = await storage.remove([requestPath]);
        if (removeError)
          return NextResponse.json(
            { error: "Unable to remove an expired document." },
            { status: 500 },
          );
        deletedObjects += 1;
        continue;
      }

      const { data: files, error: fileListError } = await storage.list(
        requestPath,
        { limit: 1000 },
      );
      if (fileListError) {
        return NextResponse.json(
          { error: "Unable to inspect an expired request path." },
          { status: 500 },
        );
      }
      const paths = (files ?? [])
        .filter((file) => Boolean(file.id))
        .map((file) => `${requestPath}/${file.name}`);
      if (paths.length) {
        const { error: removeError } = await storage.remove(paths);
        if (removeError)
          return NextResponse.json(
            { error: "Unable to remove expired documents." },
            { status: 500 },
          );
        deletedObjects += paths.length;
      }
    }
  }

  return NextResponse.json({ deletedObjects, cutoff });
}
