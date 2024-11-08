// index.test.ts
import { jest } from '@jest/globals';

// Configuramos los mocks antes de importar el módulo bajo prueba
jest.mock('./helpers/configHelpers', () => ({
    askModeToUser: jest.fn(),
    configure: jest.fn(),
    getInitItems: jest.fn(),
    getCleanItems: jest.fn(),
}));

jest.mock('./actions/actions', () => ({
    updateGitignore: jest.fn(),
    cleanMyRepo: jest.fn(),
}));

describe('index.ts', () => {
    const originalArgv = process.argv;
    const originalConsoleLog = console.log;

    beforeEach(() => {
        jest.resetModules();
        console.log = jest.fn(); // Mock de console.log para evitar salidas en las pruebas
    });

    afterEach(() => {
        process.argv = originalArgv;
        console.log = originalConsoleLog;
    });

    test('should call updateGitignore in init mode with templates', async () => {
        process.argv = ['node', 'index.ts', '--init', 'node'];

        const configHelpers = require('./helpers/configHelpers');
        const actions = require('./actions/actions');

        configHelpers.getInitItems.mockReturnValue(['node_modules/']);
        actions.updateGitignore.mockResolvedValue(undefined);

        await jest.isolateModulesAsync(async () => {
            await import('./index');
        });

        expect(configHelpers.getInitItems).toHaveBeenCalledWith(['node']);
        expect(actions.updateGitignore).toHaveBeenCalledWith(['node_modules/']);
    });

    test('should call cleanMyRepo in clean mode with templates', async () => {
        process.argv = ['node', 'index.ts', '--clean', 'build'];

        const configHelpers = require('./helpers/configHelpers');
        const actions = require('./actions/actions');

        configHelpers.getCleanItems.mockReturnValue(['dist/']);
        actions.cleanMyRepo.mockResolvedValue(undefined);

        await jest.isolateModulesAsync(async () => {
            await import('./index');
        });

        expect(configHelpers.getCleanItems).toHaveBeenCalledWith(['build']);
        expect(actions.cleanMyRepo).toHaveBeenCalledWith(['dist/']);
    });

    test('should prompt for mode if no arguments are provided', async () => {
        process.argv = ['node', 'index.ts'];

        const configHelpers = require('./helpers/configHelpers');
        const actions = require('./actions/actions');

        configHelpers.askModeToUser.mockResolvedValue('init');
        configHelpers.configure.mockResolvedValue({
            itemsToIgnore: ['node_modules/'],
        });
        actions.updateGitignore.mockResolvedValue(undefined);

        await jest.isolateModulesAsync(async () => {
            await import('./index');
        });

        expect(configHelpers.askModeToUser).toHaveBeenCalled();
        expect(configHelpers.configure).toHaveBeenCalledWith('init');
        expect(actions.updateGitignore).toHaveBeenCalledWith(['node_modules/']);
    });

    test('should use configure output for clean mode when prompted', async () => {
        process.argv = ['node', 'index.ts'];

        const configHelpers = require('./helpers/configHelpers');
        const actions = require('./actions/actions');

        configHelpers.askModeToUser.mockResolvedValue('clean');
        configHelpers.configure.mockResolvedValue({ itemsToClean: ['dist/'] });
        actions.cleanMyRepo.mockResolvedValue(undefined);

        await jest.isolateModulesAsync(async () => {
            await import('./index');
        });

        expect(configHelpers.askModeToUser).toHaveBeenCalled();
        expect(configHelpers.configure).toHaveBeenCalledWith('clean');
        expect(actions.cleanMyRepo).toHaveBeenCalledWith(['dist/']);
    });
});
