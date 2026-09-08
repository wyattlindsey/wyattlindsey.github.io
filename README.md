# wyattlindsey.github.io

Portfolio hub at https://wyattlindsey.github.io/. Each demo lives in its own
repository and deploys to its own GitHub Pages subpath; this site only lists
them and embeds the live builds. It never builds the demos itself.

## Running it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`. Pushes to `master` deploy
through `.github/workflows/pages.yml`.

## Adding a project

1. Deploy the project to `https://wyattlindsey.github.io/<repo>/` from its own
   repository. [virtual-handpan](https://github.com/wyattlindsey/virtual-handpan)
   has a `pages.yml` workflow and a `BASE_PATH`-aware Vite config to copy.
2. Add an entry to [`src/data/projects.ts`](src/data/projects.ts). The
   `embed` field picks the card style: `iframe` embeds the demo behind a
   Launch button, `link` opens it in a new tab, `repo` links to source only.
3. Optionally drop a poster image in `public/posters/` and reference it from
   the entry. Without one the card renders a generated poster.

## Layout

- `src/data/projects.ts` — the project registry, the only file that changes
  when a project is added.
- `src/components/ProjectCard.astro` — poster, Launch/Close behaviour, links.
- `src/layouts/Base.astro` — page chrome and global styles.
- `src/pages/index.astro` — the home page grid.

## History

The 2017 Hexo blog that used to live here is preserved on the
`archive/hexo-blog` branch and the `hexo-blog-2017` tag.
