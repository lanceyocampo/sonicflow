/**
 * greeting.js - SonicFlow Dynamic Time-of-Day Welcomer & Session Advisor
 *
 * A unique JavaScript function that runs automatically when the page loads,
 * analyzing the current hour to determine the optimal listening vibe, greeting,
 * and track recommendation. Fully unit-tested with Jest.
 */

/**
 * Maps an hour (0-23) to a SonicFlow listening period with curated vibe details.
 * @param {number|Date} [dateOrHour=new Date()] Optional Date instance or numeric hour (0-23).
 * @returns {object} Object containing period, greeting, vibe, energy, recommendedTrackId, recommendedTrackTitle, and tagline.
 */
export function getFlowGreeting(dateOrHour = new Date()) {
  let hour;

  if (dateOrHour instanceof Date) {
    hour = dateOrHour.getHours();
  } else if (typeof dateOrHour === "number") {
    if (!Number.isFinite(dateOrHour) || !Number.isInteger(dateOrHour)) {
      throw new TypeError("Hour must be a finite integer");
    }
    if (dateOrHour < 0 || dateOrHour > 23) {
      throw new RangeError("Hour must be an integer between 0 and 23 inclusive");
    }
    hour = dateOrHour;
  } else {
    throw new TypeError("Argument must be a Date instance or a numeric hour between 0 and 23");
  }

  if (hour >= 5 && hour < 12) {
    return {
      period: "morning",
      greeting: "Good morning, sonic explorer",
      vibe: "Dawn Resonance",
      energy: "Gentle Focus",
      recommendedTrackId: "apricot-sky",
      recommendedTrackTitle: "Apricot Sky",
      tagline: "Dusty drums and warm chords to ease into your morning workflow."
    };
  }

  if (hour >= 12 && hour < 17) {
    return {
      period: "afternoon",
      greeting: "Good afternoon, sonic explorer",
      vibe: "Midday Momentum",
      energy: "High Kinetic",
      recommendedTrackId: "glass-garden",
      recommendedTrackTitle: "Glass Garden",
      tagline: "Bright arpeggios and lively tempos to sustain deep concentration."
    };
  }

  if (hour >= 17 && hour < 22) {
    return {
      period: "evening",
      greeting: "Good evening, sonic explorer",
      vibe: "Golden Hour Drift",
      energy: "Smooth Rhythm",
      recommendedTrackId: "afterglow-avenue",
      recommendedTrackTitle: "Afterglow Avenue",
      tagline: "Sunset chord stabs and steady pulses to transition into the evening."
    };
  }

  return {
    period: "night",
    greeting: "Late-night session active",
    vibe: "Midnight Frequency",
    energy: "Deep Ambient",
    recommendedTrackId: "slow-satellites",
    recommendedTrackTitle: "Slow Satellites",
    tagline: "Weightless pads and sparse bell tones for quiet nocturnal contemplation."
  };
}

/**
 * Formats a greeting object into a concise banner string.
 * @param {object} greeting Object returned by getFlowGreeting.
 * @returns {string} Formatted greeting message.
 */
export function formatGreetingMessage(greeting) {
  if (!greeting || typeof greeting !== "object" || !greeting.greeting || !greeting.vibe) {
    throw new TypeError("Invalid greeting object supplied to formatGreetingMessage");
  }
  return `${greeting.greeting} • ${greeting.vibe} (${greeting.energy}) — ${greeting.tagline}`;
}

/**
 * Applies greeting information and attributes to a DOM or mock element.
 * @param {HTMLElement|object} element Target DOM element.
 * @param {number|Date} [dateOrHour=new Date()] Optional Date or numeric hour.
 * @returns {object} The calculated greeting object.
 */
export function applyFlowGreeting(element, dateOrHour = new Date()) {
  if (!element) {
    throw new TypeError("Target element must be provided");
  }

  const greeting = getFlowGreeting(dateOrHour);

  if (typeof element.setAttribute === "function") {
    element.setAttribute("data-period", greeting.period);
    element.setAttribute("data-vibe", greeting.vibe);
  }

  const message = formatGreetingMessage(greeting);
  element.textContent = message;

  return greeting;
}

/**
 * Unique JS function that runs when the page is loaded.
 * Locates or creates the #flow-greeting-banner in the document,
 * updates its content, emits a console greeting, and returns the greeting object.
 * @param {number|Date} [dateOrHour=new Date()]
 * @param {Document|object} [doc=document]
 * @returns {object|null}
 */
export function initFlowGreeting(dateOrHour = new Date(), doc = (typeof document !== "undefined" ? document : null)) {
  if (!doc) {
    return null;
  }

  const greeting = getFlowGreeting(dateOrHour);
  const container = doc.getElementById("flow-greeting-banner");

  if (container) {
    container.innerHTML = `
      <div class="greeting-pill" data-period="${greeting.period}">
        <span class="live-dot" aria-hidden="true"></span>
        <span class="greeting-title">${greeting.greeting}</span>
        <span class="greeting-divider" aria-hidden="true">•</span>
        <span class="greeting-vibe">${greeting.vibe}</span>
        <span class="greeting-chip">${greeting.energy}</span>
      </div>
      <p class="greeting-tagline">${greeting.tagline}</p>
    `;
    container.setAttribute("data-period", greeting.period);
    container.setAttribute("data-active", "true");
  }

  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info(`[SonicFlow] Loaded vibe for ${greeting.period}: ${greeting.vibe} (${greeting.greeting})`);
  }

  return greeting;
}

// Automatically register initFlowGreeting on DOMContentLoaded when running in browser
if (typeof window !== "undefined") {
  window.SonicGreeting = {
    getFlowGreeting,
    formatGreetingMessage,
    applyFlowGreeting,
    initFlowGreeting
  };

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        initFlowGreeting();
      });
    } else {
      initFlowGreeting();
    }
  }
}
