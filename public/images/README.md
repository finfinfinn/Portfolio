# Photos — where to add your real images

Drop Samuel's genuine photos into these exact paths. The site uses them
automatically once they exist (no code changes needed). Until then, each slot
shows a clearly-labelled placeholder on the page.

```
public/images/
├── me/
│   └── hero-rooftop.jpg      ← Hero: rooftop / city skyline (strongest visual)
├── track/
│   ├── starting-line.jpg     ← Track & Field: competition starting line
│   └── team.jpg              ← Track & Field: team photo with medals
└── interests/
    └── markets.jpg           ← Markets screenshot (shown small & secondary)
```

## Notes
- Keep the **filenames and paths exactly as above** — they are referenced in code.
- **hero-rooftop.jpg**: use a wide/landscape, good-quality version. A dark
  gradient is applied over the left/bottom so the text stays readable.
- **markets.jpg**: if any monetary figures are visible, consider cropping or
  masking them before adding the file. It is displayed small on purpose.
- Recommended formats: JPG (or WebP if you prefer — then update the `src`
  extensions in the components).
- Suggested sizes: hero ~2000px wide; others ~1200px wide.
