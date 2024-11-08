import fs from 'fs/promises';
import path from 'path';

const gitignorePath = path.join(process.cwd(), '.gitignore');

// Function to update .gitignore with selected items
async function updateGitignore(itemsToIgnore: string[]) {
    if (!itemsToIgnore || itemsToIgnore.length === 0) {
        console.log(
            'No items selected for ignoring. Skipping .gitignore update.'
        );
        return;
    }
    try {
        let gitignoreContent = '';
        try {
            gitignoreContent = await fs.readFile(gitignorePath, 'utf-8');
        } catch (readError) {
            // If .gitignore doesn't exist, initialize with an empty string
            console.log('.gitignore not found. A new one will be created.');
        }

        // Filter items to avoid duplicates
        const itemsToAdd = itemsToIgnore.filter(
            (item) => !gitignoreContent.includes(item)
        );

        // Append only new items to .gitignore
        if (itemsToAdd.length > 0) {
            const newEntries = `\n# Added by clean-my-repo\n${itemsToAdd.join('\n')}\n`;
            await fs.appendFile(gitignorePath, newEntries);
            console.log(`Updated .gitignore with new entries:\n${newEntries}`);
        } else {
            console.log('.gitignore is already up to date.');
        }
    } catch (error) {
        console.error('Error updating .gitignore:', error);
    }
}

async function cleanMyRepo(itemsToClean: string[]) {
    if (!itemsToClean || itemsToClean.length === 0) {
        console.log(
            'No items provided for cleaning. Skipping clean operation.'
        );
        return;
    }

    for (const item of itemsToClean) {
        const itemPath = path.join(process.cwd(), item);

        try {
            await fs.access(itemPath);
            await fs.rm(itemPath, { recursive: true, force: true });
            console.log(`Deleted: ${itemPath}`);
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                console.log(`Item not found, skipping: ${itemPath}`);
            } else {
                console.error(`Error deleting ${itemPath}:`, error);
            }
        }
    }
}

export { updateGitignore, cleanMyRepo };
