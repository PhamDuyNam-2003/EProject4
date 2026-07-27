const config = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^generated/(.*)$': '<rootDir>/generated/$1'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
    },
    testMatch: ['**/__tests__/**/*.test.ts'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
export default config;
