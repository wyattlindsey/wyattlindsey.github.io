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
  /** One line on what the project is heading toward, shown as "Coming next". */
  next?: string;
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
    next:
      'Composition with a language model: ask Claude for a phrase as structured JSON, given the ' +
      'layout, feel, and a style prompt like "slow, sparse, resolves often", with the humanize ' +
      'layer kept deterministic so it still sounds like a person.',
    tags: ['AI', 'music', '3D', 'audio'],
    tech: ['In-browser ML', 'n-gram model', 'React', 'TypeScript', 'three.js', 'Web Audio'],
    repoUrl: 'https://github.com/wyattlindsey/virtual-handpan',
    liveUrl: 'https://wyattlindsey.github.io/virtual-handpan/',
    embed: 'iframe',
    aspect: 16 / 10,
    year: 2026,
    featured: true,
  },
  {
    slug: 'rootwise',
    title: 'Rootwise',
    pitch:
      'An AI plant advisor: Claude answers free-form gardening questions through the plant-intel ' +
      'MCP server, with every tool call and source shown.',
    description:
      'A chat UI over a tool loop. Claude calls a Model Context Protocol server for species care ' +
      'profiles, mechanism-derived companion checks, and frost-date planting windows, and the ' +
      'trace of each call and its sources is rendered alongside the answer. A system prompt ' +
      'honesty contract keeps claims tied to tool results, and a shared daily spend cap and rate ' +
      'limiter guard the API budget.',
    tags: ['AI', 'agents', 'MCP', 'gardening'],
    tech: ['Claude API', 'MCP', 'Next.js', 'TypeScript', 'React'],
    repoUrl: 'https://github.com/wyattlindsey/rootwise',
    embed: 'repo',
    aspect: 16 / 10,
    year: 2026,
    featured: true,
  },
  {
    slug: '3d-math-visualizer',
    title: '3D Math Visualizer',
    pitch: 'Drag two vectors around in 2D or 3D and watch the dot and cross products update live.',
    description:
      'An interactive picture of the two vector products. Grab the handles on either vector, in a ' +
      '3D scene or a flat 2D plane, and the equations recompute as you move: the dot product with ' +
      'its projection in 2D, and the cross product with its resulting perpendicular vector.',
    tags: ['math', '3D', 'education'],
    tech: ['React', 'TypeScript', 'react-three-fiber', 'three.js', 'styled-components'],
    repoUrl: 'https://github.com/wyattlindsey/3d-math-visualizer',
    liveUrl: 'https://wyattlindsey.github.io/3d-math-visualizer/',
    embed: 'iframe',
    // The app stacks a controls bar, the scene, and an equations panel, so it
    // needs a tall frame.
    aspect: 3 / 2,
    year: 2024,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
