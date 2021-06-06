import { ScullyConfig } from '@scullyio/scully';
import { fromRss } from "./scully/plugins/from-rss.plugin"

export const config: ScullyConfig = {
  projectRoot: './apps/this-is-learning/src',
  projectName: 'this-is-learning',
  outDir: './dist/static/this-is-learning',
  routes: {
    '/this-is-angular': {
      rss: 'https://dev.to/feed/this-is-angular',
      type: fromRss,
    },
    '/this-is-learning': {
      rss: 'https://dev.to/feed/this-is-learning',
      type: fromRss,
    },
  },
};
