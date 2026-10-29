# SonicFlow

SonicFlow is a completely static, responsive music player built with HTML5, CSS3, and vanilla JavaScript. It has no framework, backend, database server, authentication, tracking, paid API, or browser build step. GitHub Actions uses Node.js only to run ESLint and package the already-static files for GitHub Pages.

**Deployment status:** this repository contains the site and automation, but a successful public deployment is not claimed here. After you push to your own public repository and enable Pages, verify the Actions run and your own URL yourself.

Expected project URL after you deploy: `https://USERNAME.github.io/sonicflow/` (replace `USERNAME`; use your actual repository name if it differs).

## Features

- Home, Discover, Library, and Favorites views using static-host-friendly hash navigation.
- Twelve individually described sample tracks with original SVG album artwork.
- Original short audio loops synthesized lazily in the browser and played through a standard `HTMLAudioElement`.
- Play/pause, previous/next, seek, volume, mute, shuffle, repeat off/all/one, and editable queue controls.
- Live audio-frequency canvases driven by the Web Audio analyzer connected to the same audio element.
- Search across titles, artists, albums, genres, moods, and descriptions.
- Genre and mood filters plus curated, title, tempo, duration, artist, and album sorting.
- Favorites, recent plays, queue, playback position, volume, shuffle, and repeat persisted locally.
- Local MP3/WAV/OGG/M4A/FLAC import where supported by the browser; imported bytes stay on the device and use IndexedDB when available.
- Responsive desktop/mobile layouts, keyboard controls, operating-system media controls, accessible dialogs, status messages, and reduced-motion behavior.
- Graceful unsupported-codec, blocked-storage, missing-audio, and autoplay-error states.

No button is decorative: every visible control is connected to the player, catalog, queue, navigation, or import state.

## Project structure

```text
sonicflow/
├── index.html
├── style.css
├── script.js
├── greeting.js                # unique page-load vibe & session greeting function
├── greeting.test.js           # Jest unit test suite (14 tests)
├── package.json
├── package-lock.json
├── eslint.config.js
├── README.md
├── PROMPTS.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD: lint -> test -> deploy
└── assets/                    # optional; create when adding static files
    ├── audio/                 # licensed MP3/WAV/OGG files
    └── images/                # licensed cover artwork
```

All runtime references are relative (`style.css`, `script.js`, and optional `assets/...` paths), so the site works below a GitHub Pages project subpath.

## About the included audio and artwork

The built-in tracks are **short original composition studies, not copyrighted full songs**. `script.js` contains their melody, chord, tempo, rhythm, and timbre data. On the first play of a track, the browser renders that data to a WAV blob with `OfflineAudioContext`, then plays the blob through the HTML5 Audio API. No recording is downloaded and no audio server is contacted. Artist and album names in the sample catalog are fictional SonicFlow project names.

The original composition data and generated SVG artwork supplied with SonicFlow may be used, modified, and redistributed under CC0 1.0. The project source is marked MIT in `package.json`. Third-party fonts are loaded from Google Fonts with their respective open licenses; system-font fallbacks are provided.

### Add your own music through the interface

1. Select the **+** button or **Add licensed audio**.
2. Read the local-audio guide, then choose files you own or have permission to use.
3. The filename becomes the title. Files appear under **Library → Local imports** and can be played, queued, searched, and favorited.
4. When IndexedDB is available, files are restored on later visits to the same site, browser, and device. Clearing site data removes the stored copies, never the originals.

Codec support varies by browser. SonicFlow reports an unsupported or unreadable file instead of pretending it is playing.

### Add licensed MP3 files directly to the static project

1. Create `assets/audio/` and `assets/images/` if they do not exist.
2. Copy your licensed audio, for example `assets/audio/my-original.mp3`, and cover, for example `assets/images/my-cover.jpg`.
3. Add an entry to `RAW_TRACKS` in `script.js` with `title`, `artist`, `album`, `genre`, `mood`, `description`, `palette`, `duration`, `sourceType: "file"`, `url: "assets/audio/my-original.mp3"`, and `artwork: "assets/images/my-cover.jpg"`. A file-backed entry does not need synthesis fields such as chords or melody.
4. Keep paths relative: do **not** begin them with `/`, because `/assets/...` would point to the root of `USERNAME.github.io` instead of the project folder.
5. Run `npm run lint`, commit both assets and the metadata change, and push.

If a file is missing or cannot be decoded, the player displays an error, marks that track unavailable, and leaves the rest of the catalog usable. Use only your own recordings, public-domain audio, CC0 audio, or material whose license permits this use; provide attribution when its license requires it.

## Run the website locally (no Node required)

The runtime site does not use npm. On Windows you can open `index.html` directly in a current browser. For the most consistent local-file storage behavior, serve the folder with any ordinary static server you already have. Python is one optional example:

```powershell
cd C:\path\to\sonicflow
py -m http.server 8000
```

Open `http://localhost:8000/`. Python is not part of the deployed site; stop this optional preview server with `Ctrl+C`.

### Keyboard shortcuts

- `/`: focus search.
- `Space`: play/pause when not interacting with a form control or button.
- `Escape`: close the queue or native import dialog.

## Install and run ESLint on Windows

Node.js and npm are development tools only. Install a current Node.js LTS release (Node 22 is used in CI), then open PowerShell in the project folder:

```powershell
cd C:\path\to\sonicflow
node --version
npm --version
npm ci
npm run lint
```

`npm ci` installs exactly the locked development dependencies. `npm run lint` executes `eslint script.js`. The flat config in `eslint.config.js` applies ESLint's recommended rules and explicitly includes:

```js
semi: ["error", "always"]
```

A clean run exits with code 0 and normally prints nothing. A rule violation exits nonzero, which stops the GitHub Actions quality job and prevents the dependent deployment job from starting.

If you intentionally change dependency versions later, run `npm install` locally, review the resulting lockfile changes, and commit both `package.json` and `package-lock.json` together.

## Create a public GitHub repository

### GitHub web interface

1. Sign in to GitHub and select **New repository**.
2. Enter **sonicflow** as the repository name.
3. Set visibility to **Public**.
4. For a clean first push, do not initialize it with another README, license, or `.gitignore`.
5. Create the repository.

### Windows PowerShell / Git for Windows

Place all project files in a folder named `sonicflow`, then run:

```powershell
cd C:\path\to\sonicflow
git init
git branch -M main
git add .
git status
git commit -m "Create SonicFlow static music player"
git remote add origin https://github.com/USERNAME/sonicflow.git
git push -u origin main
```

Replace `USERNAME` and adjust the repository name if needed. If Git asks for credentials, use GitHub's supported sign-in flow or a personal access token; GitHub passwords are not accepted for Git HTTPS authentication.

## Enable GitHub Pages with GitHub Actions

1. Push the working project to `main` first.
2. In the public repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not select “Deploy from a branch.”
4. Open **Actions**, enable workflows if GitHub prompts you, and select **Lint and deploy SonicFlow**.
5. Use **Run workflow** for a manual run, or push another commit to `main`.
6. Confirm the **Lint and package static site** job succeeds, then confirm the **Deploy to GitHub Pages** job succeeds.
7. Open the deployment URL shown in the job or in **Settings → Pages**. Verify it yourself before reporting deployment success.

The workflow is also triggered by `workflow_dispatch`. Its `quality` job checks out the repository, sets up Node 22, runs `npm ci`, runs ESLint, copies only runtime files to `_site`, and uploads `_site` with `actions/upload-pages-artifact`. The `deploy` job has `needs: quality`, uses the `github-pages` environment, and runs `actions/deploy-pages`. Therefore lint failure blocks artifact upload and deployment. The artifact has no Node runtime or server dependency.

## Required intentional failure test

Perform these tests in order and finish with Test C so `main` is not left broken.

### Test A — working lint and deployment

1. Start with the original `script.js` and run `npm run lint` locally; confirm exit code 0.
2. Commit and push the working project:

   ```powershell
   git add .
   git commit -m "Verify clean lint and Pages deployment"
   git push
   ```

3. In **Actions**, open the run for that commit. Confirm the ESLint step and quality job pass, the artifact uploads, and the deploy job runs.
4. Open the Pages URL and test playback plus navigation.

### Test B — omit a required semicolon

1. Run `code script.js` (or open the file in another editor).
2. Find the line `const audio = $("#audio");` near the top of the file and temporarily remove only its final semicolon, producing `const audio = $("#audio")`.
3. Save, then run:

   ```powershell
   npm run lint
   ```

4. Confirm ESLint reports `Missing semicolon` for the `semi` rule and exits nonzero.
5. Commit and push this intentional failure with an obvious message:

   ```powershell
   git add script.js
   git commit -m "Test CI: intentionally omit required semicolon"
   git push
   ```

6. Open the new Actions run. Confirm **Run ESLint quality gate** fails, the quality job stops, packaging/upload does not run, and **Deploy to GitHub Pages** is skipped because it needs the quality job.

### Test C — restore and verify recovery

1. Restore the semicolon so the line is again `const audio = $("#audio");`.
2. Run `npm run lint` locally and confirm it passes.
3. Commit and push the fix:

   ```powershell
   git add script.js
   git commit -m "Restore semicolon and verify CI recovery"
   git push
   ```

4. Confirm the new quality and deploy jobs succeed. Leave this fixed commit as the tip of `main`.

## Unique JS function: Dynamic Flow Welcomer (`greeting.js`)

SonicFlow includes a unique JavaScript function that automatically executes when the page loads (`DOMContentLoaded`):

```javascript
import { initFlowGreeting } from "./greeting.js";
```

### What it does on page load:
1. **Time-of-day vibe detection:** Inspects the user's current local hour and categorizes it into one of four curated listening periods:
   - **Morning (05:00 - 11:59):** Dawn Resonance (`apricot-sky` / Gentle Focus) — *"Dusty drums and warm chords to ease into your morning workflow."*
   - **Afternoon (12:00 - 16:59):** Midday Momentum (`glass-garden` / High Kinetic) — *"Bright arpeggios and lively tempos to sustain deep concentration."*
   - **Evening (17:00 - 21:59):** Golden Hour Drift (`afterglow-avenue` / Smooth Rhythm) — *"Sunset chord stabs and steady pulses to transition into the evening."*
   - **Night (22:00 - 04:59):** Midnight Frequency (`slow-satellites` / Deep Ambient) — *"Weightless pads and sparse bell tones for quiet nocturnal contemplation."*
2. **DOM injection:** Dynamically renders the `#flow-greeting-banner` component inside the hero section, displaying a glowing live status indicator, the current greeting, a vibe chip, and tailored guidance.
3. **Console reporting:** Emits a styled session diagnostic notice via `console.info`.
4. **Global exposure:** Exposes the API under `window.SonicGreeting` for integration with `script.js` and manual testing.

## Automated testing with Jest

Jest is configured with ECMAScript Modules (`--experimental-vm-modules`) and provides 14 automated unit tests in `greeting.test.js`:

```powershell
npm test
```

### Test coverage areas:
- **Boundary condition testing:** Validates correct vibe selection across all boundary hours (morning, afternoon, evening, night).
- **Date parsing:** Validates passing standard `Date` instances.
- **Input error handling:** Ensures `RangeError` is thrown for out-of-range hours (< 0 or > 23), and `TypeError` for floats or non-numeric types.
- **Message formatting:** Verifies string construction in `formatGreetingMessage()`.
- **DOM mutation:** Validates attributes (`data-period`, `data-vibe`) and content manipulation in `applyFlowGreeting()`.
- **Headless & SSR safety:** Ensures safe degradation when executed in non-browser environments.

## CI/CD Workflow with separate Lint and Test jobs

The GitHub Actions workflow (`.github/workflows/deploy.yml`) enforces a strict multi-stage quality pipeline:

```text
[ Lint Job ] ──► [ Test Job ] ──► [ Deploy Job ]
(ESLint check)   (Jest suite)      (GitHub Pages)
```

1. **`lint` job:** Runs `npm run lint` (`eslint script.js greeting.js greeting.test.js`).
2. **`test` job (`needs: lint`):** Runs `npm test` (`jest`). Executes only if `lint` succeeds.
3. **`deploy` job (`needs: [lint, test]`):** Packages static files (`index.html`, `style.css`, `script.js`, `greeting.js`) and publishes to GitHub Pages **only if both lint AND test jobs pass**.

If any test assertion fails, the `test` job exits with code 1, immediately cancelling and skipping the `deploy` job so broken code is never published.

## Required test failure and passing demonstrations

### Test D — demonstrate an intentional Jest test failure

1. Open `greeting.test.js` in your editor.
2. Inside the first test (`"returns morning vibe for morning hours"`), change the expected greeting string or period to an invalid value:

   ```javascript
   // Change from:
   expect(greeting.period).toBe("morning");
   // To intentionally broken:
   expect(greeting.period).toBe("broken-morning-test");
   ```

3. Run Jest locally to observe the failure:

   ```powershell
   npm test
   ```

   Confirm Jest reports:
   ```text
   ● SonicFlow Greeting & Vibe Advisor Unit Tests › getFlowGreeting time periods › returns morning vibe for morning hours (05:00 - 11:59)

     Expected: "broken-morning-test"
     Received: "morning"
   ```

4. Commit and push the intentional failure:

   ```powershell
   git add greeting.test.js
   git commit -m "Test CI: intentionally break Jest unit test assertion"
   git push
   ```

5. In your GitHub repository, open **Actions** and inspect the new run:
   - **`lint` job:** ✅ Passed (green checkmark).
   - **`test` job:** ❌ Failed with exit code 1 (red X).
   - **`deploy` job:** ⚪ Skipped / blocked (gray). No deployment occurred.
6. Take a screenshot showing the failed `test` job and skipped `deploy` job.

### Test E — restore the test and verify green deployment

1. Restore the assertion in `greeting.test.js`:

   ```javascript
   expect(greeting.period).toBe("morning");
   ```

2. Run tests and linter locally to confirm all pass:

   ```powershell
   npm run lint
   npm test
   ```

3. Commit and push the fix:

   ```powershell
   git add greeting.test.js
   git commit -m "Restore Jest assertion and verify CI test recovery"
   git push
   ```

4. In **Actions**, observe the new run:
   - **`lint` job:** ✅ Passed.
   - **`test` job:** ✅ Passed (14 tests passed).
   - **`deploy` job:** ✅ Passed, site packaged and published to GitHub Pages.
5. Take a screenshot showing all three jobs green and visit your live GitHub Pages URL.

### Capture the evidence on Windows

- Press **Win+Shift+S** to capture a selected region, or **PrtScn** for the full screen.
- For Test A, capture the successful commit run with the lint step, artifact step, and deploy job visible; also capture the running Pages site.
- For Test B, open the failed run and expand **Run ESLint quality gate** so the `semi` error, file/line location, and nonzero exit are readable. Capture the job overview showing the deploy job skipped as well.
- For Test C, capture the recovered green run connected to the semicolon-restore commit.
- Include commit hashes or run numbers in the screenshots or captions so each result is traceable.

## Troubleshooting

### `npm ci` says package.json and package-lock.json are out of sync

Do not bypass the quality gate. Run `npm install` locally with the intended dependency versions, inspect the changes, commit both package files, and push. Use the Node version specified in `package.json`/CI.

### ESLint cannot load `eslint.config.js`

Keep `"type": "module"` in `package.json`, keep `@eslint/js` in `devDependencies`, and use ESLint 9 with Node 18.18 or newer. Run `npm ci` again after confirming the lockfile is present.

### The workflow passes lint but Pages does not deploy

Confirm **Settings → Pages → Source** is **GitHub Actions**, Actions are enabled, and the `github-pages` environment has no unmet required reviewer rule. Check that the default branch is `main` and inspect the deploy job log. The workflow already declares `contents: read`, `pages: write`, and `id-token: write`.

### The deployed page is 404 or assets are missing

Use the exact project Pages URL, including the repository name and trailing slash. Keep filename case consistent. Confirm `index.html`, `style.css`, and `script.js` are at repository root and optional assets are below `assets/`; the packaging step copies those locations. Use relative paths rather than root-absolute paths.

### Audio does not start

Browsers require a user gesture. Press Play once more if an autoplay message appears. On first playback, a built-in loop may briefly show “Composing” while it renders. If Web Audio synthesis is unavailable, import a supported MP3 instead. Check that system/tab volume is audible and try a current Chrome, Edge, Firefox, or Safari release.

### A local import disappears

IndexedDB can be unavailable in private mode, blocked by policy, full, or cleared with site data. SonicFlow labels storage failure and keeps the import for the current tab when possible. Re-import the original file; SonicFlow never modifies or deletes the source file on your device.

### The old version appears after deployment

Wait for the deploy job to finish, then hard-refresh with **Ctrl+F5**. Check the deployed commit SHA in the Pages run. Hash navigation works without server rewrite rules.

## Version control, CI, quality checks, and CD

- **Version control** records snapshots of the source, authorship, commit messages, and history. Git branches and commits let you reproduce the working site, isolate an intentional failure, and restore a known-good state instead of overwriting files blindly.
- **Continuous integration (CI)** automatically checks each push in a clean environment. Here, checkout, Node setup, and `npm ci` make the test reproducible rather than dependent on one developer's machine.
- **Automated quality checks** turn agreed rules into a merge/deployment gate. ESLint parses `script.js` and fails on the required-semicolon rule and other configured errors. This catches a deterministic source-quality issue before publication; it is not a substitute for listening tests or browser testing.
- **Continuous deployment (CD)** publishes the exact static artifact produced by the successful quality job. The `needs: quality` relationship makes deployment conditional, while the `github-pages` environment and deployment log provide an auditable release target.

Together, these practices make software configuration changes traceable, repeatable, testable, and reversible.

## Final evidence and submission checklist

- [ ] Public GitHub repository URL: `https://github.com/lanceyocampo/sonicflow`
- [ ] Verified GitHub Pages URL: `https://lanceyocampo.github.io/sonicflow/`
- [ ] Screenshot of Home and the working player controls with dynamic greeting banner.
- [ ] Screenshot of Test A: clean lint, artifact upload, and successful deployment.
- [ ] Screenshot of Test B: expanded `semi` lint error and failed quality job.
- [ ] Screenshot of Test C: restored semicolon and successful workflow.
- [ ] Screenshot of Test D: failed Jest unit test in CI with `deploy` job skipped.
- [ ] Screenshot of Test E: passing Jest unit test suite in CI with successful `deploy` job.
- [ ] Commit links or run numbers for all CI tests (Tests A–E).
- [ ] `package-lock.json` committed with Jest and `npm ci` passing.
- [ ] Pages source set to **GitHub Actions**, not a branch.
- [ ] `main` ends on the passing Test E commit.
- [ ] LLM prompt log included from `PROMPTS.md` in the assignment submission.

Do not mark deployment or workflow results complete until you have personally verified them in your repository.
