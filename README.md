# The United Republic website

React 19 and Vite website deployed to Netlify. The production build pre-renders each public URL for fast loading and search visibility.

## Edit website copy

All editable copy lives in `content/site.json`. You can edit that file directly in GitHub or Codespaces, or use Netlify Visual Editor after it has been enabled for the project. React components read the same file, so there is only one copy source.

## Local development

```sh
pnpm install
pnpm dev
```

Open the forwarded port shown by Vite. In GitHub Codespaces, use the **Ports** panel and open port `8443` in the browser.

Before committing changes, run:

```sh
pnpm run check
```

## Finish Netlify Visual Editor setup

The repository already includes:

- `stackbit.config.ts` with a Git CMS content model and the six-page sitemap
- `content/site.json` with all editable copy
- visual editing annotations on page sections, navigation, footer, services, and work phases
- `netlify.toml` with production build settings

Once these repository changes are pushed to GitHub:

1. Open the existing site in Netlify.
2. Go to **Project configuration → Visual editor** and begin the setup walkthrough.
3. Connect the GitHub repository when asked and grant it read/write access.
4. Use `main` as the target/production branch.
5. Use `preview` as the working branch. Netlify can create this branch if it does not exist.
6. Start Visual Editor and select a highlighted page section to edit its fields.
7. Preview the change, then publish or merge it into `main` using the workflow shown by Netlify.

Visual Editor changes are ordinary Git changes, so Codespaces, local development, and AI coding tools remain compatible. Keep layout and component work in `src/`; keep copy edits in `content/site.json`.
