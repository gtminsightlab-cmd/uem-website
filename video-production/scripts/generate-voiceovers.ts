import {execFileSync} from "node:child_process";
import {existsSync, mkdirSync, writeFileSync} from "node:fs";
import {dirname, join, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {videoStories} from "../src/videoContent";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const publicDir = join(root, "public");
const fps = 30;
const transitionFrames = 12;
const voiceId = process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
const apiKey = process.env.ELEVENLABS_API_KEY;

if (!apiKey) throw new Error("ELEVENLABS_API_KEY is required in the environment.");

const pad = (value: number) => String(value).padStart(2, "0");
const vttTime = (seconds: number) => {
  const ms = Math.max(0, Math.round(seconds * 1000));
  const hours = Math.floor(ms / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const secs = Math.floor((ms % 60_000) / 1000);
  const millis = ms % 1000;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}.${String(millis).padStart(3, "0")}`;
};

const durationSeconds = (path: string) => Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", path], {encoding: "utf8"}).trim());

const sentenceChunks = (text: string) => text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((item) => item.trim()).filter(Boolean) ?? [text];

async function synthesize(text: string, outputPath: string) {
  if (existsSync(outputPath)) return;
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {"Content-Type": "application/json", "xi-api-key": apiKey as string},
    body: JSON.stringify({
      text,
      model_id: "eleven_turbo_v2_5",
      voice_settings: {stability: 0.58, similarity_boost: 0.78, style: 0.22, use_speaker_boost: true},
    }),
  });
  if (!response.ok) throw new Error(`ElevenLabs ${response.status}: ${await response.text()}`);
  mkdirSync(dirname(outputPath), {recursive: true});
  writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));
}

const main = async () => {
const durations: Record<string, Record<string, number>> = {};

for (const story of videoStories) {
  durations[story.id] = {};
  let storyCursor = 0;
  const cues: string[] = ["WEBVTT", ""];

  for (const scene of story.scenes) {
    const outputPath = join(publicDir, "voiceover", story.id, `${scene.id}.mp3`);
    process.stdout.write(`Narrating ${story.id}/${scene.id}... `);
    await synthesize(scene.narration, outputPath);
    const audioDuration = durationSeconds(outputPath);
    const sceneFrames = Math.ceil((audioDuration + 1.15) * fps);
    durations[story.id][scene.id] = sceneFrames;
    process.stdout.write(`${audioDuration.toFixed(2)}s\n`);

    const captionNarration = scene.narration
      .split("R X Launch O S").join("RxLaunchOS")
      .split("fourteen-day").join("14-day");
    const chunks = sentenceChunks(captionNarration);
    const usableStart = storyCursor + 0.25;
    const usableDuration = Math.max(1, audioDuration - 0.25);
    const weights = chunks.map((chunk) => chunk.length);
    const totalWeight = weights.reduce((sum, value) => sum + value, 0);
    let cueCursor = usableStart;
    chunks.forEach((chunk, index) => {
      const cueDuration = usableDuration * (weights[index] / totalWeight);
      const cueEnd = cueCursor + cueDuration;
      cues.push(`${vttTime(cueCursor)} --> ${vttTime(cueEnd)}`, chunk, "");
      cueCursor = cueEnd;
    });
    storyCursor += sceneFrames / fps - transitionFrames / fps;
  }

  const storyAudioDir = join(publicDir, "voiceover", story.id);
  const audioOutput = join(root, "out", "audio", `${story.id}.m4a`);
  mkdirSync(dirname(audioOutput), {recursive: true});
  const inputs = story.scenes.flatMap((scene) => ["-i", join(storyAudioDir, `${scene.id}.mp3`)]);
  const filters = story.scenes.map((scene, index) => {
    const fullSceneSeconds = durations[story.id][scene.id] / fps;
    const contribution = fullSceneSeconds - (index < story.scenes.length - 1 ? transitionFrames / fps : 0);
    return `[${index}:a]apad=pad_dur=${contribution.toFixed(3)},atrim=0:${contribution.toFixed(3)},asetpts=PTS-STARTPTS[a${index}]`;
  });
  filters.push(`${story.scenes.map((_, index) => `[a${index}]`).join("")}concat=n=${story.scenes.length}:v=0:a=1[outa]`);
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...inputs, "-filter_complex", filters.join(";"), "-map", "[outa]", "-c:a", "aac", "-b:a", "160k", audioOutput], {stdio: "inherit"});

  const captionsPath = join(publicDir, "captions", `${story.id}.vtt`);
  mkdirSync(dirname(captionsPath), {recursive: true});
  writeFileSync(captionsPath, cues.join("\n"));
}

const serialized = JSON.stringify(durations, null, 2).replace(/"([^\"]+)":/g, '"$1":');
writeFileSync(join(root, "src", "generatedDurations.ts"), `export const generatedDurations: Record<string, Record<string, number>> = ${serialized};\n\nexport const defaultSceneDuration = 270;\n`);
process.stdout.write("Voiceovers, captions, and scene durations are ready.\n");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
