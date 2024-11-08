import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'], // Asegúrate de incluir 'ts' y 'js'
    transform: {
        '^.+\\.(ts|js)$': 'ts-jest', // Transforma tanto archivos .ts como .js
    },
    testMatch: ['**/*.test.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    verbose: true,
};

export default config;
