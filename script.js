(() => {
  "use strict";

  const RAW_TRACKS = [
    {
      id: "neon-district", title: "Neon District", artist: "Nova Lines", album: "After Hours", genre: "Electronic", mood: "Night drive",
      bpm: 96, root: 45, bars: 8, chords: [[0, 3, 7, 10], [8, 12, 15, 19], [5, 8, 12, 17], [7, 10, 14, 17]],
      melody: [24, null, 27, 29, null, 27, 24, null, 22, null, 24, 27, null, 19, 22, null],
      pattern: "four", wave: "sawtooth", energy: 0.78, swing: 0.08, art: "rings", palette: ["#101226", "#7255ee", "#d9ff63"],
      description: "A polished nocturnal groove with a rounded bassline, electric keys, and a synth lead that flickers like city signage."
    },
    {
      id: "slow-satellites", title: "Slow Satellites", artist: "Ariel Moss", album: "Orbital Studies", genre: "Ambient", mood: "Deep focus",
      bpm: 72, root: 48, bars: 6, chords: [[0, 7, 14, 16], [5, 12, 16, 21], [9, 16, 19, 24], [7, 14, 17, 23]],
      melody: [24, null, null, 28, null, null, 31, null, 26, null, null, 24, null, null, 21, null],
      pattern: "sparse", wave: "sine", energy: 0.25, swing: 0, art: "orbits", palette: ["#071c26", "#177c91", "#bdebe0"],
      description: "Weightless pads and widely spaced bell tones leave room for reading, thinking, and long-form concentration."
    },
    {
      id: "apricot-sky", title: "Apricot Sky", artist: "Sunday Circuit", album: "Good Light", genre: "Lo-fi", mood: "Slow morning",
      bpm: 84, root: 50, bars: 8, chords: [[0, 4, 7, 11], [9, 12, 16, 19], [5, 9, 12, 16], [7, 11, 14, 18]],
      melody: [24, 26, null, 28, null, 26, 23, null, 21, null, 24, null, 19, null, 21, null],
      pattern: "laidback", wave: "triangle", energy: 0.48, swing: 0.2, art: "sun", palette: ["#4a1f26", "#f07e54", "#ffd58a"],
      description: "Dusty drums, warm major-seventh chords, and an unhurried melody made for the first cup of coffee."
    },
    {
      id: "velvet-static", title: "Velvet Static", artist: "Mira Vale", album: "Soft Noise", genre: "Downtempo", mood: "Unwind",
      bpm: 78, root: 43, bars: 8, chords: [[0, 3, 7, 14], [5, 8, 12, 15], [10, 14, 17, 21], [7, 10, 15, 19]],
      melody: [24, null, 22, null, 19, 22, null, 24, null, 27, null, 24, 22, null, 19, null],
      pattern: "halftime", wave: "triangle", energy: 0.38, swing: 0.13, art: "waves", palette: ["#24162e", "#9a5b91", "#edb7cb"],
      description: "A low-slung halftime rhythm wrapped in hushed texture, soft transients, and an understated minor-key refrain."
    },
    {
      id: "glass-garden", title: "Glass Garden", artist: "Orbital Youth", album: "New Forms", genre: "Electronic", mood: "Creative spark",
      bpm: 112, root: 47, bars: 8, chords: [[0, 4, 7, 14], [2, 5, 9, 12], [7, 11, 14, 18], [5, 9, 12, 16]],
      melody: [24, 28, 31, null, 28, 26, 24, null, 21, 24, 26, 28, null, 26, 24, null],
      pattern: "break", wave: "square", energy: 0.85, swing: 0.04, art: "prism", palette: ["#0b2630", "#2c9a8f", "#e8ff9a"],
      description: "Bright arpeggios and clipped percussion fold into one another like light passing through a greenhouse."
    },
    {
      id: "afterglow-avenue", title: "Afterglow Avenue", artist: "Mono Lake", album: "After Hours", genre: "House", mood: "Night drive",
      bpm: 118, root: 46, bars: 8, chords: [[0, 3, 7, 10], [5, 8, 12, 15], [8, 12, 15, 19], [10, 14, 17, 22]],
      melody: [24, null, 24, 27, null, 29, 27, null, 24, null, 22, 24, null, 20, 22, null],
      pattern: "four", wave: "sawtooth", energy: 0.9, swing: 0, art: "horizon", palette: ["#251331", "#d34880", "#ffad66"],
      description: "A steady four-on-the-floor pulse and neon chord stabs capture the last few miles of a midnight drive."
    },
    {
      id: "low-tide-logic", title: "Low Tide Logic", artist: "Juniper Club", album: "Tidal Memory", genre: "Ambient", mood: "Unwind",
      bpm: 66, root: 41, bars: 6, chords: [[0, 7, 12, 16], [3, 10, 15, 19], [8, 15, 19, 22], [5, 12, 16, 19]],
      melody: [24, null, null, null, 26, null, 28, null, null, null, 23, null, null, 21, null, null],
      pattern: "sparse", wave: "sine", energy: 0.18, swing: 0, art: "tide", palette: ["#071b25", "#18566d", "#88c9c4"],
      description: "Slow harmonic movement and isolated high tones evoke water withdrawing over a quiet, moonlit shore."
    },
    {
      id: "midnight-archive", title: "Midnight Archive", artist: "Northbound", album: "Paper & Dust", genre: "Jazz", mood: "Deep focus",
      bpm: 90, root: 44, bars: 8, chords: [[0, 4, 7, 10], [5, 9, 12, 16], [2, 5, 9, 12], [7, 11, 14, 17]],
      melody: [24, null, 27, 26, null, 24, 21, null, 19, 21, null, 24, null, 22, 19, null],
      pattern: "laidback", wave: "triangle", energy: 0.52, swing: 0.28, art: "archive", palette: ["#201c17", "#766246", "#e4c990"],
      description: "Swing drums and close-voiced electric piano chords sound like a discovery in a record shop after closing."
    },
    {
      id: "soft-machines", title: "Soft Machines", artist: "Analog Meadow", album: "Gentle Systems", genre: "Downtempo", mood: "Creative spark",
      bpm: 102, root: 49, bars: 8, chords: [[0, 4, 7, 11], [7, 11, 14, 18], [9, 12, 16, 19], [5, 9, 12, 16]],
      melody: [24, 26, 28, null, 31, null, 28, 26, null, 24, 21, null, 23, 24, null, null],
      pattern: "break", wave: "triangle", energy: 0.65, swing: 0.1, art: "steps", palette: ["#15241d", "#4d8a63", "#d7e7a4"],
      description: "Precise percussion meets rounded, almost-human synth phrases in a gently kinetic study of organic machinery."
    },
    {
      id: "solar-drift", title: "Solar Drift", artist: "Echo Fields", album: "Good Light", genre: "House", mood: "Slow morning",
      bpm: 108, root: 52, bars: 8, chords: [[0, 4, 7, 11], [5, 9, 12, 16], [7, 11, 14, 18], [2, 5, 9, 12]],
      melody: [24, null, 28, 29, null, 31, 28, null, 26, null, 24, 26, null, 21, 23, null],
      pattern: "four", wave: "sine", energy: 0.72, swing: 0.06, art: "bloom", palette: ["#362010", "#d79035", "#fff0a6"],
      description: "Golden chords and a buoyant low end build a warm, optimistic loop without rushing the moment."
    },
    {
      id: "rain-on-raster", title: "Rain on Raster", artist: "Kite Hotel", album: "Soft Noise", genre: "Lo-fi", mood: "Rainy day",
      bpm: 80, root: 45, bars: 8, chords: [[0, 3, 7, 10], [8, 12, 15, 19], [3, 7, 10, 14], [10, 14, 17, 21]],
      melody: [24, null, 24, 22, null, 19, null, 22, 24, null, 27, null, 26, 24, null, null],
      pattern: "halftime", wave: "sine", energy: 0.35, swing: 0.18, art: "rain", palette: ["#151b28", "#465c7c", "#a9c5d6"],
      description: "A soft, imperfect beat and sparse blue notes settle into the comforting rhythm of rain against a window."
    },
    {
      id: "last-train-home", title: "Last Train Home", artist: "SonicFlow Studio", album: "Tidal Memory", genre: "Jazz", mood: "Night drive",
      bpm: 94, root: 40, bars: 8, chords: [[0, 3, 7, 10], [5, 8, 12, 15], [3, 7, 10, 14], [7, 10, 14, 17]],
      melody: [24, 27, null, 26, 24, null, 22, null, 19, null, 22, 24, null, 19, 17, null],
      pattern: "laidback", wave: "triangle", energy: 0.58, swing: 0.24, art: "rails", palette: ["#18191f", "#54566d", "#e7b96b"],
      description: "A wistful, late-night refrain rides brushed percussion and rolling bass toward a quietly familiar destination."
    }
  ];

  const DRUM_PATTERNS = {
    four: { kick: [0, 4, 8, 12], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14] },
    break: { kick: [0, 6, 10], snare: [4, 12], hat: [0, 2, 3, 4, 6, 8, 10, 11, 12, 14, 15] },
    laidback: { kick: [0, 7, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14] },
    halftime: { kick: [0, 10], snare: [8], hat: [0, 4, 6, 8, 12, 14] },
    sparse: { kick: [0], snare: [], hat: [8] }
  };

  const FLOW_CAPTIONS = [
    "A pulse sets the pace. Every loop starts with a rhythm designed to carry you, never crowd you.",
    "Harmony gives it color. Original chord studies move between warmth, tension, and release.",
    "Space lets it breathe. Melodies arrive with intention, leaving enough quiet for your own thoughts."
  ];

  const TRACKS = RAW_TRACKS.map((track) => ({
    ...track,
    duration: track.duration || (track.bars * 4 * 60) / track.bpm,
    sourceType: track.sourceType || "generated"
  }));

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const audio = $("#audio")
  const artworkCache = new Map();
  const audioUrlCache = new Map();
  const viewLists = { quick: [], discover: [], library: [], favorites: [], recent: [] };
  let tracks = [...TRACKS];
  let requestToken = 0;
  let visualizerFrame = null;
  let audioContext = null;
  let analyser = null;
  let mediaSource = null;
  let scrollTicking = false;
  let databasePromise = null;
  let storageAvailable = true;
  let lastSavedSecond = -1;

  const state = {
    route: "home",
    query: "",
    genre: "all",
    mood: "all",
    discoverSort: "curated",
    librarySort: "title",
    currentId: null,
    queue: [],
    queueIndex: -1,
    favorites: new Set(readStorage("sonicflow-favorites", [])),
    recent: readStorage("sonicflow-recent", []),
    shuffle: readStorage("sonicflow-settings", {}).shuffle || false,
    repeat: readStorage("sonicflow-settings", {}).repeat || "off",
    volume: typeof readStorage("sonicflow-settings", {}).volume === "number" ? readStorage("sonicflow-settings", {}).volume : 0.75,
    muted: false,
    isPlaying: false,
    busy: false,
    unavailable: new Set(),
    pendingSeek: 0
  };

  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // The player remains usable when private browsing blocks storage.
    }
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[character]);
  }

  function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  }

  function getTrack(id) {
    return tracks.find((track) => track.id === id) || null;
  }

  function currentTrack() {
    return getTrack(state.currentId);
  }

  function getArtwork(track) {
    if (track.artwork) {
      return track.artwork;
    }
    if (artworkCache.has(track.id)) {
      return artworkCache.get(track.id);
    }
    const [dark, mid, light] = track.palette;
    const commonStart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${dark}"/><stop offset="1" stop-color="${mid}"/></linearGradient><radialGradient id="glow"><stop stop-color="${light}" stop-opacity=".9"/><stop offset="1" stop-color="${light}" stop-opacity="0"/></radialGradient><filter id="blur"><feGaussianBlur stdDeviation="24"/></filter></defs><rect width="600" height="600" fill="url(#bg)"/>`;
    const patterns = {
      rings: `<circle cx="310" cy="290" r="225" fill="none" stroke="${light}" stroke-opacity=".22"/><circle cx="310" cy="290" r="170" fill="none" stroke="${light}" stroke-opacity=".45"/><circle cx="310" cy="290" r="112" fill="${light}"/><circle cx="310" cy="290" r="48" fill="${dark}"/><path d="M0 460 600 190" stroke="${light}" stroke-opacity=".3"/>`,
      orbits: `<circle cx="300" cy="270" r="190" fill="url(#glow)" opacity=".3"/><ellipse cx="300" cy="300" rx="235" ry="90" fill="none" stroke="${light}" stroke-opacity=".55" transform="rotate(-25 300 300)"/><ellipse cx="300" cy="300" rx="160" ry="230" fill="none" stroke="${light}" stroke-opacity=".28" transform="rotate(35 300 300)"/><circle cx="300" cy="300" r="73" fill="${light}"/><circle cx="480" cy="190" r="18" fill="${mid}" stroke="${light}"/>`,
      sun: `<circle cx="300" cy="275" r="190" fill="${light}"/><path d="M0 330h600M0 365h600M0 405h600M0 450h600" stroke="${dark}" stroke-width="12" stroke-opacity=".5"/><path d="m0 520 180-90 150 65 270-170v275H0Z" fill="${dark}" fill-opacity=".7"/>`,
      waves: `<circle cx="430" cy="140" r="150" fill="url(#glow)" opacity=".45"/><path d="M-40 180q90-100 180 0t180 0 180 0 180 0M-40 270q90-100 180 0t180 0 180 0 180 0M-40 360q90-100 180 0t180 0 180 0 180 0M-40 450q90-100 180 0t180 0 180 0 180 0" fill="none" stroke="${light}" stroke-width="4" stroke-opacity=".65"/>`,
      prism: `<path d="m300 65 230 410H70Z" fill="${light}" fill-opacity=".8"/><path d="m300 65 30 410H70Z" fill="${mid}"/><path d="m300 65 230 410H330Z" fill="${dark}" fill-opacity=".65"/><circle cx="160" cy="160" r="110" fill="url(#glow)"/>`,
      horizon: `<circle cx="300" cy="235" r="150" fill="${light}"/><path d="M0 350h600" stroke="${light}" stroke-width="3"/><path d="m300 350-260 250m260-250-120 250m120-250v250m0-250 120 250m-120-250 260 250M0 410h600M0 490h600" stroke="${light}" stroke-opacity=".4"/>`,
      tide: `<path d="M0 160q150-90 300 0t300 0v440H0Z" fill="${mid}"/><path d="M0 250q150-90 300 0t300 0M0 340q150-90 300 0t300 0M0 430q150-90 300 0t300 0" fill="none" stroke="${light}" stroke-width="3" stroke-opacity=".55"/><circle cx="450" cy="110" r="55" fill="${light}"/>`,
      archive: `<rect x="105" y="90" width="390" height="420" rx="8" fill="${dark}" stroke="${light}" stroke-opacity=".5"/><path d="M150 155h300M150 205h230M150 255h280M150 355h300M150 405h180" stroke="${light}" stroke-width="5" stroke-opacity=".45"/><circle cx="410" cy="410" r="55" fill="${mid}" stroke="${light}"/>`,
      steps: `<path d="M70 480h110V370h105V260h105V150h140v330Z" fill="${light}" fill-opacity=".75"/><path d="M70 510h460" stroke="${dark}" stroke-width="12"/><circle cx="180" cy="165" r="90" fill="url(#glow)"/>`,
      bloom: `<circle cx="300" cy="300" r="75" fill="${dark}"/><g fill="${light}" fill-opacity=".75"><ellipse cx="300" cy="150" rx="80" ry="140"/><ellipse cx="300" cy="450" rx="80" ry="140"/><ellipse cx="150" cy="300" rx="140" ry="80"/><ellipse cx="450" cy="300" rx="140" ry="80"/></g><circle cx="300" cy="300" r="65" fill="${mid}"/>`,
      rain: `<path d="m100 50-80 200m190-210-80 220m200-180-90 240m220-220-90 240m190-120-70 190M170 330l-80 220m210-180-70 190m210-230-90 240m200-170-60 160" stroke="${light}" stroke-width="5" stroke-linecap="round" stroke-opacity=".55"/><circle cx="430" cy="140" r="120" fill="url(#glow)" opacity=".35"/>`,
      rails: `<circle cx="420" cy="145" r="75" fill="${light}"/><path d="m210 600 120-430m80 430L330 170M265 460h110M280 390h75M295 320h50M305 260h30" stroke="${light}" stroke-width="7" stroke-opacity=".65"/><path d="M0 520h600" stroke="${mid}" stroke-width="70"/>`,
      local: `<rect x="90" y="90" width="420" height="420" rx="40" fill="${dark}" fill-opacity=".5" stroke="${light}" stroke-opacity=".5"/><path d="M150 300h45l35-110 65 220 55-170 45 120 35-60h70" fill="none" stroke="${light}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`
    };
    const overlay = `<rect width="600" height="600" fill="none" stroke="${light}" stroke-opacity=".18" stroke-width="20"/><circle cx="70" cy="70" r="150" fill="url(#glow)" opacity=".16" filter="url(#blur)"/></svg>`;
    const url = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(commonStart + (patterns[track.art] || patterns.local) + overlay)}`;
    artworkCache.set(track.id, url);
    return url;
  }

  function trackCard(track, index, context) {
    const favorite = state.favorites.has(track.id);
    const current = state.currentId === track.id;
    const playing = current && state.isPlaying;
    const badge = track.sourceType === "local" ? "ON THIS DEVICE" : track.bpm ? `${track.bpm} BPM · ${track.mood.toUpperCase()}` : track.mood.toUpperCase();
    return `<article class="track-card${current ? " is-current" : ""}${state.unavailable.has(track.id) ? " unavailable" : ""}" data-track-card="${escapeHTML(track.id)}" style="--delay:${Math.min(index, 10) * 45}ms" title="${escapeHTML(track.description)}">
      <div class="card-art">
        <img src="${getArtwork(track)}" alt="Abstract artwork for ${escapeHTML(track.title)}" loading="lazy" width="500" height="500">
        <span class="card-badge">${escapeHTML(badge)}</span>
        <button class="icon-button card-favorite favorite-button${favorite ? " is-favorite" : ""}" data-favorite-id="${escapeHTML(track.id)}" aria-label="${favorite ? "Remove" : "Add"} ${escapeHTML(track.title)} ${favorite ? "from" : "to"} favorites" aria-pressed="${favorite}">${icon("heart")}</button>
        <button class="card-play" data-play-id="${escapeHTML(track.id)}" data-context="${context}" aria-label="${playing ? "Pause" : "Play"} ${escapeHTML(track.title)}">${icon(playing ? "pause" : "play")}</button>
      </div>
      <div class="card-copy"><div><h3>${escapeHTML(track.title)}</h3><p>${escapeHTML(track.artist)} · ${escapeHTML(track.genre)}</p></div><span class="card-time">${formatTime(track.duration)}</span></div>
    </article>`;
  }

  function trackRow(track, index) {
    const favorite = state.favorites.has(track.id);
    const current = state.currentId === track.id;
    const playing = current && state.isPlaying;
    return `<div class="track-row${current ? " is-current" : ""}" role="row" data-track-row="${escapeHTML(track.id)}" style="--delay:${Math.min(index, 12) * 28}ms">
      <span class="row-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="row-title"><button class="row-art-button" data-play-id="${escapeHTML(track.id)}" data-context="library" aria-label="${playing ? "Pause" : "Play"} ${escapeHTML(track.title)}"><img src="${getArtwork(track)}" alt="" width="48" height="48">${icon(playing ? "pause" : "play")}</button><div class="row-title-copy"><strong>${escapeHTML(track.title)}</strong><span>${escapeHTML(track.artist)}</span></div></div>
      <span class="row-album">${escapeHTML(track.album)}</span><span class="row-genre">${escapeHTML(track.genre)}</span><span class="row-duration">${formatTime(track.duration)}</span>
      <div class="row-actions"><button class="icon-button favorite-button${favorite ? " is-favorite" : ""}" data-favorite-id="${escapeHTML(track.id)}" aria-label="Toggle favorite" aria-pressed="${favorite}">${icon("heart")}</button><button class="icon-button" data-queue-add="${escapeHTML(track.id)}" aria-label="Add ${escapeHTML(track.title)} to queue" title="Add to queue">${icon("plus")}</button>${track.sourceType === "local" ? `<button class="icon-button remove-import" data-remove-import="${escapeHTML(track.id)}" aria-label="Remove ${escapeHTML(track.title)} from this browser" title="Remove local import">${icon("trash")}</button>` : ""}</div>
    </div>`;
  }

  function matchesQuery(track) {
    const haystack = `${track.title} ${track.artist} ${track.album} ${track.genre} ${track.mood} ${track.description}`.toLowerCase();
    return haystack.includes(state.query.trim().toLowerCase());
  }

  function filteredTracks(source) {
    return source.filter((track) => matchesQuery(track));
  }

  function renderQuick() {
    viewLists.quick = tracks.slice(0, 4);
    $("#quick-grid").innerHTML = viewLists.quick.map((track, index) => trackCard(track, index, "quick")).join("");
  }

  function renderDiscover() {
    let list = filteredTracks(tracks.filter((track) => state.genre === "all" || track.genre === state.genre).filter((track) => state.mood === "all" || track.mood === state.mood));
    if (state.discoverSort === "title") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.discoverSort === "bpm") {
      list = [...list].sort((a, b) => (a.bpm || 0) - (b.bpm || 0));
    } else if (state.discoverSort === "duration") {
      list = [...list].sort((a, b) => a.duration - b.duration);
    }
    viewLists.discover = list;
    $("#discover-grid").innerHTML = list.map((track, index) => trackCard(track, index, "discover")).join("");
    $("#discover-count").textContent = `${list.length} ${list.length === 1 ? "sound" : "sounds"}`;
    $("#discover-empty").hidden = list.length > 0;
    $("#discover-grid").hidden = list.length === 0;
  }

  function renderLibrary() {
    const list = filteredTracks(tracks).sort((a, b) => {
      if (state.librarySort === "duration") {
        return a.duration - b.duration;
      }
      return String(a[state.librarySort]).localeCompare(String(b[state.librarySort]));
    });
    viewLists.library = list;
    $("#library-list").innerHTML = list.map(trackRow).join("");
    $("#library-empty").hidden = list.length > 0;
    const importCount = tracks.filter((track) => track.sourceType === "local").length;
    $("#library-summary").textContent = `${TRACKS.length} original loops${importCount ? ` and ${importCount} local ${importCount === 1 ? "import" : "imports"}` : ""}, ready for offline-style local playback.`;
  }

  function renderFavorites() {
    const list = filteredTracks(tracks.filter((track) => state.favorites.has(track.id)));
    viewLists.favorites = list;
    $("#favorites-grid").innerHTML = list.map((track, index) => trackCard(track, index, "favorites")).join("");
    $("#favorites-empty").hidden = state.favorites.size > 0;
    $("#favorites-grid").hidden = list.length === 0;
    $("#favorites-actions").hidden = list.length === 0;
    if (state.favorites.size > 0 && list.length === 0) {
      $("#favorites-grid").innerHTML = `<div class="empty-state" style="grid-column:1/-1"><h2>No favorites match.</h2><p>Clear your search to see every saved sound.</p></div>`;
      $("#favorites-grid").hidden = false;
    }
    $("#favorites-summary").textContent = `${state.favorites.size} saved ${state.favorites.size === 1 ? "sound" : "sounds"}, stored only in this browser.`;
    $("#favorite-count").textContent = String(state.favorites.size);
  }

  function renderRecent() {
    const list = state.recent.map(getTrack).filter(Boolean).slice(0, 6);
    viewLists.recent = list;
    $("#recent-section").hidden = list.length === 0;
    $("#recent-row").innerHTML = list.slice(0, 3).map((track) => `<button class="recent-card" data-play-id="${escapeHTML(track.id)}" data-context="recent"><img src="${getArtwork(track)}" alt="" width="68" height="68"><div><strong>${escapeHTML(track.title)}</strong><span>${escapeHTML(track.artist)} · ${escapeHTML(track.mood)}</span></div>${icon(state.currentId === track.id && state.isPlaying ? "pause" : "play")}</button>`).join("");
  }

  function renderFilters() {
    const genres = ["all", ...new Set(TRACKS.map((track) => track.genre))];
    $("#discover-genres").innerHTML = genres.map((genre) => `<button class="filter-chip${state.genre === genre ? " active" : ""}" data-genre="${escapeHTML(genre)}" aria-pressed="${state.genre === genre}">${genre === "all" ? "All sounds" : escapeHTML(genre)}</button>`).join("");
    const moods = [...new Set(TRACKS.map((track) => track.mood))].sort();
    $("#mood-filter").innerHTML = `<option value="all">All moods</option>${moods.map((mood) => `<option value="${escapeHTML(mood)}"${state.mood === mood ? " selected" : ""}>${escapeHTML(mood)}</option>`).join("")}`;
  }

  function renderQueue() {
    const track = currentTrack();
    $("#queue-now").innerHTML = track ? `<div class="queue-now-card"><img src="${getArtwork(track)}" alt="Artwork for ${escapeHTML(track.title)}"><div><strong>${escapeHTML(track.title)}</strong><span>${escapeHTML(track.artist)} · ${escapeHTML(track.description)}</span></div></div>` : "";
    const upcoming = state.queue.map((id, index) => ({ track: getTrack(id), index })).filter((item) => item.track && item.index > state.queueIndex);
    $("#queue-list").innerHTML = upcoming.map(({ track: item, index }) => `<div class="queue-item"><img src="${getArtwork(item)}" alt="" width="38" height="38"><button class="queue-item-copy" data-queue-jump="${index}"><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.artist)} · ${formatTime(item.duration)}</span></button><div class="queue-item-actions"><button class="icon-button" data-queue-move="up" data-queue-index="${index}" aria-label="Move ${escapeHTML(item.title)} earlier" ${index <= state.queueIndex + 1 ? "disabled" : ""}>${icon("up")}</button><button class="icon-button" data-queue-move="down" data-queue-index="${index}" aria-label="Move ${escapeHTML(item.title)} later" ${index === state.queue.length - 1 ? "disabled" : ""}>${icon("down")}</button><button class="icon-button" data-queue-remove="${index}" aria-label="Remove ${escapeHTML(item.title)} from queue">${icon("close")}</button></div></div>`).join("");
    $("#queue-count").textContent = String(Math.max(0, state.queue.length - state.queueIndex - 1));
    $("#queue-empty").hidden = upcoming.length > 0;
    $("#queue-list").hidden = upcoming.length === 0;
  }

  function renderCurrentTrack() {
    const track = currentTrack();
    const displayTrack = track || tracks[0];
    if (!displayTrack) {
      return;
    }
    $("#hero-art").src = getArtwork(displayTrack);
    $("#hero-track-title").textContent = displayTrack.title;
    $("#hero-track-artist").textContent = displayTrack.artist;
    $("#hero-bpm").textContent = displayTrack.bpm || "LOCAL";
    $("#hero-track-number").textContent = `${String(tracks.indexOf(displayTrack) + 1).padStart(2, "0")} / ${tracks.length}`;
    $("#flow-core-art").src = getArtwork(TRACKS[4]);
    $("#player-art").src = getArtwork(displayTrack);
    if (track) {
      $("#player-title").textContent = track.title;
      $("#player-artist").textContent = `${track.artist} — ${track.album}`;
      $("#player-duration").textContent = formatTime(audio.duration || track.duration);
    } else {
      $("#player-title").textContent = "Choose a track";
      $("#player-artist").textContent = "Your next favorite is waiting";
      $("#player-duration").textContent = "0:00";
    }
    $("#track-total").textContent = String(tracks.length);
    syncFavoriteButtons();
    updateMediaSession();
  }

  function renderAll() {
    renderQuick();
    renderDiscover();
    renderLibrary();
    renderFavorites();
    renderRecent();
    renderQueue();
    renderCurrentTrack();
    syncPlaybackUI();
  }

  function syncFavoriteButtons() {
    $$('[data-favorite-id]').forEach((button) => {
      const favorite = state.favorites.has(button.dataset.favoriteId);
      button.classList.toggle("is-favorite", favorite);
      button.setAttribute("aria-pressed", String(favorite));
      button.setAttribute("aria-label", `${favorite ? "Remove from" : "Add to"} favorites`);
    });
    const displayTrack = currentTrack() || tracks[0];
    [$("#hero-favorite"), $("#player-favorite")].forEach((button) => {
      const target = button.id === "hero-favorite" ? displayTrack : currentTrack();
      const favorite = Boolean(target && state.favorites.has(target.id));
      button.classList.toggle("is-favorite", favorite);
      button.setAttribute("aria-pressed", String(favorite));
    });
    $("#player-favorite").disabled = !currentTrack();
  }

  function syncPlaybackUI() {
    const playing = state.isPlaying;
    $("#player").classList.toggle("is-playing", playing);
    $("#play-button").classList.toggle("is-loading", state.busy);
    $("#play-button").setAttribute("aria-label", state.busy ? "Preparing audio" : playing ? "Pause" : "Play");
    $("#play-button use").setAttribute("href", playing ? "#i-pause" : "#i-play");
    $("#hero-play").innerHTML = `<span class="button-play">${icon(playing ? "pause" : "play")}</span>${playing ? "Pause the flow" : "Play the flow"}`;
    $$('[data-play-id]').forEach((button) => {
      const isCurrent = button.dataset.playId === state.currentId;
      const use = $("use", button);
      if (use) {
        use.setAttribute("href", isCurrent && playing ? "#i-pause" : "#i-play");
      }
      const track = getTrack(button.dataset.playId);
      if (track) {
        button.setAttribute("aria-label", `${isCurrent && playing ? "Pause" : "Play"} ${track.title}`);
      }
    });
    $$('[data-track-card]').forEach((card) => card.classList.toggle("is-current", card.dataset.trackCard === state.currentId));
    $$('[data-track-row]').forEach((row) => row.classList.toggle("is-current", row.dataset.trackRow === state.currentId));
    $("#shuffle-button").classList.toggle("active", state.shuffle);
    $("#shuffle-button").setAttribute("aria-pressed", String(state.shuffle));
    $("#shuffle-button").setAttribute("aria-label", state.shuffle ? "Turn shuffle off" : "Turn shuffle on");
    $("#repeat-button").dataset.mode = state.repeat;
    $("#repeat-button").classList.toggle("active", state.repeat !== "off");
    $("#repeat-button").setAttribute("aria-label", `Repeat ${state.repeat}. Activate to change`);
    audio.loop = state.repeat === "one";
    $("#seek-bar").disabled = !state.currentId;
    $("#previous-button").disabled = state.queue.length === 0;
    $("#next-button").disabled = state.queue.length === 0;
    updateRange($("#volume-bar"), $("#volume-fill"), state.muted ? 0 : state.volume);
    document.title = trackDocumentTitle();
  }

  function trackDocumentTitle() {
    const track = currentTrack();
    if (track && state.isPlaying) {
      return `${track.title} · ${track.artist} — SonicFlow`;
    }
    const names = { home: "Find your frequency", discover: "Discover", library: "Library", favorites: "Favorites" };
    return `${names[state.route]} — SonicFlow`;
  }

  function setStatus(message) {
    $("#player-status").textContent = message;
  }

  function toast(message, type = "info") {
    const element = document.createElement("div");
    element.className = `toast ${type}`;
    element.innerHTML = `${icon(type === "error" ? "info" : "check")}<span>${escapeHTML(message)}</span><button aria-label="Dismiss notification">${icon("close")}</button>`;
    const remove = () => {
      if (!element.isConnected) {
        return;
      }
      element.classList.add("leaving");
      window.setTimeout(() => element.remove(), 260);
    };
    $("button", element).addEventListener("click", remove);
    $("#toast-region").appendChild(element);
    window.setTimeout(remove, type === "error" ? 6500 : 4200);
  }

  function persistSettings() {
    writeStorage("sonicflow-settings", { volume: state.volume, repeat: state.repeat, shuffle: state.shuffle });
  }

  function persistSession() {
    writeStorage("sonicflow-session", {
      currentId: state.currentId,
      queue: state.queue,
      queueIndex: state.queueIndex,
      time: audio.currentTime || state.pendingSeek || 0
    });
  }

  function updateRange(input, fill, value) {
    const min = Number(input.min);
    const max = Number(input.max);
    const percent = clamp(((value - min) / (max - min)) * 100, 0, 100);
    input.value = String(value);
    fill.style.width = `${percent}%`;
    input.parentElement.style.setProperty("--range-position", `${percent}%`);
  }

  function addToRecent(id) {
    state.recent = [id, ...state.recent.filter((item) => item !== id)].slice(0, 6);
    writeStorage("sonicflow-recent", state.recent);
    renderRecent();
  }

  function toggleFavorite(id) {
    const track = getTrack(id);
    if (!track) {
      return;
    }
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      toast(`${track.title} removed from favorites`);
    } else {
      state.favorites.add(id);
      toast(`${track.title} saved to favorites`);
    }
    writeStorage("sonicflow-favorites", [...state.favorites]);
    renderFavorites();
    syncFavoriteButtons();
  }

  function contextIds(context) {
    const list = viewLists[context] || tracks;
    return list.map((track) => track.id);
  }

  function activateTrack(id, context) {
    if (id === state.currentId && (audio.src || state.busy)) {
      togglePlay();
      return;
    }
    playTrack(id, contextIds(context));
  }

  function playTrack(id, ids) {
    const track = getTrack(id);
    if (!track || state.unavailable.has(id)) {
      toast("That audio is unavailable. Choose another track.", "error");
      return;
    }
    if (Array.isArray(ids) && ids.length) {
      const validIds = ids.filter((item) => getTrack(item));
      state.queue = [...validIds];
      state.queueIndex = state.queue.indexOf(id);
      if (state.shuffle) {
        shuffleQueueAround(id);
      }
    } else if (!state.queue.includes(id)) {
      const insertAt = Math.max(0, state.queueIndex + 1);
      state.queue.splice(insertAt, 0, id);
      state.queueIndex = insertAt;
    } else {
      state.queueIndex = state.queue.indexOf(id);
    }
    selectTrack(id, true, 0);
  }

  function selectTrack(id, autoplay, startAt) {
    const track = getTrack(id);
    if (!track) {
      return;
    }
    requestToken += 1;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    state.currentId = id;
    state.pendingSeek = startAt || 0;
    state.isPlaying = false;
    state.busy = false;
    lastSavedSecond = -1;
    updateProgress(0, track.duration);
    renderCurrentTrack();
    renderQueue();
    syncPlaybackUI();
    persistSession();
    setStatus(track.sourceType === "local" ? "Local file ready" : "Original loop ready");
    if (autoplay) {
      loadAndPlay(id);
    }
  }

  async function togglePlay() {
    if (state.busy) {
      return;
    }
    if (!state.currentId) {
      const fallback = contextIds(state.route === "favorites" ? "favorites" : "quick");
      if (!fallback.length) {
        toast("Add a favorite or import a track to begin.");
        return;
      }
      playTrack(fallback[0], fallback);
      return;
    }
    if (!audio.paused) {
      audio.pause();
      return;
    }
    await loadAndPlay(state.currentId);
  }

  async function loadAndPlay(id) {
    const track = getTrack(id);
    if (!track) {
      return;
    }
    const token = ++requestToken;
    state.busy = true;
    syncPlaybackUI();
    try {
      await ensureAudioGraph();
      if (audio.getAttribute("src")) {
        setStatus(track.sourceType === "local" ? "Playing from this device" : "Playing an original SonicFlow loop");
        await audio.play();
        state.busy = false;
        syncPlaybackUI();
        return;
      }
      let url = track.url || audioUrlCache.get(id);
      if (!url && track.sourceType === "generated") {
        setStatus("Composing your original loop…");
        const blob = await synthesizeTrack(track);
        url = URL.createObjectURL(blob);
        audioUrlCache.set(id, url);
      }
      if (!url) {
        throw new Error("No playable audio source is attached to this track.");
      }
      if (token !== requestToken || state.currentId !== id) {
        return;
      }
      audio.src = url;
      audio.load();
      audio.volume = state.muted ? 0 : state.volume;
      if (state.pendingSeek > 0) {
        const seekTo = Math.min(state.pendingSeek, Math.max(0, track.duration - 0.2));
        audio.addEventListener("loadedmetadata", () => {
          if (state.currentId === id) {
            audio.currentTime = seekTo;
          }
        }, { once: true });
      }
      setStatus(track.sourceType === "local" ? "Playing from this device" : "Playing an original SonicFlow loop");
      await audio.play();
      if (audioContext && audioContext.state === "suspended") {
        await audioContext.resume();
      }
    } catch (error) {
      if (token !== requestToken) {
        return;
      }
      state.busy = false;
      state.isPlaying = false;
      if (error.name === "NotAllowedError") {
        setStatus("Your browser blocked autoplay — press play to continue");
        toast("Press play once more to allow browser audio.", "error");
      } else if (error.name === "AbortError") {
        setStatus("Ready when you are");
      } else {
        setStatus("Audio could not be prepared — try another track");
        toast(error.message || "This browser could not prepare the audio.", "error");
      }
      syncPlaybackUI();
    }
  }

  function nextTrack(manual = true) {
    if (!state.queue.length) {
      return;
    }
    if (!manual && state.repeat === "one") {
      audio.currentTime = 0;
      audio.play().catch(() => setStatus("Press play to repeat"));
      return;
    }
    let nextIndex = state.queueIndex + 1;
    if (nextIndex >= state.queue.length) {
      if (state.repeat === "all" || manual) {
        nextIndex = 0;
      } else {
        state.isPlaying = false;
        setStatus("End of queue — play again or choose a new sound");
        syncPlaybackUI();
        return;
      }
    }
    state.queueIndex = nextIndex;
    selectTrack(state.queue[nextIndex], true, 0);
  }

  function previousTrack() {
    if (audio.currentTime > 3 && state.currentId) {
      audio.currentTime = 0;
      updateProgress(0, audio.duration);
      return;
    }
    if (!state.queue.length) {
      return;
    }
    state.queueIndex = state.queueIndex > 0 ? state.queueIndex - 1 : state.queue.length - 1;
    selectTrack(state.queue[state.queueIndex], true, 0);
  }

  function shuffleArray(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function shuffleQueueAround(id) {
    const remaining = shuffleArray(state.queue.filter((item) => item !== id));
    state.queue = [id, ...remaining];
    state.queueIndex = 0;
  }

  function toggleShuffle() {
    state.shuffle = !state.shuffle;
    if (state.currentId) {
      if (state.shuffle) {
        shuffleQueueAround(state.currentId);
      } else {
        const current = state.currentId;
        state.queue.sort((a, b) => tracks.findIndex((track) => track.id === a) - tracks.findIndex((track) => track.id === b));
        state.queueIndex = state.queue.indexOf(current);
      }
    }
    persistSettings();
    persistSession();
    renderQueue();
    syncPlaybackUI();
    toast(state.shuffle ? "Shuffle on — your upcoming queue has been mixed" : "Shuffle off — catalog order restored");
  }

  function cycleRepeat() {
    const modes = ["off", "all", "one"];
    state.repeat = modes[(modes.indexOf(state.repeat) + 1) % modes.length];
    persistSettings();
    syncPlaybackUI();
    toast(state.repeat === "off" ? "Repeat off" : state.repeat === "all" ? "Repeat the entire queue" : "Repeat this track");
  }

  function addToQueue(id) {
    const track = getTrack(id);
    if (!track) {
      return;
    }
    if (state.queue.includes(id)) {
      toast(`${track.title} is already in your queue`);
      return;
    }
    state.queue.push(id);
    if (!state.currentId) {
      state.queueIndex = 0;
      selectTrack(id, false, 0);
    }
    persistSession();
    renderQueue();
    toast(`${track.title} added to your queue`);
  }

  function updateProgress(current, duration) {
    const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
    const percent = safeDuration ? clamp((current / safeDuration) * 100, 0, 100) : 0;
    $("#player-current-time").textContent = formatTime(current);
    $("#player-duration").textContent = formatTime(safeDuration || currentTrack()?.duration || 0);
    updateRange($("#seek-bar"), $("#seek-fill"), percent);
  }

  async function ensureAudioGraph() {
    if (mediaSource) {
      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }
      return;
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }
    try {
      audioContext = new AudioContextClass();
      mediaSource = audioContext.createMediaElementSource(audio);
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.82;
      mediaSource.connect(analyser);
      analyser.connect(audioContext.destination);
      await audioContext.resume();
    } catch (error) {
      audioContext = null;
      analyser = null;
      mediaSource = null;
    }
  }

  function seededRandom(seed) {
    let value = seed >>> 0;
    return () => {
      value += 0x6D2B79F5;
      let result = value;
      result = Math.imul(result ^ (result >>> 15), result | 1);
      result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
      return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
  }

  function midiToFrequency(note) {
    return 440 * (2 ** ((note - 69) / 12));
  }

  function scheduleTone(context, destination, frequency, start, duration, options) {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    const filter = context.createBiquadFilter();
    oscillator.type = options.wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.detune.setValueAtTime(options.detune || 0, start);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(options.cutoff || 4200, start);
    filter.Q.setValueAtTime(0.7, start);
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.linearRampToValueAtTime(options.volume, start + Math.min(options.attack || 0.02, duration / 3));
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(filter);
    filter.connect(envelope);
    envelope.connect(destination);
    if (options.echo) {
      envelope.connect(options.echo);
    }
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  function scheduleDrum(context, destination, noiseBuffer, type, start, volume) {
    if (type === "kick") {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      oscillator.frequency.setValueAtTime(125, start);
      oscillator.frequency.exponentialRampToValueAtTime(43, start + 0.12);
      envelope.gain.setValueAtTime(volume, start);
      envelope.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
      oscillator.connect(envelope);
      envelope.connect(destination);
      oscillator.start(start);
      oscillator.stop(start + 0.2);
      return;
    }
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    const length = type === "snare" ? 0.18 : 0.055;
    source.buffer = noiseBuffer;
    filter.type = type === "snare" ? "bandpass" : "highpass";
    filter.frequency.setValueAtTime(type === "snare" ? 1500 : 6500, start);
    envelope.gain.setValueAtTime(volume, start);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + length);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(destination);
    source.start(start);
    source.stop(start + length + 0.02);
  }

  async function synthesizeTrack(track) {
    const OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!OfflineContext) {
      throw new Error("This browser cannot synthesize the built-in loops. Import an MP3 instead.");
    }
    const sampleRate = 22050;
    const duration = track.duration + 0.25;
    const context = new OfflineContext(2, Math.ceil(duration * sampleRate), sampleRate);
    const master = context.createGain();
    const compressor = context.createDynamicsCompressor();
    master.gain.setValueAtTime(0.62, 0);
    compressor.threshold.setValueAtTime(-15, 0);
    compressor.knee.setValueAtTime(18, 0);
    compressor.ratio.setValueAtTime(5, 0);
    compressor.attack.setValueAtTime(0.006, 0);
    compressor.release.setValueAtTime(0.18, 0);
    master.connect(compressor);
    compressor.connect(context.destination);

    const delay = context.createDelay(1);
    const delayFeedback = context.createGain();
    const delayFilter = context.createBiquadFilter();
    delay.delayTime.setValueAtTime((60 / track.bpm) * 0.75, 0);
    delayFeedback.gain.setValueAtTime(0.24, 0);
    delayFilter.type = "lowpass";
    delayFilter.frequency.setValueAtTime(2300, 0);
    delay.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFilter.connect(master);

    const noiseBuffer = context.createBuffer(1, sampleRate, sampleRate);
    const noise = noiseBuffer.getChannelData(0);
    const seed = [...track.id].reduce((total, character) => total + character.charCodeAt(0), 0);
    const random = seededRandom(seed);
    for (let index = 0; index < noise.length; index += 1) {
      noise[index] = random() * 2 - 1;
    }

    const beat = 60 / track.bpm;
    const bar = beat * 4;
    for (let barIndex = 0; barIndex < track.bars; barIndex += 1) {
      const chord = track.chords[barIndex % track.chords.length];
      const start = barIndex * bar;
      chord.forEach((interval, noteIndex) => {
        scheduleTone(context, master, midiToFrequency(track.root + 12 + interval), start, bar * 0.96, {
          wave: noteIndex % 2 ? "sine" : "triangle", volume: 0.032 + track.energy * 0.012,
          attack: 0.12, cutoff: 1700 + track.energy * 1600, detune: noteIndex * 2 - 3
        });
      });
      for (let beatIndex = 0; beatIndex < 4; beatIndex += 1) {
        scheduleTone(context, master, midiToFrequency(track.root + chord[0] - 12), start + beatIndex * beat, beat * 0.72, {
          wave: "sine", volume: 0.11 + track.energy * 0.035, attack: 0.012, cutoff: 650
        });
      }
    }

    const stepDuration = beat / 4;
    const pattern = DRUM_PATTERNS[track.pattern];
    const totalSteps = track.bars * 16;
    for (let step = 0; step < totalSteps; step += 1) {
      const position = step % 16;
      const swingOffset = step % 2 ? stepDuration * track.swing : 0;
      const start = step * stepDuration + swingOffset;
      if (pattern.kick.includes(position)) {
        scheduleDrum(context, master, noiseBuffer, "kick", start, 0.2 + track.energy * 0.12);
      }
      if (pattern.snare.includes(position)) {
        scheduleDrum(context, master, noiseBuffer, "snare", start, 0.065 + track.energy * 0.025);
      }
      if (pattern.hat.includes(position)) {
        scheduleDrum(context, master, noiseBuffer, "hat", start, 0.018 + track.energy * 0.016);
      }
      if (step % 2 === 0) {
        const note = track.melody[(step / 2) % track.melody.length];
        if (note !== null) {
          scheduleTone(context, master, midiToFrequency(track.root + note), start, beat * (track.energy > 0.7 ? 0.34 : 0.62), {
            wave: track.wave, volume: 0.027 + track.energy * 0.018, attack: 0.008,
            cutoff: 1800 + track.energy * 3300, echo: delay, detune: position % 4 ? 2 : -2
          });
        }
      }
    }
    const rendered = await context.startRendering();
    return audioBufferToWav(rendered);
  }

  function audioBufferToWav(buffer) {
    const channels = buffer.numberOfChannels;
    const frames = buffer.length;
    const bytes = 44 + frames * channels * 2;
    const arrayBuffer = new ArrayBuffer(bytes);
    const view = new DataView(arrayBuffer);
    const writeText = (offset, text) => {
      for (let index = 0; index < text.length; index += 1) {
        view.setUint8(offset + index, text.charCodeAt(index));
      }
    };
    writeText(0, "RIFF");
    view.setUint32(4, bytes - 8, true);
    writeText(8, "WAVE");
    writeText(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, channels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * channels * 2, true);
    view.setUint16(32, channels * 2, true);
    view.setUint16(34, 16, true);
    writeText(36, "data");
    view.setUint32(40, frames * channels * 2, true);
    const channelData = Array.from({ length: channels }, (_, index) => buffer.getChannelData(index));
    let offset = 44;
    for (let frame = 0; frame < frames; frame += 1) {
      for (let channel = 0; channel < channels; channel += 1) {
        const sample = clamp(channelData[channel][frame], -1, 1);
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
      }
    }
    return new Blob([arrayBuffer], { type: "audio/wav" });
  }

  function drawVisualizers() {
    if (!analyser || !state.isPlaying) {
      visualizerFrame = null;
      return;
    }
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    const track = currentTrack() || TRACKS[0];
    drawBars($("#hero-visualizer"), data, track.palette[2], 42);
    drawBars($("#mini-visualizer"), data, track.palette[2], 18);
    visualizerFrame = requestAnimationFrame(drawVisualizers);
  }

  function drawBars(canvas, data, color, count) {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    const context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.fillStyle = color;
    const gap = 3;
    const barWidth = Math.max(1, (width - gap * (count - 1)) / count);
    for (let index = 0; index < count; index += 1) {
      const dataIndex = Math.floor((index / count) * data.length * 0.72);
      const level = Math.max(1, (data[dataIndex] / 255) * height);
      context.globalAlpha = 0.25 + (data[dataIndex] / 255) * 0.75;
      context.fillRect(index * (barWidth + gap), height - level, barWidth, level);
    }
    context.globalAlpha = 1;
  }

  function updateMediaSession() {
    const track = currentTrack();
    if (!track || !("mediaSession" in navigator) || !("MediaMetadata" in window)) {
      return;
    }
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: [{ src: getArtwork(track), sizes: "600x600", type: "image/svg+xml" }]
    });
  }

  function openQueue() {
    $("#queue-panel").classList.add("open");
    $("#queue-panel").setAttribute("aria-hidden", "false");
    $("#drawer-backdrop").hidden = false;
    document.body.classList.add("queue-open");
    $$(".queue-trigger").forEach((button) => button.setAttribute("aria-expanded", "true"));
    renderQueue();
    $("#close-queue").focus();
  }

  function closeQueue() {
    $("#queue-panel").classList.remove("open");
    $("#queue-panel").setAttribute("aria-hidden", "true");
    $("#drawer-backdrop").hidden = true;
    document.body.classList.remove("queue-open");
    $$(".queue-trigger").forEach((button) => button.setAttribute("aria-expanded", "false"));
  }

  function openImport() {
    const dialog = $("#import-modal");
    if (!dialog.open) {
      dialog.showModal();
    }
  }

  function activateRoute(route, scroll = true) {
    const validRoute = ["home", "discover", "library", "favorites"].includes(route) ? route : "home";
    state.route = validRoute;
    document.body.dataset.route = validRoute;
    $$(".app-view").forEach((view) => {
      const active = view.dataset.view === validRoute;
      view.hidden = !active;
      view.classList.toggle("active", active);
    });
    $$(".nav-link").forEach((link) => {
      const active = link.dataset.route === validRoute;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    closeQueue();
    if (validRoute === "discover") {
      renderDiscover();
    } else if (validRoute === "library") {
      renderLibrary();
    } else if (validRoute === "favorites") {
      renderFavorites();
    } else {
      renderRecent();
    }
    if (scroll) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    syncPlaybackUI();
    requestScrollUpdate();
  }

  function goTo(route) {
    const hash = `#${route}`;
    if (window.location.hash === hash) {
      activateRoute(route);
    } else {
      window.location.hash = hash;
    }
  }

  function resetFilters() {
    state.query = "";
    state.genre = "all";
    state.mood = "all";
    state.discoverSort = "curated";
    $("#search-input").value = "";
    $("#discover-sort").value = "curated";
    renderFilters();
    renderDiscover();
  }

  function requestScrollUpdate() {
    if (scrollTicking) {
      return;
    }
    scrollTicking = true;
    requestAnimationFrame(updateScrollScenes);
  }

  function updateScrollScenes() {
    scrollTicking = false;
    const scrollTop = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    $("#scroll-progress").style.transform = `scaleX(${clamp(scrollTop / maxScroll, 0, 1)})`;
    $("#topbar").classList.toggle("scrolled", scrollTop > 25);
    if (state.route !== "home") {
      return;
    }
    if (!reducedMotion.matches) {
      const heroProgress = clamp(scrollTop / Math.max(1, window.innerHeight), 0, 1);
      $(".hero-copy").style.transform = `translate3d(0,${heroProgress * 75}px,0)`;
      $(".hero-copy").style.opacity = String(1 - heroProgress * 0.8);
      $("#hero-stage").style.transform = `translate3d(0,${heroProgress * 130}px,0) scale(${1 - heroProgress * 0.16}) rotate(${heroProgress * 3}deg)`;
      $("#hero-art").style.transform = `scale(${1 + heroProgress * 0.12})`;
      const story = $("#flow-story");
      const distance = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = clamp((scrollTop - story.offsetTop) / distance, 0, 1);
      updateFlowScene(progress);
    }
  }

  function updateFlowScene(progress) {
    const scene = $(".flow-scene");
    const width = scene.clientWidth;
    const height = scene.clientHeight;
    const convergence = clamp(progress / 0.68, 0, 1);
    const eased = 1 - ((1 - convergence) ** 3);
    const remaining = 1 - eased;
    const panelFade = 1 - clamp((progress - 0.56) / 0.18, 0, 1);
    const transforms = [
      { x: -width * 0.29, y: height * 0.03, rotation: -14, scale: 0.87 },
      { x: 0, y: -height * 0.09, rotation: 3, scale: 0.93 },
      { x: width * 0.29, y: height * 0.04, rotation: 14, scale: 0.87 }
    ];
    $$(".flow-panel").forEach((panel, index) => {
      const item = transforms[index];
      panel.style.transform = `translate(calc(-50% + ${item.x * remaining}px),calc(-50% + ${item.y * remaining + (index === 1 ? 0 : 40 * eased)}px)) rotate(${item.rotation * remaining}deg) scale(${item.scale + (1 - item.scale) * eased})`;
      panel.style.opacity = String(panelFade);
    });
    const reveal = clamp((progress - 0.43) / 0.33, 0, 1);
    const coreEase = 1 - ((1 - reveal) ** 3);
    $(".flow-core").style.opacity = String(coreEase);
    $(".flow-core").style.transform = `translate(-50%,-50%) rotate(${(1 - coreEase) * -12}deg) scale(${0.55 + coreEase * 0.45})`;
    const step = Math.min(2, Math.floor(progress * 3));
    $$("[data-flow-step]").forEach((element) => element.classList.toggle("active", Number(element.dataset.flowStep) === step));
    if ($("#flow-story-caption").textContent !== FLOW_CAPTIONS[step]) {
      $("#flow-story-caption").textContent = FLOW_CAPTIONS[step];
    }
  }

  function openDatabase() {
    if (databasePromise) {
      return databasePromise;
    }
    databasePromise = new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("IndexedDB is unavailable"));
        return;
      }
      const request = indexedDB.open("sonicflow-local-audio", 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains("files")) {
          request.result.createObjectStore("files", { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return databasePromise;
  }

  async function databaseOperation(mode, operation) {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("files", mode);
      const store = transaction.objectStore("files");
      const request = operation(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function localTrackFromRecord(record, url, duration) {
    const paletteOptions = [
      ["#171d28", "#486787", "#b9d9e8"], ["#271924", "#8c536f", "#efb5c9"], ["#18261d", "#4f8460", "#d4e7a5"]
    ];
    const seed = [...record.id].reduce((total, character) => total + character.charCodeAt(0), 0);
    return {
      id: record.id,
      title: record.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim() || "Untitled local audio",
      artist: "On this device",
      album: "Local imports",
      genre: "Local",
      mood: "Your library",
      description: `A local audio file named ${record.name}. It has never left this browser.`,
      duration: duration || record.duration || 0,
      sourceType: "local",
      url,
      art: "local",
      palette: paletteOptions[seed % paletteOptions.length],
      bpm: null
    };
  }

  async function restoreImports() {
    try {
      const records = await databaseOperation("readonly", (store) => store.getAll());
      const imported = [];
      for (const record of records) {
        if (!record.blob) {
          continue;
        }
        const url = URL.createObjectURL(record.blob);
        imported.push(localTrackFromRecord(record, url, record.duration));
      }
      tracks = [...TRACKS, ...imported];
      $("#storage-status").textContent = `${imported.length} locally stored ${imported.length === 1 ? "file" : "files"} restored. Nothing was uploaded.`;
    } catch (error) {
      storageAvailable = false;
      $("#storage-status").textContent = "Persistent file storage is blocked. Imports will last for this tab only.";
    }
  }

  function readAudioDuration(url) {
    return new Promise((resolve, reject) => {
      const probe = new Audio();
      const timeout = window.setTimeout(() => {
        probe.removeAttribute("src");
        reject(new Error("Metadata reading timed out"));
      }, 12000);
      probe.preload = "metadata";
      probe.addEventListener("loadedmetadata", () => {
        window.clearTimeout(timeout);
        const duration = Number.isFinite(probe.duration) ? probe.duration : 0;
        probe.removeAttribute("src");
        resolve(duration);
      }, { once: true });
      probe.addEventListener("error", () => {
        window.clearTimeout(timeout);
        reject(new Error("This browser cannot decode that audio format"));
      }, { once: true });
      probe.src = url;
    });
  }

  async function importFiles(fileList) {
    const files = Array.from(fileList);
    if (!files.length) {
      return;
    }
    $("#import-modal").close();
    toast(`Reading ${files.length} local ${files.length === 1 ? "file" : "files"}…`);
    let added = 0;
    for (const [index, file] of files.entries()) {
      const url = URL.createObjectURL(file);
      const id = `local-${Date.now()}-${index}`;
      try {
        const duration = await readAudioDuration(url);
        const record = { id, name: file.name, type: file.type, blob: file, duration };
        if (storageAvailable) {
          try {
            await databaseOperation("readwrite", (store) => store.put(record));
          } catch (error) {
            storageAvailable = false;
            toast("Storage is full or blocked; this import will last for this tab only.", "error");
          }
        }
        tracks.push(localTrackFromRecord(record, url, duration));
        added += 1;
      } catch (error) {
        URL.revokeObjectURL(url);
        toast(`${file.name}: ${error.message}`, "error");
      }
    }
    $("#audio-file-input").value = "";
    if (added) {
      renderAll();
      toast(`${added} ${added === 1 ? "track" : "tracks"} added to your library`);
      goTo("library");
    }
  }

  async function removeImport(id) {
    const track = getTrack(id);
    if (!track || track.sourceType !== "local") {
      return;
    }
    if (state.currentId === id) {
      requestToken += 1;
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      state.currentId = null;
      state.isPlaying = false;
    }
    if (track.url) {
      URL.revokeObjectURL(track.url);
    }
    tracks = tracks.filter((item) => item.id !== id);
    state.queue = state.queue.filter((item) => item !== id);
    state.queueIndex = state.currentId ? state.queue.indexOf(state.currentId) : -1;
    state.favorites.delete(id);
    state.recent = state.recent.filter((item) => item !== id);
    artworkCache.delete(id);
    writeStorage("sonicflow-favorites", [...state.favorites]);
    writeStorage("sonicflow-recent", state.recent);
    try {
      await databaseOperation("readwrite", (store) => store.delete(id));
    } catch (error) {
      // The in-memory import is still removed when persistent storage is unavailable.
    }
    persistSession();
    renderAll();
    toast(`${track.title} removed from this browser`);
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const routeLink = event.target.closest(".route-link");
      if (routeLink) {
        goTo(routeLink.dataset.route);
        return;
      }
      const play = event.target.closest("[data-play-id]");
      if (play) {
        activateTrack(play.dataset.playId, play.dataset.context);
        return;
      }
      const favorite = event.target.closest("[data-favorite-id]");
      if (favorite) {
        toggleFavorite(favorite.dataset.favoriteId);
        return;
      }
      const genre = event.target.closest("[data-genre]");
      if (genre) {
        state.genre = genre.dataset.genre;
        renderFilters();
        renderDiscover();
        return;
      }
      const queueAdd = event.target.closest("[data-queue-add]");
      if (queueAdd) {
        addToQueue(queueAdd.dataset.queueAdd);
        return;
      }
      const queueJump = event.target.closest("[data-queue-jump]");
      if (queueJump) {
        state.queueIndex = Number(queueJump.dataset.queueJump);
        selectTrack(state.queue[state.queueIndex], true, 0);
        return;
      }
      const queueMove = event.target.closest("[data-queue-move]");
      if (queueMove) {
        const index = Number(queueMove.dataset.queueIndex);
        const target = queueMove.dataset.queueMove === "up" ? index - 1 : index + 1;
        if (target > state.queueIndex && target < state.queue.length) {
          [state.queue[index], state.queue[target]] = [state.queue[target], state.queue[index]];
          persistSession();
          renderQueue();
        }
        return;
      }
      const queueRemove = event.target.closest("[data-queue-remove]");
      if (queueRemove) {
        state.queue.splice(Number(queueRemove.dataset.queueRemove), 1);
        persistSession();
        renderQueue();
        return;
      }
      const remove = event.target.closest("[data-remove-import]");
      if (remove) {
        removeImport(remove.dataset.removeImport);
        return;
      }
      if (event.target.closest(".import-trigger")) {
        openImport();
      }
    });

    $("#play-button").addEventListener("click", togglePlay);
    $("#hero-play").addEventListener("click", togglePlay);
    $("#next-button").addEventListener("click", () => nextTrack(true));
    $("#previous-button").addEventListener("click", previousTrack);
    $("#shuffle-button").addEventListener("click", toggleShuffle);
    $("#repeat-button").addEventListener("click", cycleRepeat);
    $("#hero-favorite").addEventListener("click", () => {
      const track = currentTrack() || tracks[0];
      if (track) {
        toggleFavorite(track.id);
      }
    });
    $("#player-favorite").addEventListener("click", () => {
      if (state.currentId) {
        toggleFavorite(state.currentId);
      }
    });
    $$(".queue-trigger").forEach((button) => button.addEventListener("click", openQueue));
    $("#player-art-button").addEventListener("click", openQueue);
    $("#close-queue").addEventListener("click", closeQueue);
    $("#drawer-backdrop").addEventListener("click", closeQueue);
    $("#clear-queue").addEventListener("click", () => {
      state.queue = state.currentId ? [state.currentId] : [];
      state.queueIndex = state.currentId ? 0 : -1;
      persistSession();
      renderQueue();
      toast("Upcoming tracks cleared");
    });
    $("#clear-history").addEventListener("click", () => {
      state.recent = [];
      writeStorage("sonicflow-recent", []);
      renderRecent();
      toast("Recently played cleared");
    });
    $("#reset-filters").addEventListener("click", resetFilters);
    $("#empty-reset").addEventListener("click", resetFilters);
    $("#discover-sort").addEventListener("change", (event) => {
      state.discoverSort = event.target.value;
      renderDiscover();
    });
    $("#library-sort").addEventListener("change", (event) => {
      state.librarySort = event.target.value;
      renderLibrary();
      syncPlaybackUI();
    });
    $("#mood-filter").addEventListener("change", (event) => {
      state.mood = event.target.value;
      renderDiscover();
    });
    $("#search-input").addEventListener("input", (event) => {
      state.query = event.target.value;
      if (state.route === "home") {
        goTo("discover");
      }
      if (state.route === "discover") {
        renderDiscover();
      } else if (state.route === "library") {
        renderLibrary();
      } else if (state.route === "favorites") {
        renderFavorites();
      }
      syncPlaybackUI();
    });
    $("#play-library").addEventListener("click", () => {
      const ids = contextIds("library");
      if (ids.length) {
        playTrack(ids[0], ids);
      } else {
        toast("No library tracks match your search.");
      }
    });
    $("#play-favorites").addEventListener("click", () => {
      const ids = contextIds("favorites");
      if (ids.length) {
        playTrack(ids[0], ids);
      }
    });
    $("#shuffle-favorites").addEventListener("click", () => {
      const ids = contextIds("favorites");
      if (ids.length) {
        if (!state.shuffle) {
          state.shuffle = true;
          persistSettings();
        }
        playTrack(ids[Math.floor(Math.random() * ids.length)], ids);
        syncPlaybackUI();
      }
    });
    $("#seek-bar").addEventListener("input", (event) => {
      const track = currentTrack();
      if (!track) {
        return;
      }
      const duration = Number.isFinite(audio.duration) ? audio.duration : track.duration;
      const target = (Number(event.target.value) / 100) * duration;
      if (audio.src) {
        audio.currentTime = target;
      } else {
        state.pendingSeek = target;
      }
      updateProgress(target, duration);
      persistSession();
    });
    $("#volume-bar").addEventListener("input", (event) => {
      state.volume = Number(event.target.value);
      state.muted = false;
      audio.muted = false;
      audio.volume = state.volume;
      $("#mute-button use").setAttribute("href", "#i-volume");
      $("#mute-button").setAttribute("aria-label", "Mute");
      persistSettings();
      updateRange($("#volume-bar"), $("#volume-fill"), state.volume);
    });
    $("#mute-button").addEventListener("click", () => {
      state.muted = !state.muted;
      audio.muted = state.muted;
      $("#mute-button use").setAttribute("href", state.muted ? "#i-mute" : "#i-volume");
      $("#mute-button").setAttribute("aria-label", state.muted ? "Unmute" : "Mute");
      $("#mute-button").classList.toggle("active", state.muted);
      updateRange($("#volume-bar"), $("#volume-fill"), state.muted ? 0 : state.volume);
    });
    $("#close-import").addEventListener("click", () => $("#import-modal").close());
    $("#modal-import-button").addEventListener("click", () => $("#audio-file-input").click());
    $("#audio-file-input").addEventListener("change", (event) => importFiles(event.target.files));
    $("#import-modal").addEventListener("click", (event) => {
      if (event.target !== $("#import-modal")) {
        return;
      }
      const bounds = event.target.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
        event.target.close();
      }
    });
    window.addEventListener("hashchange", () => activateRoute(window.location.hash.slice(1)));
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    reducedMotion.addEventListener("change", requestScrollUpdate);

    audio.addEventListener("play", () => {
      state.isPlaying = true;
      state.busy = false;
      setStatus(currentTrack()?.sourceType === "local" ? "Playing from this device" : "Playing an original SonicFlow loop");
      if (state.currentId) {
        addToRecent(state.currentId);
      }
      syncPlaybackUI();
      renderQueue();
      if (!visualizerFrame) {
        visualizerFrame = requestAnimationFrame(drawVisualizers);
      }
    });
    audio.addEventListener("pause", () => {
      state.isPlaying = false;
      syncPlaybackUI();
      persistSession();
    });
    audio.addEventListener("ended", () => nextTrack(false));
    audio.addEventListener("timeupdate", () => {
      updateProgress(audio.currentTime, audio.duration);
      const second = Math.floor(audio.currentTime);
      if (second % 5 === 0 && second !== lastSavedSecond) {
        lastSavedSecond = second;
        persistSession();
      }
    });
    audio.addEventListener("loadedmetadata", () => {
      updateProgress(audio.currentTime, audio.duration);
      if ("mediaSession" in navigator && Number.isFinite(audio.duration)) {
        try {
          navigator.mediaSession.setPositionState({ duration: audio.duration, playbackRate: audio.playbackRate, position: audio.currentTime });
        } catch (error) {
          // Position state is optional and not supported by every browser.
        }
      }
    });
    audio.addEventListener("error", () => {
      if (!state.currentId || !audio.src) {
        return;
      }
      requestToken += 1;
      state.busy = false;
      state.isPlaying = false;
      state.unavailable.add(state.currentId);
      setStatus("Audio unavailable — choose another track or import a supported file");
      toast("This audio could not be played. It may be missing, unsupported, or blocked by the browser.", "error");
      syncPlaybackUI();
    });

    document.addEventListener("keydown", (event) => {
      const interactive = event.target.closest("input, textarea, select, button, [contenteditable='true']");
      if (event.key === "/" && !interactive) {
        event.preventDefault();
        $("#search-input").focus();
      } else if (event.code === "Space" && !interactive && !$("#import-modal").open) {
        event.preventDefault();
        togglePlay();
      } else if (event.key === "Escape" && $("#queue-panel").classList.contains("open")) {
        closeQueue();
      }
    });

    if ("mediaSession" in navigator) {
      const handlers = { play: togglePlay, pause: () => audio.pause(), previoustrack: previousTrack, nexttrack: () => nextTrack(true) };
      Object.entries(handlers).forEach(([action, handler]) => {
        try {
          navigator.mediaSession.setActionHandler(action, handler);
        } catch (error) {
          // Ignore unsupported media actions.
        }
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    $$(".reveal-section").forEach((section) => observer.observe(section));

    if (!reducedMotion.matches) {
      $("#hero-stage").addEventListener("pointermove", (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        $("#stage-card").style.setProperty("--tilt-y", `${x * 7}deg`);
        $("#stage-card").style.setProperty("--tilt-x", `${y * -7}deg`);
      });
      $("#hero-stage").addEventListener("pointerleave", () => {
        $("#stage-card").style.setProperty("--tilt-y", "0deg");
        $("#stage-card").style.setProperty("--tilt-x", "0deg");
      });
    }
  }

  async function initialize() {
    renderFilters();
    bindEvents();
    audio.volume = state.volume;
    updateRange($("#volume-bar"), $("#volume-fill"), state.volume);
    await restoreImports();
    state.favorites = new Set([...state.favorites].filter((id) => getTrack(id)));
    state.recent = state.recent.filter((id) => getTrack(id));
    const saved = readStorage("sonicflow-session", {});
    if (saved.currentId && getTrack(saved.currentId)) {
      state.queue = Array.isArray(saved.queue) ? saved.queue.filter((id) => getTrack(id)) : [saved.currentId];
      if (!state.queue.includes(saved.currentId)) {
        state.queue.unshift(saved.currentId);
      }
      state.queueIndex = state.queue.indexOf(saved.currentId);
      state.currentId = saved.currentId;
      state.pendingSeek = Number(saved.time) || 0;
      updateProgress(state.pendingSeek, getTrack(saved.currentId).duration);
    }
    renderAll();
    const initialRoute = window.location.hash.slice(1) || "home";
    activateRoute(initialRoute, false);
    updateFlowScene(0);
    requestScrollUpdate();
  }

  initialize().catch((error) => {
    setStatus("SonicFlow could not finish initializing");
    toast(error.message || "Initialization failed. Reload and try again.", "error");
  });
})();
