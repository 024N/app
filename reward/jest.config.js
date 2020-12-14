module.exports = {
    roots: ['<rootDir>/test', '<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: [
      // '!src/index.ts',
      // 'src/**/*.ts', To cover it
    ],
    // coverageReporters: ["html"],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/test/**/*.test.ts'],
    transform: { '^.+\\.tsx?$': 'ts-jest' },
  
    // Clean mocks in tests //
    restoreMocks: true,
    clearMocks: true,
    resetMocks: true
  };
  