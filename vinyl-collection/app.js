// ============================================================
//  MY VINYL COLLECTION — APP
//  Tiny hash router. Three views: home (genres), genre (artists),
//  artist (albums). No build step, no dependencies.
// ============================================================
const { GENRES, ERA_THEMES, ARTISTS, vinylColorFor } = window.COLLECTION;

const app = document.getElementById("app");
const bgLayer = document.getElementById("bg-layer");
const crumbs = document.getElementById("breadcrumbs");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");
const root = document.documentElement;

// ---------- helpers ----------
const byId = (id) => ARTISTS.find((a) => a.id === id);
const artistsInGenre = (g) => ARTISTS.filter((a) => a.genre === g);
const albumCount = (a) => a.albums.length;
const totalAlbums = ARTISTS.reduce((n, a) => n + a.albums.length, 0);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
  { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
));

// Build the CSS gradient used to paint a vinyl disc from its colors
function vinylGradient(colors) {
  if (colors.length === 1) {
    return `radial-gradient(circle at 42% 38%, #fff5 0 2%, ${colors[0]} 10% 100%)`;
  }
  if (colors.length === 2) {
    return `linear-gradient(135deg, ${colors[0]} 0 50%, ${colors[1]} 50% 100%)`;
  }
  // 3+ -> iridescent conic (holograms)
  return `conic-gradient(from 0deg, ${colors.join(", ")}, ${colors[0]})`;
}

function setTheme(accent, glow) {
  root.style.setProperty("--accent", accent || "#ff5db1");
  root.style.setProperty("--glow", glow || accent || "#ff5db1");
}
function setBackground(css) {
  bgLayer.style.background = css || "radial-gradient(circle at 30% 20%, #1a1033 0%, #0a0a0f 70%)";
  bgLayer.style.backgroundSize = "200% 200%";
}

// ---------- views ----------
function viewHome() {
  setTheme("#ff5db1");
  setBackground();
  crumbs.innerHTML = `<span class="current">Home</span>`;

  const cards = Object.entries(GENRES).map(([key, g]) => {
    const list = artistsInGenre(key);
    const albums = list.reduce((n, a) => n + a.albums.length, 0);
    return `
      <a class="genre-card" href="#/genre/${key}" style="--acc:${g.accent}">
        <span style="position:absolute;inset:0;z-index:-1;opacity:.85;
          background:linear-gradient(145deg, ${g.accent}44, #10101a 70%)"></span>
        <div class="genre-emoji">${g.emoji}</div>
        <div>
          <div class="genre-name">${esc(g.label)}</div>
          <div class="genre-count">${list.length} artists · ${albums} records</div>
        </div>
      </a>`;
  }).join("");

  app.innerHTML = `
    <h1 class="page-title">The Collection</h1>
    <p class="page-sub">${ARTISTS.length} artists · ${totalAlbums} records · pick a genre to dig in</p>
    <div class="genre-grid">${cards}</div>
  `;
}

function viewGenre(key) {
  const g = GENRES[key];
  if (!g) return viewHome();
  setTheme(g.accent);
  setBackground(`linear-gradient(145deg, ${g.accent}33, #0a0a0f 75%)`);
  crumbs.innerHTML = `<a href="#/">Home</a><span class="sep">/</span><span class="current">${esc(g.label)}</span>`;

  const list = artistsInGenre(key).sort((a, b) => a.name.localeCompare(b.name));
  const cards = list.map((a) => {
    const theme = ERA_THEMES[a.era] || {};
    return `
      <a class="artist-card" href="#/artist/${a.id}">
        <span class="era-fill" style="background:${theme.bg}"></span>
        <span class="chip">${albumCount(a)} record${albumCount(a) > 1 ? "s" : ""}</span>
        <div class="a-name">${esc(a.name)}</div>
        <div class="a-meta">${esc(theme.name || "")} era</div>
      </a>`;
  }).join("");

  app.innerHTML = `
    <a class="back-link" href="#/">← All genres</a>
    <h1 class="page-title">${g.emoji} ${esc(g.label)}</h1>
    <p class="page-sub">${list.length} artists in this genre</p>
    <div class="artist-grid">${cards || `<p class="empty">No artists here yet.</p>`}</div>
  `;
}

function viewArtist(id) {
  const a = byId(id);
  if (!a) return viewHome();
  const g = GENRES[a.genre] || {};
  const theme = ERA_THEMES[a.era] || {};
  setTheme(g.accent, theme.glow);
  setBackground(theme.bg);
  crumbs.innerHTML =
    `<a href="#/">Home</a><span class="sep">/</span>` +
    `<a href="#/genre/${a.genre}">${esc(g.label)}</a><span class="sep">/</span>` +
    `<span class="current">${esc(a.name)}</span>`;

  const albums = a.albums.map((al) => {
    const vc = vinylColorFor(al);
    const grad = vinylGradient(vc.colors);
    const swatch = vc.colors[0];
    const coverBg = `linear-gradient(135deg, ${theme.glow || g.accent || "#555"}, #10101a 80%)`;
    const tags = (al.tags || []).map((t) => `<span class="album-tag">${esc(t)}</span>`).join("");
    const sleeveInner = al.photo
      ? `<img src="${esc(al.photo)}" alt="${esc(al.title)} cover" loading="lazy" />`
      : `<div class="sleeve-title">${esc(al.title)}</div>`;
    return `
      <div class="album">
        <div class="album-cover" style="--cover-bg:${coverBg}; --vinyl-grad:${grad}">
          <div class="vinyl"></div>
          <div class="sleeve" style="--cover-bg:${coverBg}">${sleeveInner}</div>
          <div class="vinyl-tip">
            <span class="vinyl-swatch" style="background:${swatch}"></span>
            ${esc(vc.label)}
          </div>
        </div>
        <div class="album-info">
          <p class="album-title">${esc(al.title)}</p>
          <div class="album-tags">${tags}</div>
        </div>
      </div>`;
  }).join("");

  app.innerHTML = `
    <a class="back-link" href="#/genre/${a.genre}">← ${esc(g.label)}</a>
    <div class="artist-hero">
      <h1 class="page-title">${esc(a.name)}</h1>
      <span class="era-badge">${esc(theme.name || "")} era</span>
    </div>
    <p class="page-sub">${a.albums.length} record${a.albums.length > 1 ? "s" : ""} in the collection</p>
    <div class="album-grid">${albums}</div>
  `;
}

// ---------- search ----------
function viewSearch(q) {
  const term = q.trim().toLowerCase();
  setTheme("#ff5db1");
  setBackground();
  crumbs.innerHTML = `<a href="#/">Home</a><span class="sep">/</span><span class="current">Search</span>`;

  const hits = [];
  ARTISTS.forEach((a) => {
    const nameHit = a.name.toLowerCase().includes(term);
    const matchedAlbums = a.albums.filter((al) =>
      al.title.toLowerCase().includes(term) ||
      (al.tags || []).some((t) => t.toLowerCase().includes(term))
    );
    if (nameHit || matchedAlbums.length) {
      hits.push({ artist: a, albums: nameHit ? a.albums : matchedAlbums });
    }
  });

  const blocks = hits.map(({ artist, albums }) => {
    const theme = ERA_THEMES[artist.era] || {};
    const items = albums.map((al) => `<span class="album-tag">${esc(al.title)}</span>`).join(" ");
    return `
      <a class="artist-card" href="#/artist/${artist.id}" style="min-height:120px">
        <span class="era-fill" style="background:${theme.bg}"></span>
        <div class="a-name">${esc(artist.name)}</div>
        <div class="album-tags" style="margin-top:6px">${items}</div>
      </a>`;
  }).join("");

  app.innerHTML = `
    <h1 class="page-title">Search</h1>
    <p class="page-sub">${hits.length} result${hits.length === 1 ? "" : "s"} for “${esc(q)}”</p>
    <div class="artist-grid">${blocks || `<p class="empty">Nothing found. Try another word.</p>`}</div>
  `;
}

// ---------- router ----------
function render() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean); // e.g. ["genre","pop"]

  // keep search box in sync only when not actively a search route
  if (parts[0] === "genre") viewGenre(parts[1]);
  else if (parts[0] === "artist") viewArtist(parts[1]);
  else viewHome();

  statsEl.textContent = `${ARTISTS.length} artists · ${totalAlbums} records`;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

// live search (independent of the hash so it overlays current view)
let searchTimer;
searchEl.addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  const q = e.target.value;
  searchTimer = setTimeout(() => {
    if (q.trim()) viewSearch(q);
    else render();
  }, 120);
});
searchEl.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { searchEl.value = ""; render(); searchEl.blur(); }
});

// in case the script loads after DOMContentLoaded already fired
if (document.readyState !== "loading") render();
