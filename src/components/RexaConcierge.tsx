'use client';

import Script from 'next/script';

const chatAgentId = process.env.NEXT_PUBLIC_REXA_PUBLIC_CHAT_AGENT_ID;
const voiceAgentId = process.env.NEXT_PUBLIC_REXA_PUBLIC_VOICE_AGENT_ID;
const publicKey = process.env.NEXT_PUBLIC_REXA_RETELL_PUBLIC_KEY;

export default function RexaConcierge() {
  if (!chatAgentId || !voiceAgentId || !publicKey) return null;

  return (
    <>
      <Script
        id="retell-widget"
        src="https://dashboard.retellai.com/retell-widget-v2.js"
        type="module"
        strategy="afterInteractive"
        data-public-key={publicKey}
        data-agent-id={chatAgentId}
        data-voice-public-key={publicKey}
        data-voice-agent-id={voiceAgentId}
        data-title="Meet Rexa"
        data-theme-color="#0b1f33"
        data-component-color="#b79b5b"
        data-fab-text="Ask Rexa"
        data-bot-name="Rexa"
        data-popup-message="Questions about UEM or LaunchOS? Ask Rexa."
        data-show-ai-popup="true"
        data-show-ai-popup-time="6"
        data-auto-open="false"
        data-dynamic={JSON.stringify({
          audience: 'public_website',
          contact_path: 'https://echelonconsulting.io/contact',
          launchos_path: 'https://launchos-demo.vercel.app',
        })}
      />
      <p className="sr-only">
        Rexa is Upper Echelon Management&apos;s public AI concierge. Do not share patient information,
        passwords, trade secrets, or confidential company information.
      </p>
    </>
  );
}
