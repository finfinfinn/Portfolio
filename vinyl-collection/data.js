// ============================================================
//  MY VINYL COLLECTION — DATA
//  Edit this file to add/remove records. Everything else
//  (pages, backgrounds, filtering) updates automatically.
//
//  Each artist has:
//    id      - unique slug (used in the URL)
//    name    - display name
//    genre   - one of the keys in GENRES below
//    era     - a theme key (drives the background) see ERA_THEMES
//    albums  - list of { title, tags, photo }
//              tags: optional array, e.g. ["Orange Vinyl", "2LP"]
//              photo: optional path to your own photo of the sleeve
//                     e.g. "images/thriller.jpg" (drop files in /images)
// ============================================================

const GENRES = {
  pop:      { label: "Pop",          emoji: "🌟", accent: "#ff5db1" },
  kpop:     { label: "K-Pop",        emoji: "💜", accent: "#9b6bff" },
  raphiphop:{ label: "Rap / Hip-Hop",emoji: "🎤", accent: "#ffb43d" },
  rnb:      { label: "R&B / Soul",   emoji: "🩵", accent: "#36d1dc" },
  rock:     { label: "Rock",         emoji: "🎸", accent: "#ff4d4d" },
  alt:      { label: "Alt / Emo",    emoji: "🖤", accent: "#c0c0c0" },
};

// Era themes drive the per-artist background. Each is a CSS
// gradient + mood. You can reuse one across multiple artists.
const ERA_THEMES = {
  eighties:   { name: "80s Neon",        bg: "linear-gradient(135deg,#2b0a4a 0%,#7a1fa2 45%,#ff2d95 100%)", glow: "#ff2d95" },
  synthwave:  { name: "Synthwave",       bg: "linear-gradient(160deg,#0f0c29 0%,#302b63 50%,#24c6dc 120%)", glow: "#24c6dc" },
  y2k:        { name: "Y2K Shine",       bg: "linear-gradient(135deg,#ff9de3 0%,#a18cd1 60%,#8fd3ff 100%)", glow: "#ff9de3" },
  modernpop:  { name: "Modern Pop",      bg: "linear-gradient(140deg,#ff6a88 0%,#ff99ac 45%,#ffd2e0 100%)", glow: "#ff6a88" },
  kpopneon:   { name: "K-Pop Neon",      bg: "linear-gradient(135deg,#1f0038 0%,#6a00f4 50%,#ff00c8 100%)", glow: "#ff00c8" },
  kpopdream:  { name: "K-Pop Dream",     bg: "linear-gradient(150deg,#330867 0%,#30cfd0 100%)", glow: "#30cfd0" },
  goldenhiphop:{name: "Golden Hip-Hop",  bg: "linear-gradient(135deg,#1a1200 0%,#6b4b00 50%,#ffb43d 110%)", glow: "#ffb43d" },
  darkrap:    { name: "Dark Rap",        bg: "linear-gradient(140deg,#000000 0%,#2c003e 60%,#8e2de2 120%)", glow: "#8e2de2" },
  smoothrnb:  { name: "Smooth R&B",      bg: "linear-gradient(150deg,#02111b 0%,#0a4d68 55%,#36d1dc 120%)", glow: "#36d1dc" },
  afterdark:  { name: "After Dark",      bg: "linear-gradient(160deg,#000000 0%,#3a0000 55%,#ff1e1e 120%)", glow: "#ff1e1e" },
  classicrock:{ name: "Classic Rock",    bg: "linear-gradient(140deg,#1b1b1b 0%,#4a2b0a 55%,#d4af37 120%)", glow: "#d4af37" },
  arena80s:   { name: "80s Arena",       bg: "linear-gradient(135deg,#0b132b 0%,#3a506b 50%,#5bc0be 110%)", glow: "#5bc0be" },
  emo:        { name: "Emo Black Parade",bg: "linear-gradient(160deg,#000000 0%,#1a1a1a 50%,#6e0000 120%)", glow: "#b00000" },
  motown:     { name: "Motown Gold",     bg: "linear-gradient(140deg,#120d00 0%,#5e4400 55%,#ffd700 120%)", glow: "#ffd700" },
  dreampop:   { name: "Dream Pop",       bg: "linear-gradient(150deg,#2d0b4e 0%,#8e2de2 50%,#ff6fd1 120%)", glow: "#ff6fd1" },
};

const ARTISTS = [
  {
    id: "5sos", name: "5 Seconds of Summer", genre: "rock", era: "modernpop",
    albums: [
      { title: "Everyone's A Star!", tags: ["LP"] },
    ],
  },
  {
    id: "aespa", name: "aespa", genre: "kpop", era: "kpopneon",
    albums: [
      { title: "Armageddon" },
      { title: "Lemonade" },
      { title: "Whiplash" },
    ],
  },
  {
    id: "aha", name: "a-ha", genre: "pop", era: "eighties",
    albums: [
      { title: "Hunting High and Low", tags: ["Orange Vinyl"] },
    ],
  },
  {
    id: "ariana-grande", name: "Ariana Grande", genre: "pop", era: "modernpop",
    albums: [
      { title: "Dangerous Woman", tags: ["2LP"] },
      { title: "Eternal Sunshine" },
      { title: "My Everything", tags: ["Lavender Split Vinyl"] },
    ],
  },
  {
    id: "billie-eilish", name: "Billie Eilish", genre: "pop", era: "dreampop",
    albums: [
      { title: "Happier Than Ever" },
      { title: "HIT ME HARD AND SOFT", tags: ["Yellow Eco Vinyl"] },
    ],
  },
  {
    id: "bon-jovi", name: "Bon Jovi", genre: "rock", era: "arena80s",
    albums: [
      { title: "Greatest Hits" },
    ],
  },
  {
    id: "bruno-mars", name: "Bruno Mars", genre: "pop", era: "modernpop",
    albums: [
      { title: "24K Magic" },
      { title: "Doo-Wops & Hooligans" },
      { title: "Unorthodox Jukebox" },
    ],
  },
  {
    id: "daniel-caesar", name: "Daniel Caesar", genre: "rnb", era: "smoothrnb",
    albums: [
      { title: "Freudian" },
    ],
  },
  {
    id: "ed-sheeran", name: "Ed Sheeran", genre: "pop", era: "modernpop",
    albums: [
      { title: "÷ (Divide)" },
    ],
  },
  {
    id: "harry-styles", name: "Harry Styles", genre: "pop", era: "y2k",
    albums: [
      { title: "Fine Line" },
      { title: "Harry's House" },
      { title: "Harry Styles" },
      { title: "Kiss All the Time. Disco, Occasionally." },
    ],
  },
  {
    id: "kanye-west", name: "Kanye West", genre: "raphiphop", era: "darkrap",
    albums: [
      { title: "Donda", tags: ["4LP"] },
      { title: "Graduation" },
      { title: "My Beautiful Dark Twisted Fantasy", tags: ["3LP"] },
    ],
  },
  {
    id: "kendrick-lamar", name: "Kendrick Lamar", genre: "raphiphop", era: "darkrap",
    albums: [
      { title: "GNX" },
      { title: "good kid, m.A.A.d city" },
    ],
  },
  {
    id: "kesha", name: "Kesha", genre: "pop", era: "y2k",
    albums: [
      { title: "Animal + Cannibal", tags: ["Anniversary Edition"] },
    ],
  },
  {
    id: "keshi", name: "keshi", genre: "rnb", era: "smoothrnb",
    albums: [
      { title: "always" },
      { title: "bandaids" },
      { title: "GABRIEL" },
      { title: "Requiem" },
      { title: "skeletons" },
    ],
  },
  {
    id: "lady-gaga", name: "Lady Gaga", genre: "pop", era: "kpopneon",
    albums: [
      { title: "MAYHEM" },
    ],
  },
  {
    id: "lauv", name: "Lauv", genre: "pop", era: "dreampop",
    albums: [
      { title: "how i'm feeling" },
    ],
  },
  {
    id: "le-sserafim", name: "LE SSERAFIM", genre: "kpop", era: "kpopneon",
    albums: [
      { title: "CRAZY", tags: ["Hot Indie Exclusive Vinyl"] },
      { title: "PUREFLOW" },
    ],
  },
  {
    id: "lisa", name: "LISA", genre: "kpop", era: "kpopneon",
    albums: [
      { title: "Alter Ego" },
    ],
  },
  {
    id: "lorde", name: "Lorde", genre: "alt", era: "dreampop",
    albums: [
      { title: "Pure Heroine" },
    ],
  },
  {
    id: "michael-jackson", name: "Michael Jackson", genre: "pop", era: "motown",
    albums: [
      { title: "Bad" },
      { title: "Off the Wall" },
      { title: "Thriller" },
    ],
  },
  {
    id: "mcr", name: "My Chemical Romance", genre: "alt", era: "emo",
    albums: [
      { title: "The Black Parade", tags: ["20th Anniversary", "Hologram"] },
    ],
  },
  {
    id: "paramore", name: "Paramore", genre: "alt", era: "emo",
    albums: [
      { title: "Paramore" },
    ],
  },
  {
    id: "queen", name: "Queen", genre: "rock", era: "classicrock",
    albums: [
      { title: "Greatest Hits I" },
      { title: "Greatest Hits II" },
      { title: "Live Killers", tags: ["1979 Japanese Pressing", "Mint", "with Obi"] },
    ],
  },
  {
    id: "rose", name: "ROSÉ", genre: "kpop", era: "kpopdream",
    albums: [
      { title: "rosie", tags: ["Vampirehollie Red Edition"] },
    ],
  },
  {
    id: "the-marias", name: "The Marías", genre: "alt", era: "dreampop",
    albums: [
      { title: "CINEMA" },
      { title: "Submarine" },
    ],
  },
  {
    id: "the-weeknd", name: "The Weeknd", genre: "rnb", era: "afterdark",
    albums: [
      { title: "AFTER HOURS", tags: ["Clear/Red Splatter", "2LP"] },
      { title: "Dawn FM", tags: ["Alternate Cover", "Silver Vinyl"] },
      { title: "Starboy" },
      { title: "The Highlights" },
      { title: "Kiss Land", tags: ["Seafoam"] },
      { title: "House Of Balloons" },
      { title: "My Dear Melancholy", tags: ["RSD"] },
    ],
  },
  {
    id: "tiffany-day", name: "Tiffany Day", genre: "pop", era: "dreampop",
    albums: [
      { title: "HALO", tags: ["Coke Bottle Clear Vinyl"] },
    ],
  },
  {
    id: "travis-scott", name: "Travis Scott", genre: "raphiphop", era: "darkrap",
    albums: [
      { title: "ASTROWORLD" },
    ],
  },
  {
    id: "twice", name: "TWICE", genre: "kpop", era: "kpopdream",
    albums: [
      { title: "This Is For", tags: ["World Tour"] },
    ],
  },
  {
    id: "wham", name: "Wham!", genre: "pop", era: "eighties",
    albums: [
      { title: "Make It Big" },
    ],
  },
];

// ------------------------------------------------------------
//  VINYL COLOR DETECTION
//  Figures out what color the actual record is, from its tags.
//  Shown as a spinning disc when you hover an album cover.
//  To force a color, add  color: "#hex"  (or a name) to an album.
// ------------------------------------------------------------
const VINYL_COLOR_MAP = [
  // keyword (lowercase)  ->  one or two colors for the disc
  { k: "red splatter",       c: ["#f2c9c9", "#e01e1e"] },
  { k: "clear/red splatter", c: ["#f2c9c9", "#e01e1e"] },
  { k: "lavender split",     c: ["#cbb6f5", "#6a4fd0"] },
  { k: "split",              c: ["#cbb6f5", "#6a4fd0"] },
  { k: "clear/red",          c: ["#f2c9c9", "#e01e1e"] },
  { k: "red",                c: ["#d81e1e"] },
  { k: "orange",             c: ["#ff7a18"] },
  { k: "lavender",           c: ["#b79cf0"] },
  { k: "yellow",         c: ["#f4d11a"] },
  { k: "silver",         c: ["#c9ccd1"] },
  { k: "seafoam",        c: ["#73e0c4"] },
  { k: "coke bottle",    c: ["#78b89a"] },
  { k: "clear",          c: ["#dfeaf2"] },
  { k: "hologram",       c: ["#9df", "#f9d", "#9fd"] }, // iridescent-ish
  { k: "indie exclusive",c: ["#ff4fa3"] },
];

// Returns { colors:[...], label } describing the vinyl disc, or null for standard black
function vinylColorFor(album) {
  if (album.color) {
    const arr = Array.isArray(album.color) ? album.color : [album.color];
    return { colors: arr, label: album.colorLabel || "Colored vinyl" };
  }
  const hay = (album.tags || []).join(" ").toLowerCase();
  for (const { k, c } of VINYL_COLOR_MAP) {
    if (hay.includes(k)) {
      const match = (album.tags || []).find(t => t.toLowerCase().includes(k));
      return { colors: c, label: match || "Colored vinyl" };
    }
  }
  return { colors: ["#1a1a1a", "#333"], label: "Classic black vinyl" };
}

// expose globally for the plain-JS pages
window.COLLECTION = { GENRES, ERA_THEMES, ARTISTS, vinylColorFor };
