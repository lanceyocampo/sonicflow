import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", "_site/**", "assets/**"]
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
        Blob: "readonly"
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
