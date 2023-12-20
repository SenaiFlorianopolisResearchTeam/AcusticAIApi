import type { Config } from 'jest';
import nextJest from 'next/jest.js'
import '@testing-library/jest-dom'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};

export default createJestConfig(config);
