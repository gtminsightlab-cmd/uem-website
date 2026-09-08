import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { VideoScene, VideoStory, VisualKind } from "../videoContent";

const palette = {
  ink: "#071b23",
  navy: "#0b2733",
  cream: "#f7f1e7",
  mist: "#dce9e5",
  teal: "#36b8a8",
  lime: "#b5e76a",
  coral: "#ef7b68",
  gold: "#e6b957",
};
const accents = [palette.teal, palette.lime, palette.coral, palette.gold];

type ProductCapture = {
  image: string;
  label: string;
  signal: string;
};

const productCaptures: Record<string, Record<string, ProductCapture>> = {
  "pharma-end-to-end": {
    "launch-reality": {
      image: "app-captures/live-launch-office.png",
      label: "Live Launch Office",
      signal: "428 days to launch · one governed operating view",
    },
    define: {
      image: "app-captures/live-launch-signals.png",
      label: "Highest-consequence work",
      signal: "Named owner · 21 days overdue · at risk",
    },
    diagnose: {
      image: "app-captures/readiness-summary.png",
      label: "Readiness assessment",
      signal: "28% coverage · 8% illustrative readiness · 25 hard gates",
    },
    design: {
      image: "app-captures/roadmap.png",
      label: "Critical path and dependencies",
      signal: "15 dated milestones · ownership · downstream effects",
    },
    rehearse: {
      image: "app-captures/decisions-risks.png",
      label: "Decision chain",
      signal: "Internal · CSO · hybrid · evidence and trade-offs retained",
    },
    operate: {
      image: "app-captures/territory-signals.png",
      label: "Territory operating signals",
      signal: "Workload 38 · capacity gap −12 · one vacancy",
    },
    learn: {
      image: "app-captures/board-launch-report.png",
      label: "Immutable board launch review",
      signal: "Versioned report · human review state · retained evidence",
    },
  },
  "pharma-personas": {
    "role-system": {
      image: "app-captures/live-launch-office.png",
      label: "Shared launch record",
      signal: "One strategy · role-relevant operating lenses",
    },
    executive: {
      image: "app-captures/portfolio-control-tower.png",
      label: "Portfolio Control Tower",
      signal: "Leadership attention · timing · open controls",
    },
    functional: {
      image: "app-captures/roadmap.png",
      label: "National operating plan",
      signal: "Capabilities become milestones, owners, and dependencies",
    },
    regional: {
      image: "app-captures/executive-dashboard.png",
      label: "Meaningful signal",
      signal: "Coverage 12.92% · payer evidence insufficient · CRM 35.71%",
    },
    manager: {
      image: "app-captures/readiness-queue.png",
      label: "Owned next-action queue",
      signal: "Filter by accountability · evidence · severity · state",
    },
    field: {
      image: "app-captures/territory-signals.png",
      label: "Territory Planning",
      signal: "Authorized targets · workload · capacity · geographic coverage",
    },
    "shared-record": {
      image: "app-captures/report-lineage.png",
      label: "Board-grade launch record",
      signal: "Three immutable versions · explicit supersession lineage",
    },
  },
  "aesthetics-end-to-end": {
    category: {
      image: "app-captures/territory-signals.png",
      label: "Practice-channel planning surface",
      signal: "Provider universe · specialty mix · geography · workload",
    },
    market: {
      image: "app-captures/territory-signals.png",
      label: "Target-practice strategy",
      signal: "Segment fit and adoption conditions become planning inputs",
    },
    channel: {
      image: "app-captures/decisions-risks.png",
      label: "Governed route-to-market choice",
      signal:
        "Use the decision chain for direct · distributor · hybrid · staged options",
    },
    "operating-model": {
      image: "app-captures/roadmap.png",
      label: "Commercial operating model",
      signal: "Roles · partners · training · milestones · dependencies",
    },
    scenarios: {
      image: "app-captures/decisions-risks.png",
      label: "Launch-tactic comparison",
      signal: "Compare assumptions and trade-offs before human approval",
    },
    "operate-learn": {
      image: "app-captures/executive-dashboard.png",
      label: "Adoption signal to strategy",
      signal: "Coverage · evidence sufficiency · enablement readiness",
    },
    "design-partner": {
      image: "app-captures/board-launch-report.png",
      label: "Controlled validation record",
      signal: "Versioned evidence and decisions support expert review",
    },
  },
  "aesthetics-personas": {
    handoffs: {
      image: "app-captures/live-launch-office.png",
      label: "Manufacturer-to-practice record",
      signal: "Enterprise intent becomes channel, field, and practice work",
    },
    executive: {
      image: "app-captures/portfolio-control-tower.png",
      label: "GM and commercial executive",
      signal: "Market model · investment gates · partner choices · risk",
    },
    "brand-channel": {
      image: "app-captures/decisions-risks.png",
      label: "Brand, sales, and channel leaders",
      signal: "Segments · coverage · partners · education · measures",
    },
    regional: {
      image: "app-captures/executive-dashboard.png",
      label: "Regional and district leaders",
      signal: "Meaningful signals direct intervention and resources",
    },
    field: {
      image: "app-captures/territory-signals.png",
      label: "Territory and practice development",
      signal: "Practice facts become the next purposeful action",
    },
    "education-ops": {
      image: "app-captures/readiness-queue.png",
      label: "Education, operations, and analytics",
      signal: "Training and enablement gaps become owned work",
    },
    validation: {
      image: "app-captures/report-lineage.png",
      label: "Design-partner validation",
      signal: "One versioned record · human authority remains explicit",
    },
  },
};

const ProductCapturePanel = ({
  capture,
  accent,
}: {
  capture: ProductCapture;
  accent: string;
}) => {
  const frame = useCurrentFrame();
  const enter = spring({ frame, fps: 30, config: { damping: 18, mass: 0.8 } });
  const scale = interpolate(frame, [0, 240], [1.035, 1.075], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        width: 705,
        height: 430,
        borderRadius: 24,
        overflow: "hidden",
        border: `2px solid ${accent}88`,
        background: palette.cream,
        boxShadow: "0 28px 90px rgba(0,0,0,.42)",
        transform: `translateY(${interpolate(enter, [0, 1], [34, 0])}px)`,
      }}
    >
      <Img
        src={staticFile(capture.image)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          display: "flex",
          alignItems: "center",
          gap: 9,
          borderRadius: 999,
          padding: "9px 13px",
          background: "rgba(7,27,35,.91)",
          color: palette.cream,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: 0.4,
        }}
      >
        <span
          style={{ width: 8, height: 8, borderRadius: 99, background: accent }}
        />
        Actual RxLaunchOS platform · fictional Asterion data
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "18px 22px",
          background:
            "linear-gradient(180deg, transparent, rgba(7,27,35,.96) 24%)",
          color: palette.cream,
        }}
      >
        <div
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 1.7,
            color: accent,
            fontWeight: 900,
          }}
        >
          {capture.label}
        </div>
        <div style={{ fontSize: 18, marginTop: 6, fontWeight: 750 }}>
          {capture.signal}
        </div>
      </div>
    </div>
  );
};

const Panel = ({ scene, kind }: { scene: VideoScene; kind: VisualKind }) => {
  const frame = useCurrentFrame();
  const enter = spring({ frame, fps: 30, config: { damping: 18, mass: 0.8 } });
  const rise = interpolate(enter, [0, 1], [30, 0]);
  const bars = kind === "readiness" ? [0.86, 0.64, 0.42] : [0.44, 0.72, 0.91];

  if (kind === "compare")
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          width: "100%",
        }}
      >
        {["Option A", "Option B"].map((label, index) => (
          <div
            key={label}
            style={{
              background: "rgba(247,241,231,.08)",
              border: `1px solid ${accents[index]}88`,
              borderRadius: 20,
              padding: 24,
              transform: `translateY(${rise * (index + 1)}px)`,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: accents[index],
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              {label}
            </div>
            {[74, 52, 83].map((width, row) => (
              <div
                key={row}
                style={{
                  height: 9,
                  marginTop: 22,
                  borderRadius: 10,
                  width: `${width - index * 5}%`,
                  background:
                    row === 2 ? accents[index] : "rgba(247,241,231,.28)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );

  if (kind === "roles" || kind === "network") {
    const labels = scene.bullets.slice(0, 3);
    return (
      <div
        style={{
          position: "relative",
          width: 430,
          height: 330,
          transform: `translateY(${rise}px)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "120px 145px",
            borderRadius: 999,
            background: palette.lime,
            color: palette.ink,
            display: "grid",
            placeItems: "center",
            fontSize: 18,
            fontWeight: 900,
            boxShadow: `0 0 0 18px ${palette.lime}22`,
          }}
        >
          Rx
        </div>
        {labels.map((label, index) => {
          const spots = [
            [0, 20],
            [250, 0],
            [130, 245],
          ][index];
          return (
            <div
              key={label}
              style={{
                position: "absolute",
                left: spots[0],
                top: spots[1],
                width: 180,
                minHeight: 74,
                borderRadius: 18,
                background: "rgba(247,241,231,.09)",
                border: `1px solid ${accents[index]}88`,
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                padding: 10,
                fontSize: 19,
                fontWeight: 700,
                color: palette.cream,
              }}
            >
              {label}
            </div>
          );
        })}
        <svg
          width="430"
          height="330"
          style={{ position: "absolute", inset: 0, zIndex: -1 }}
        >
          <path
            d="M180 145 L95 85 M250 145 L340 70 M220 205 L220 268"
            stroke={palette.mist}
            strokeOpacity=".35"
            strokeWidth="3"
            strokeDasharray="7 8"
          />
        </svg>
      </div>
    );
  }

  if (kind === "flow")
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 10,
          transform: `translateY(${rise}px)`,
        }}
      >
        {scene.bullets.map((label, index) => (
          <div key={label} style={{ display: "contents" }}>
            <div
              style={{
                width: 120,
                minHeight: 94,
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                borderRadius: 18,
                padding: 12,
                color: palette.cream,
                background: "rgba(247,241,231,.08)",
                borderTop: `5px solid ${accents[index]}`,
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              {label}
            </div>
            {index < scene.bullets.length - 1 && (
              <div style={{ fontSize: 28, color: palette.lime }}>→</div>
            )}
          </div>
        ))}
      </div>
    );

  if (kind === "cta")
    return (
      <div
        style={{
          width: "100%",
          padding: 34,
          borderRadius: 26,
          background: palette.cream,
          color: palette.ink,
          transform: `translateY(${rise}px)`,
          boxShadow: "0 24px 80px rgba(0,0,0,.28)",
        }}
      >
        <div
          style={{
            fontSize: 17,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#47716d",
            fontWeight: 800,
          }}
        >
          Choose the right entry
        </div>
        <div
          style={{
            fontSize: 37,
            fontFamily: "Georgia, serif",
            marginTop: 16,
            lineHeight: 1.08,
          }}
        >
          See it. Test it. Shape what comes next.
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 25 }}>
          {scene.bullets.map((b, i) => (
            <span
              key={b}
              style={{
                borderRadius: 999,
                padding: "10px 14px",
                background: i === 0 ? palette.lime : palette.mist,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    );

  return (
    <div
      style={{
        width: "100%",
        padding: 28,
        borderRadius: 24,
        background: "rgba(247,241,231,.08)",
        border: "1px solid rgba(247,241,231,.15)",
        transform: `translateY(${rise}px)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "end", gap: 12, height: 160 }}>
        {bars.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 100}%`,
              width: 72,
              borderRadius: "12px 12px 4px 4px",
              background: accents[index],
              transform: `scaleY(${interpolate(frame, [10 + index * 8, 42 + index * 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
        {scene.bullets.map((b, i) => (
          <span
            key={b}
            style={{
              fontSize: 14,
              borderRadius: 999,
              padding: "8px 11px",
              color: palette.cream,
              border: `1px solid ${accents[i]}99`,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

export const StoryScene = ({
  story,
  scene,
  sceneIndex,
  durationInFrames,
}: {
  story: VideoStory;
  scene: VideoScene;
  sceneIndex: number;
  durationInFrames: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(
    frame,
    [0, 12, durationInFrames - 14, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const lift = spring({ frame: frame - 5, fps, config: { damping: 20 } });
  const accent = story.sector === "pharma" ? palette.lime : palette.coral;
  const capture = productCaptures[story.id]?.[scene.id];
  return (
    <AbsoluteFill
      style={{
        background: palette.ink,
        color: palette.cream,
        fontFamily: "Arial, Helvetica, sans-serif",
        opacity,
        overflow: "hidden",
      }}
    >
      <Audio src={staticFile(`voiceover/${story.id}/${scene.id}.mp3`)} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 85% 20%, ${accent}24, transparent 32%), linear-gradient(120deg, ${palette.ink} 25%, ${palette.navy})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 12,
          height: "100%",
          background: accent,
        }}
      />
      <div
        style={{
          position: "relative",
          padding: capture ? "38px 50px 34px" : "48px 64px 42px",
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 21, letterSpacing: -0.5 }}>
            <span style={{ color: accent }}>Rx</span>LaunchOS{" "}
            <span style={{ fontWeight: 400, opacity: 0.48 }}>× UEM</span>
          </div>
          <div
            style={{
              maxWidth: 610,
              textAlign: "right",
              fontSize: 11.5,
              textTransform: "uppercase",
              letterSpacing: 1.45,
              color: palette.mist,
            }}
          >
            {story.disclosure}
          </div>
        </header>
        <main
          style={{
            display: "grid",
            gridTemplateColumns: capture ? ".67fr 1.33fr" : "1.12fr .88fr",
            gap: capture ? 34 : 56,
            alignItems: "center",
          }}
        >
          <div
            style={{
              transform: `translateY(${interpolate(lift, [0, 1], [28, 0])}px)`,
            }}
          >
            <div
              style={{
                fontSize: capture ? 14 : 17,
                textTransform: "uppercase",
                letterSpacing: 2.3,
                color: accent,
                fontWeight: 800,
                marginBottom: 18,
              }}
            >
              {scene.eyebrow}
            </div>
            <div
              style={{
                fontSize: capture ? 42 : 55,
                lineHeight: 1.03,
                letterSpacing: capture ? -1.5 : -2.2,
                fontFamily: "Georgia, 'Times New Roman', serif",
                maxWidth: 660,
              }}
            >
              {scene.headline}
            </div>
            <div
              style={{
                fontSize: capture ? 18 : 22,
                lineHeight: 1.45,
                color: palette.mist,
                marginTop: 22,
                maxWidth: 675,
              }}
            >
              {scene.body}
            </div>
          </div>
          {capture ? (
            <ProductCapturePanel capture={capture} accent={accent} />
          ) : (
            <Panel scene={scene} kind={scene.visual} />
          )}
        </main>
        <footer
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: 30,
          }}
        >
          <div>
            <div
              style={{
                height: 3,
                background: "rgba(247,241,231,.12)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${((sceneIndex + interpolate(frame, [0, durationInFrames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })) / story.scenes.length) * 100}%`,
                  background: accent,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 12,
                color: palette.mist,
                opacity: 0.68,
                marginTop: 9,
              }}
            >
              echelonconsulting.io
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1.5,
              color: accent,
            }}
          >
            {String(sceneIndex + 1).padStart(2, "0")} /{" "}
            {String(story.scenes.length).padStart(2, "0")}
          </div>
        </footer>
      </div>
    </AbsoluteFill>
  );
};
