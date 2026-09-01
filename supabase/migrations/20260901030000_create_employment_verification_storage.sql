-- Private, server-only intake storage for UEM employment-verification documents.
-- Public and authenticated browser roles receive no storage.objects policies.
insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'employment-verification',
  'employment-verification',
  false,
  3145728,
  array['application/pdf', 'image/jpeg', 'image/png']::text[]
)
on conflict (id) do update
set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
