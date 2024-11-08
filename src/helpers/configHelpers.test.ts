// configHelpers.test.ts
import {
    getInitItems,
    getCleanItems,
    loadUserPreferences,
    configure,
} from './configHelpers';
import fs from 'fs';
import inquirer from 'inquirer';

jest.mock('fs'); // Mock completo para el módulo fs
jest.mock('inquirer'); // Mock completo para inquirer

// Convierte los métodos de fs a mocks de Jest
const mockExistsSync = fs.existsSync as jest.Mock;
const mockReadFileSync = fs.readFileSync as jest.Mock;
const mockWriteFileSync = fs.writeFileSync as jest.Mock;

// Mock de inquirer.prompt
const mockPrompt = inquirer.prompt as jest.MockedFunction<
    typeof inquirer.prompt
>;

describe('configHelpers', () => {
    // Bloque de pruebas para la función getInitItems
    describe('getInitItems', () => {
        test('should return items to ignore based on templates', () => {
            const result = getInitItems(['node']);
            expect(result).toContain('node_modules/');
        });
    });

    // Bloque de pruebas para la función getCleanItems
    describe('getCleanItems', () => {
        test('should return items to clean based on templates', () => {
            const result = getCleanItems(['build']);
            expect(result).toContain('dist/');
        });
    });

    // Bloque de pruebas para la función loadUserPreferences
    describe('loadUserPreferences', () => {
        beforeAll(() => {
            mockExistsSync.mockReturnValue(true);
            mockReadFileSync.mockReturnValue(
                JSON.stringify({
                    itemsToIgnore: ['node_modules/'],
                    itemsToClean: ['dist/'],
                })
            );
        });

        test('should return parsed JSON if config file exists', () => {
            const config = loadUserPreferences();
            expect(config).toEqual({
                itemsToIgnore: ['node_modules/'],
                itemsToClean: ['dist/'],
            });
        });
    });

    // Bloque de pruebas para la función configure
    describe('configure', () => {
        const mockSavedConfig = {
            itemsToIgnore: ['node_modules/'],
            itemsToClean: ['dist/'],
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        describe('when there is a saved configuration', () => {
            beforeEach(() => {
                mockExistsSync.mockReturnValue(true);
                mockReadFileSync.mockReturnValue(
                    JSON.stringify(mockSavedConfig)
                );
            });

            test('should use saved configuration if user confirms', async () => {
                mockPrompt.mockResolvedValue({ useSavedConfig: true });

                const result = await configure('init');
                expect(result).toEqual(mockSavedConfig);
            });

            test('should prompt user to create a new configuration if they decline saved config', async () => {
                mockPrompt
                    .mockResolvedValueOnce({ useSavedConfig: false })
                    .mockResolvedValueOnce({ ignoreAnswers: ['default'] });

                const result = await configure('init');
                expect(result.itemsToIgnore).toContain('dist/');
                expect(mockWriteFileSync).toHaveBeenCalledWith(
                    expect.any(String),
                    expect.stringContaining('dist/')
                );
            });
        });

        describe('when there is no saved configuration', () => {
            beforeEach(() => {
                mockExistsSync.mockReturnValue(false);
            });

            test('should prompt user to create a new configuration in init mode', async () => {
                mockPrompt.mockResolvedValueOnce({
                    ignoreAnswers: ['default'],
                });

                const result = await configure('init');
                expect(result.itemsToIgnore).toContain('dist/');
                expect(mockWriteFileSync).toHaveBeenCalledWith(
                    expect.any(String),
                    expect.stringContaining('dist/')
                );
            });

            test('should prompt user to create a new configuration in clean mode', async () => {
                mockPrompt.mockResolvedValueOnce({
                    ignoreAnswersClean: ['default'],
                });

                const result = await configure('clean');
                expect(result.itemsToClean).toContain('dist/');
                expect(mockWriteFileSync).toHaveBeenCalledWith(
                    expect.any(String),
                    expect.stringContaining('dist/')
                );
            });
        });
    });
});
