import {
    askModeToUser,
    configure,
    getCleanItems,
    getInitItems,
} from './helpers/configHelpers';
import { updateGitignore, cleanMyRepo } from './actions/actions';

const args = process.argv.slice(2);
let mode: 'init' | 'clean' | null = null;
let initTemplates: string[] = [];
let cleanTemplates: string[] = [];
let templateItems: { itemsToIgnore: string[]; itemsToClean: string[] } = {
    itemsToIgnore: [],
    itemsToClean: [],
};

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case '--init':
        case '-i':
            mode = 'init';
            for (let j = i + 1; j < args.length; j++) {
                if (args[j].startsWith('-')) break;
                initTemplates.push(args[j]);
            }
            i += initTemplates.length;
            if (initTemplates.length === 0) {
                initTemplates = ['default'];
            }
            break;
        case '--clean':
        case '-c':
            mode = 'clean';
            for (let j = i + 1; j < args.length; j++) {
                if (args[j].startsWith('-')) break;
                cleanTemplates.push(args[j]);
            }
            i += cleanTemplates.length;
            if (cleanTemplates.length === 0) {
                cleanTemplates = ['default'];
            }
            break;
        default:
            console.warn(`Unknown argument: ${args[i]}`);
            break;
    }
}

async function main() {
    if (!mode) {
        console.log(
            'Welcome to clean-my-repo - Your assistant for cleaning and organizing repositories'
        );
        mode = await askModeToUser();
        if (mode) {
            templateItems = await configure(mode);
        }
    } else {
        templateItems.itemsToIgnore = getInitItems(initTemplates);
        templateItems.itemsToClean = getCleanItems(cleanTemplates);
    }

    if (mode === 'init') {
        await updateGitignore(templateItems.itemsToIgnore);
    } else if (mode === 'clean') {
        await cleanMyRepo(templateItems.itemsToClean);
    }
}

main();
