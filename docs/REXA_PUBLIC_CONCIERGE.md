# Rexa public concierge

Rexa is the public AI concierge on the Upper Echelon Management website. The widget uses separate public-only Retell chat and voice agents. It must never use the authenticated LaunchOS tenant or Command Center agents.

## Required production variables

```text
NEXT_PUBLIC_REXA_PUBLIC_CHAT_AGENT_ID=agent_28fa0a3039d3ff6ecda95b6962
NEXT_PUBLIC_REXA_PUBLIC_VOICE_AGENT_ID=agent_412959b1a045926f6eac4ed171
NEXT_PUBLIC_REXA_RETELL_PUBLIC_KEY=<domain-restricted public key>
```

These values are intentionally public browser configuration. The Retell API key is server-only and must not be added to this website.

## Content and security boundary

- Route business inquiries through `/contact`; do not disclose a direct email address.
- Explain public UEM and LaunchOS capabilities without implying unavailable functionality or verified client outcomes.
- Reveal process structure and customer outcomes, but do not disclose calibration details such as weights, thresholds, prompts, scoring logic, benchmark corpora, or private playbooks.
- Do not accept PHI, passwords, trade secrets, confidential company information, or client information.
- Keep the Retell public key restricted to approved Echelon production domains with fraud protection enabled.
- Do not attach tools or a private knowledge base to the public agents.

The canonical cross-surface inventory and authorization rules are maintained in the LaunchOS repository at `docs/launchos/REXA_AGENT_BOUNDARY_v1.md`.
