import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", "_site/**", "assets/**", "coverage/**"]
  },
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        indexedDB: "readonly",
        requestAnimationFrame: "readonly",
        IntersectionObserver: "readonly",
        MediaMetadata: "readonly",
        Audio: "readonly",
        URL: "readonly",
        Blob: "readonly",
        SonicGreeting: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "caughtErrors": "none" }]
    }
  },
  {
    files: ["greeting.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "caughtErrors": "none" }]
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "caughtErrors": "none" }]
    }
  }
];
