# Academic Homepage

This folder is a standalone static academic homepage designed for GitHub Pages.
It can be deployed either:

- as its own GitHub repository
- or as the `academic-homepage/` subdirectory inside a larger repository

The page includes a built-in Chinese/English toggle with browser-language detection and local preference memory.

## Files

- `index.html`: the page itself
- `assets/style.css`: typography, layout, and visual design
- `assets/site.js`: reveal animation and comment bootstrapping
- `assets/site.config.js`: the only file you normally need to edit
- `assets/bo-liu-cv-2026.pdf`: linked CV

## Local preview

From the repository root:

```bash
python3 -m http.server 4173 -d academic-homepage
```

Then open `http://localhost:4173`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. If this folder is the repository root, use `.github/workflows/deploy-pages.yml`.
3. If this folder stays inside a larger repository, use the parent workflow at `../.github/workflows/deploy-academic-homepage.yml`.
4. In the repository settings, enable GitHub Pages with GitHub Actions.

## Enable the guestbook

This template uses `giscus`, which stores messages in GitHub Discussions.

1. Enable `Discussions` in your GitHub repository.
2. Visit `https://giscus.app/zh-CN` and follow the setup wizard.
3. Copy the generated `repoId`, `category`, and `categoryId`.
4. Paste those values into `assets/site.config.js`.
5. Set `comments.enabled` to `true`.

After the next deploy, the bottom guestbook section will become active.
