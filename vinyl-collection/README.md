# 🎵 My Vinyl Collection

A cool, categorised website for a personal vinyl record collection.
No build step — just open `index.html` in a browser.

## What it does
- **Home** → genre grid (Pop, K-Pop, Rap/Hip-Hop, R&B/Soul, Rock, Alt/Emo)
- **Genre page** → cards for every artist in that genre
- **Artist page** → all their records, each with an **era-themed background**
  (80s neon, synthwave, K-pop neon, dark rap, after dark, Motown gold, emo, etc.)
- **Hover an album cover** → the vinyl record slides out, spins, and a tooltip
  shows the **actual color of that pressing** (orange, lavender split, seafoam,
  red splatter, silver, hologram, classic black…), read from each record's tags.
- **Search** (top-right) across artists, albums, and pressing variants.

## How to edit your collection
Everything lives in **`data.js`**. To add a record, find the artist and add to
their `albums` list:

```js
{ title: "Album Name", tags: ["Blue Vinyl", "2LP"] }
```

- `tags` is optional. Color words inside it (orange, lavender, seafoam, silver,
  splatter, hologram, clear, etc.) automatically drive the hover vinyl color.
- To force a specific disc color, add `color: "#1e90ff"` (or `color: ["#000","#f00"]`
  for a two-tone split) and an optional `colorLabel: "Sky Blue"`.

### Add a new artist
Add an object to the `ARTISTS` list with a unique `id`, a `genre` (one of the
keys in `GENRES`), and an `era` (one of the keys in `ERA_THEMES`). Reuse an
existing era or add your own gradient to `ERA_THEMES`.

### Use your own album photos
Drop image files into an `images/` folder and point a record at one:

```js
{ title: "Thriller", photo: "images/thriller.jpg" }
```

Without a photo, the sleeve shows a styled title card in that artist's era colors.

## Hosting (free)
Push to GitHub and enable **GitHub Pages** (Settings → Pages → deploy from the
`main` branch). The site is fully static, so it works anywhere.
