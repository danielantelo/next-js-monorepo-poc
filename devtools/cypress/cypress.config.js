import { defineConfig } from 'cypress';
import plugins from './cypress/plugins/index';

export default defineConfig({
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      return plugins(on, config);
    },
  },
});
