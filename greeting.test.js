import {
  getFlowGreeting,
  formatGreetingMessage,
  applyFlowGreeting,
  initFlowGreeting
} from "./greeting.js";

describe("SonicFlow Greeting & Vibe Advisor Unit Tests", () => {
  describe("getFlowGreeting time periods", () => {
    test("returns morning vibe for morning hours (05:00 - 11:59)", () => {
      [5, 8, 11].forEach((hour) => {
        const greeting = getFlowGreeting(hour);
        expect(greeting.period).toBe("intentional-failing-test-demonstration");
        expect(greeting.greeting).toBe("Good morning, sonic explorer");
        expect(greeting.vibe).toBe("Dawn Resonance");
        expect(greeting.energy).toBe("Gentle Focus");
        expect(greeting.recommendedTrackId).toBe("apricot-sky");
        expect(greeting.recommendedTrackTitle).toBe("Apricot Sky");
      });
    });

    test("returns afternoon vibe for afternoon hours (12:00 - 16:59)", () => {
      [12, 14, 16].forEach((hour) => {
        const greeting = getFlowGreeting(hour);
        expect(greeting.period).toBe("afternoon");
        expect(greeting.greeting).toBe("Good afternoon, sonic explorer");
        expect(greeting.vibe).toBe("Midday Momentum");
        expect(greeting.energy).toBe("High Kinetic");
        expect(greeting.recommendedTrackId).toBe("glass-garden");
        expect(greeting.recommendedTrackTitle).toBe("Glass Garden");
      });
    });

    test("returns evening vibe for evening hours (17:00 - 21:59)", () => {
      [17, 19, 21].forEach((hour) => {
        const greeting = getFlowGreeting(hour);
        expect(greeting.period).toBe("evening");
        expect(greeting.greeting).toBe("Good evening, sonic explorer");
        expect(greeting.vibe).toBe("Golden Hour Drift");
        expect(greeting.energy).toBe("Smooth Rhythm");
        expect(greeting.recommendedTrackId).toBe("afterglow-avenue");
        expect(greeting.recommendedTrackTitle).toBe("Afterglow Avenue");
      });
    });

    test("returns night vibe for late night hours (22:00 - 04:59)", () => {
      [22, 23, 0, 2, 4].forEach((hour) => {
        const greeting = getFlowGreeting(hour);
        expect(greeting.period).toBe("night");
        expect(greeting.greeting).toBe("Late-night session active");
        expect(greeting.vibe).toBe("Midnight Frequency");
        expect(greeting.energy).toBe("Deep Ambient");
        expect(greeting.recommendedTrackId).toBe("slow-satellites");
        expect(greeting.recommendedTrackTitle).toBe("Slow Satellites");
      });
    });

    test("accepts a native Date instance and derives the hour", () => {
      const mockDate = new Date(2026, 9, 29, 9, 30, 0); // 9:30 AM
      const greeting = getFlowGreeting(mockDate);
      expect(greeting.period).toBe("morning");
      expect(greeting.greeting).toBe("Good morning, sonic explorer");
    });
  });

  describe("getFlowGreeting input validation and errors", () => {
    test("throws RangeError when hour is less than 0 or greater than 23", () => {
      expect(() => getFlowGreeting(-1)).toThrow(RangeError);
      expect(() => getFlowGreeting(24)).toThrow(RangeError);
      expect(() => getFlowGreeting(100)).toThrow(RangeError);
    });

    test("throws TypeError when hour is not an integer", () => {
      expect(() => getFlowGreeting(14.5)).toThrow(TypeError);
      expect(() => getFlowGreeting(NaN)).toThrow(TypeError);
      expect(() => getFlowGreeting(Infinity)).toThrow(TypeError);
    });

    test("throws TypeError when argument is an invalid type", () => {
      expect(() => getFlowGreeting("morning")).toThrow(TypeError);
      expect(() => getFlowGreeting(null)).toThrow(TypeError);
      expect(() => getFlowGreeting({})).toThrow(TypeError);
      expect(() => getFlowGreeting(true)).toThrow(TypeError);
    });
  });

  describe("formatGreetingMessage", () => {
    test("formats a complete greeting object into a descriptive string", () => {
      const greeting = getFlowGreeting(14);
      const formatted = formatGreetingMessage(greeting);
      expect(formatted).toBe(
        "Good afternoon, sonic explorer • Midday Momentum (High Kinetic) — Bright arpeggios and lively tempos to sustain deep concentration."
      );
    });

    test("throws TypeError when formatted with null or malformed object", () => {
      expect(() => formatGreetingMessage(null)).toThrow(TypeError);
      expect(() => formatGreetingMessage({})).toThrow(TypeError);
      expect(() => formatGreetingMessage({ greeting: "Hi" })).toThrow(TypeError);
    });
  });

  describe("applyFlowGreeting DOM interaction", () => {
    test("applies attributes and textContent to target element", () => {
      const attributes = {};
      const mockElement = {
        textContent: "",
        setAttribute: (name, value) => {
          attributes[name] = value;
        }
      };

      const result = applyFlowGreeting(mockElement, 8);
      expect(result.period).toBe("morning");
      expect(attributes["data-period"]).toBe("morning");
      expect(attributes["data-vibe"]).toBe("Dawn Resonance");
      expect(mockElement.textContent).toContain("Good morning, sonic explorer");
    });

    test("throws TypeError if target element is omitted", () => {
      expect(() => applyFlowGreeting(null, 12)).toThrow(TypeError);
      expect(() => applyFlowGreeting(undefined, 12)).toThrow(TypeError);
    });
  });

  describe("initFlowGreeting page load integration", () => {
    test("returns null safely when running outside a browser document", () => {
      const result = initFlowGreeting(10, null);
      expect(result).toBeNull();
    });

    test("populates the #flow-greeting-banner container if present in document", () => {
      let innerHtml = "";
      const attributes = {};
      const mockBanner = {
        set innerHTML(val) {
          innerHtml = val;
        },
        get innerHTML() {
          return innerHtml;
        },
        setAttribute: (name, val) => {
          attributes[name] = val;
        }
      };

      const mockDoc = {
        getElementById: (id) => (id === "flow-greeting-banner" ? mockBanner : null)
      };

      const result = initFlowGreeting(23, mockDoc);
      expect(result.period).toBe("night");
      expect(attributes["data-period"]).toBe("night");
      expect(attributes["data-active"]).toBe("true");
      expect(mockBanner.innerHTML).toContain("Late-night session active");
      expect(mockBanner.innerHTML).toContain("Midnight Frequency");
      expect(mockBanner.innerHTML).toContain("Deep Ambient");
    });
  });
});
