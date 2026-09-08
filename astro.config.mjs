// @ts-check
import { defineConfig } from 'astro/config';

// The hub is served from the root of the user Pages site. Project demos live
// on the same origin under their own subpaths (e.g. /virtual-handpan/).
export default defineConfig({
  site: 'https://wyattlindsey.github.io',
});
