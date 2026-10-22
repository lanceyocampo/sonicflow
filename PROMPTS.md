# LLM prompt log

## Prompt 1 — initial and only project prompt

The following task was supplied verbatim:

> task: Software configuration management is often associated with version control, CI/CD, and DevOps. Using your preferred LLM to assist you, create a static site (HTML/CSS/JS) hosted on GitHub Pages with a GitHub Actions workflow that automatically packages and publishes the site whenever you push to your GitHub repository (10 pts). Include an automated quality check by adding a JS linter step that runs before deployment and test it by breaking a JS rule such as omitting a required semicolon (10 pts). Submit the link to your GitHub repository (make sure it is set to public) and share all of your LLM prompts here (5 pts).
>
> Create a fully static music player website called **SonicFlow** using HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages.
>
> ## 1. Strict Static Website Requirements
>
> The website MUST be completely static.
>
> - Use only HTML5, CSS3, and vanilla JavaScript for the website.
> - Do not use React, Vue, Angular, or other frontend frameworks.
> - Do not use a backend, server-side code, database, authentication, or paid APIs.
> - Do not require Node.js to run the website in a browser. Node.js and npm may only be used locally and in GitHub Actions for ESLint and development tools.
> - The website must work on GitHub Pages.
> - All music player functionality must run directly in the user's browser.
> - Use the HTML5 Audio API to play properly licensed, locally stored audio files or accessible, legally usable audio samples.
> - Include sample song information and album artwork. Do not include copyrighted full songs without permission.
> - If no audio files are provided, clearly explain how to add licensed MP3 files and make sure the interface handles unavailable audio gracefully.
>
> ## 2. Music Player Features
>
> Create a polished, responsive music player with a modern dark theme, attractive album artwork, and smooth interactions.
>
> Include:
> - Home, Discover, Library, and Favorites sections.
> - A list of sample songs with titles, artists, and album artwork.
> - Search and filter functionality.
> - Play and pause controls.
> - Next and previous track controls.
> - A seekable progress bar.
> - Volume control.
> - Shuffle and repeat controls.
> - A playlist or queue.
> - Favorite buttons.
> - Current track information.
> - Responsive desktop and mobile layouts.
>
> All controls must work using vanilla JavaScript. Do not create buttons that only look functional.
>
> ## 3. Required Project Files
>
> Create the following structure: index.html, style.css, script.js, package.json, package-lock.json, eslint.config.js, README.md, .gitignore, .github/workflows/deploy.yml, and optional assets/audio and assets/images folders. Use relative paths so the website works at `https://USERNAME.github.io/sonicflow/`.
>
> ## 4. ESLint Quality Check
>
> Configure ESLint with a flat configuration and require semicolons using `semi: ["error", "always"]`. Add an npm script that runs ESLint against `script.js`. Ensure that the original code passes linting. Generate and commit `package-lock.json` so GitHub Actions can use `npm ci`.
>
> ## 5. GitHub Actions and GitHub Pages
>
> Create `.github/workflows/deploy.yml`. Trigger on pushes to `main`, support `workflow_dispatch`, check out the repository, set up Node.js, install with `npm ci`, run ESLint before deployment, stop deployment on lint failure, package with the official Pages artifact action, deploy with the official deployment action, and use the required permissions and `github-pages` environment. The artifact must contain only static runtime files and require no server.
>
> ## 6. Required Failure Test
>
> Explain Test A (working push succeeds), Test B (remove a semicolon, push, confirm lint failure and skipped deployment), and Test C (restore it, push, and confirm recovery). Explain how to capture failed and successful workflow screenshots. Do not leave main broken.
>
> ## 7. Setup and Documentation
>
> Provide complete consistent working code, Windows-friendly commands, public repository and GitHub Pages setup instructions, troubleshooting, a README covering installation/deployment/linting/failure testing, a short explanation of version control/CI/quality checks/CD, and a final screenshot/submission checklist. The site must run statically without a backend or build process. Only ESLint and the deployment workflow may use Node.js/npm. Do not claim deployment succeeded until verified by the user.

## Additional prompts

None. No follow-up prompt was supplied. Web requests used during implementation were documentation/dependency lookups, not additional LLM prompts.

## Submission note

Copy this prompt log into the assignment's LLM-prompt field or link to this file in the public repository. Repository and Pages URLs must be added by the repository owner after creating and verifying them.
