// actions.test.ts
import { updateGitignore, cleanMyRepo } from './actions';
import fs from 'fs/promises';
import path from 'path';

jest.mock('fs/promises'); // Mock completo para fs/promises

describe('actions', () => {
    const gitignorePath = path.join(process.cwd(), '.gitignore');

    describe('updateGitignore', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        test('should create a new .gitignore if it does not exist', async () => {
            (fs.readFile as jest.Mock).mockRejectedValue({ code: 'ENOENT' }); // Simulamos archivo no encontrado
            (fs.appendFile as jest.Mock).mockResolvedValue(undefined);

            await updateGitignore(['node_modules/', 'dist/']);
            expect(fs.appendFile).toHaveBeenCalledWith(
                gitignorePath,
                expect.stringContaining('node_modules/\ndist/')
            );
        });

        test('should only append new entries to .gitignore', async () => {
            (fs.readFile as jest.Mock).mockResolvedValue('node_modules/'); // Simulamos .gitignore existente
            (fs.appendFile as jest.Mock).mockResolvedValue(undefined);

            await updateGitignore(['node_modules/', 'dist/']);
            expect(fs.appendFile).toHaveBeenCalledWith(
                gitignorePath,
                expect.stringContaining('\ndist/')
            );
        });

        test('should skip appending if all entries already exist', async () => {
            (fs.readFile as jest.Mock).mockResolvedValue(
                'node_modules/\ndist/'
            );

            await updateGitignore(['node_modules/', 'dist/']);
            expect(fs.appendFile).not.toHaveBeenCalled();
        });
    });

    describe('cleanMyRepo', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        test('should delete specified files and directories', async () => {
            (fs.access as jest.Mock).mockResolvedValue(undefined); // Simula que los archivos existen
            (fs.rm as jest.Mock).mockResolvedValue(undefined);

            await cleanMyRepo(['node_modules/', 'dist/']);
            expect(fs.rm).toHaveBeenCalledWith(
                path.join(process.cwd(), 'node_modules/'),
                { recursive: true, force: true }
            );
            expect(fs.rm).toHaveBeenCalledWith(
                path.join(process.cwd(), 'dist/'),
                { recursive: true, force: true }
            );
        });

        test('should skip deletion if file or directory does not exist', async () => {
            (fs.access as jest.Mock).mockRejectedValue({ code: 'ENOENT' }); // Simula archivo no encontrado

            await cleanMyRepo(['non_existent_folder/']);
            expect(fs.rm).not.toHaveBeenCalled();
        });
    });
});
