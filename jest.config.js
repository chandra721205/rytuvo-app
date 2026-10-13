/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'rules',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/rules/**/*.test.ts', '<rootDir>/src/screens/catalog.integrity.test.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'babel-jest',
          {
            presets: ['@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
            babelrc: false,
            configFile: false,
          },
        ],
      },
    },
    {
      displayName: 'smoke',
      preset: 'jest-expo',
      testMatch: ['<rootDir>/src/screens/**/*.smoke.test.tsx', '<rootDir>/src/screens/routeGraph.test.ts', '<rootDir>/src/oneTradie/*.test.ts', '<rootDir>/src/state/*.test.ts'],
    },
  ],
};
