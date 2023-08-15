import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom'],
  testMatch: ['**/test/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};

export default config;
