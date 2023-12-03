/* eslint-disable @typescript-eslint/no-var-requires */
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { addCrossBrowserVisualDiscrepanciesPlugin } = require('cypress-storybook-commands/src/plugins');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  addCrossBrowserVisualDiscrepanciesPlugin(on, config);
};
