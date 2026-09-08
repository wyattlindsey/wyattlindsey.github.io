/**
 * The project registry. Every card on the site is rendered from one entry
 * here; adding a demo means deploying it to its own Pages subpath and adding
 * an entry. The hub never builds the demos themselves.
 */

/** How the card presents the project. */
export type EmbedMode =
  /** Poster with a Launch button that swaps in an iframe of the live URL. */
  | 'iframe'
  /** Poster that links out to the live URL in a new tab. */
  | 'link'
  /** No live URL yet; the card links to the repo only. */
  | 'repo';

export interface Project {
  /** URL-safe identifier, also used as the DOM id of the card. */
  slug: string;
  title: string;
  /** One line, shown on the card. */
  pitch: string;
  /** A short paragraph shown under the poster. */
  description?: string;
  tags: string[];
  tech: string[];
  repoUrl: string;
  /** Deployed demo, if any. Required for 'iframe' and 'link' modes. */
  liveUrl?: string;
  embed: EmbedMode;
  /** Path under public/ for the poster image. Falls back to a generated one. */
  poster?: string;
  /** Aspect ratio for the poster and iframe frame, as width / height. */
  aspect?: number;
  /** Year the project was started, for ordering and display. */
  year: number;
  /** Featured projects are listed first. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'virtual-handpan',
    title: 'Virtual Handpan',
    pitch:
      'A 3D handpan that learns how you play: record takes, train a model in the browser, ' +
      'and let it improvise phrases in your own style.',
    description:
      'Generated playing comes from three layers. A melodic two-hand generator with live human ' +
      'feel controls. A Learned mode driven by an n-gram model over scale steps and durations, ' +
      'trained in the browser on your recorded takes, so it phrases the way you do. And thumbs up ' +
      'and down feedback that reweights the generator toward your taste. Under it all sits a ' +
      'physically based WebGL pan with 93 builder scales, custom layouts, and a velocity-layered ' +
      'sample engine.',
    tags: ['AI', 'music', '3D', 'audio'],
    tech: ['In-browser ML', 'n-gram model', 'React', 'TypeScript', 'three.js', 'Web Audio'],
    repoUrl: 'https://github.com/wyattlindsey/virtual-handpan',
    liveUrl: 'https://wyattlindsey.github.io/virtual-handpan/',
    embed: 'iframe',
    aspect: 16 / 10,
    year: 2026,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
