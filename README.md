# Samuel Ong — Portfolio

A one-page personal portfolio for a mock interview: **IoT & Automation Engineer
Intern at Innowave Tech (Singapore)**.

**Tagline:** BUILT TO ADAPT. DRIVEN TO IMPROVE.

Built with **Vite + React + TypeScript**. Dark editorial/industrial aesthetic,
restrained motion, keyboard-accessible, responsive, and reduced-motion aware.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
npm run lint     # oxlint
node scripts/smoke.mjs   # render smoke test (checks sections + accuracy guards)
```

## Add the real photos

Placeholders are shown until you drop the genuine photos at these **exact
paths** (no code changes needed — they load automatically):

```
public/images/
├── me/hero-rooftop.jpg        # Hero: rooftop / city skyline
├── track/starting-line.jpg    # Track & Field: competition starting line
├── track/team.jpg             # Track & Field: team photo with medals
└── interests/markets.jpg      # Markets screenshot (shown small & secondary)
```

See `public/images/README.md` for sizing notes and a reminder to crop/mask any
monetary figures in the markets screenshot.

## Editing content

All copy lives in one place: **`src/data/content.ts`**. Edit text there without
touching layout. Keep claims accurate to the resume — the copy deliberately does
**not** assert experience with MQTT, Modbus, Linux, edge computing, deployment,
or specific PLC brands.

## Section flow

Hero → About → Technical Foundation → Projects → How I Approach Challenges →
Beyond Engineering (Track & Field) → Outside Engineering (Markets) →
Why Innowave → Closing / Connect.
