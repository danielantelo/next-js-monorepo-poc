import type { StorybookConfig } from '@storybook/react';
import path from 'path';
import { mergeConfig } from 'vite';
import { workspaces } from '../../../package.json';

function getPackageStories() {
  const rootDir = path.resolve(__dirname, '../../..');
  return workspaces
    .filter((workspace) => workspace !== 'devtools/*')
    .map((workspace) => path.relative(__dirname, path.join(rootDir, workspace, '**/*.stories.tsx')));
}

const config: StorybookConfig = {
  stories: ['./stories/*.stories.tsx', ...getPackageStories()],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async viteFinal(config: Record<string, any>) {
    return mergeConfig(config, {
      base: '',
      build: {
        target: ['chrome103'],
        minify: false,
        sourcemap: false,
      },
    });
  },
};

export default config;
