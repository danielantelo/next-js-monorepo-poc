// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': path.resolve(__dirname, './support/fileMock.js'),
  },
  setupFilesAfterEnv: [path.resolve(__dirname, './support/setupTests.js')],
};
