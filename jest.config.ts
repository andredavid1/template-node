import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.spec.ts",
    "**/__tests__/**/*.test.ts",
    "**/__tests__/**/*.e2e.ts",
  ],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testFailureExitCode: 1,
  passWithNoTests: true,
  silent: true,
  verbose: false,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};

export default config;
