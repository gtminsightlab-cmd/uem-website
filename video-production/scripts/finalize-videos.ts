import {execFileSync} from "node:child_process";
import {copyFileSync, existsSync, mkdirSync, readdirSync} from "node:fs";
import {dirname, join, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {videoStories} from "../src/videoContent";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const siteRoot = resolve(root, "..");
const publishedDir = join(siteRoot, "public", "videos");
mkdirSync(publishedDir, {recursive: true});

for (const story of videoStories) {
  const framesDir = join(root, "out", `frames-${story.id}`);
  if (!existsSync(framesDir)) throw new Error(`Missing frame sequence for ${story.id}`);
  const frames = readdirSync(framesDir).filter((name) => name.endsWith(".jpeg")).sort();
  if (!frames.length) throw new Error(`Empty frame sequence for ${story.id}`);
  const digits = frames[0].match(/(\d+)\.jpeg$/)?.[1].length ?? 4;
  const silentPath = join(root, "out", `encoded-${story.id}.mp4`);
  const finalPath = join(publishedDir, `${story.id}.mp4`);
  const audioPath = join(root, "out", "audio", `${story.id}.m4a`);

  process.stdout.write(`Encoding ${story.id} from ${frames.length} frames...\n`);
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-framerate", "30", "-i", join(framesDir, `element-%0${digits}d.jpeg`), "-c:v", "libx264", "-preset", "medium", "-crf", "25", "-pix_fmt", "yuv420p", "-movflags", "+faststart", silentPath], {stdio: "inherit"});
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", silentPath, "-i", audioPath, "-c:v", "copy", "-c:a", "aac", "-b:a", "160k", "-shortest", "-movflags", "+faststart", finalPath], {stdio: "inherit"});

  const posterFrame = frames[Math.min(44, frames.length - 1)];
  copyFileSync(join(framesDir, posterFrame), join(publishedDir, `${story.id}-poster.jpg`));
  copyFileSync(join(root, "public", "captions", `${story.id}.vtt`), join(publishedDir, `${story.id}.vtt`));
}

process.stdout.write(`Published four videos, posters, and caption tracks to ${publishedDir}.\n`);
