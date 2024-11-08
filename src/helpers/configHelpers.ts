import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import { cleanItems } from '../config/cleanChoices';
import { ignoreItems } from '../config/ignoreChoices';

const configPath = path.join(process.cwd(), '.cmrrc.json');

function loadUserPreferences() {
    if (fs.existsSync(configPath)) {
        const data = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(data);
    }
    return null;
}

async function askModeToUser() {
    const { chosenMode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'chosenMode',
            message: 'What would you like to do?',
            choices: [
                { name: 'Initialize ignore files', value: 'init' },
                { name: 'Clean unnecessary files', value: 'clean' },
            ],
        },
    ]);
    return chosenMode;
}

async function configure(mode: 'init' | 'clean') {
    const config = loadUserPreferences();
    let selectedTemplates: string[] = [];

    if (config) {
        console.log('Found saved configuration:');

        const { useSavedConfig } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'useSavedConfig',
                message: 'Do you want to use the saved configuration?',
                default: true,
            },
        ]);

        if (!useSavedConfig) {
            selectedTemplates = await askUserPreferences(mode);
        } else {
            return config;
        }
    } else {
        console.log("No saved configuration found. Let's create one.");
        selectedTemplates = await askUserPreferences(mode);
    }

    const newConfig = {
        itemsToIgnore:
            mode === 'init'
                ? getInitItems(selectedTemplates)
                : config?.itemsToIgnore || [],
        itemsToClean:
            mode === 'clean'
                ? getCleanItems(selectedTemplates)
                : config?.itemsToClean || [],
    };

    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));
    console.log(`Configuration saved in ${configPath}`);
    return newConfig;
}

async function askUserPreferences(mode: 'init' | 'clean') {
    switch (mode) {
        case 'init':
            const { ignoreAnswers } = await inquirer.prompt([
                {
                    type: 'checkbox',
                    name: 'ignoreAnswers',
                    message:
                        'Select items you want to ignore (add to .gitignore):',
                    choices: Array.from(
                        new Set(ignoreItems.flatMap((item) => item.template))
                    ).map((template) => ({
                        name: template,
                        value: template,
                        checked: ['default'].includes(template),
                    })),
                },
            ]);
            return ignoreAnswers;
        case 'clean':
            const { ignoreAnswersClean } = await inquirer.prompt([
                {
                    type: 'checkbox',
                    name: 'ignoreAnswersClean',
                    message: 'Select items you want to clean (delete at end):',
                    choices: Array.from(
                        new Set(cleanItems.flatMap((item) => item.template))
                    ).map((template) => ({
                        name: template,
                        value: template,
                        checked: ['default'].includes(template),
                    })),
                },
            ]);
            return ignoreAnswersClean;
    }
}

function getInitItems(selectedTemplates: string[] = []) {
    return ignoreItems
        .filter((item) =>
            item.template.some((template) =>
                selectedTemplates.includes(template)
            )
        )
        .map((item) => item.value);
}
function getCleanItems(selectedTemplates: string[] = []) {
    return cleanItems
        .filter((item) =>
            item.template.some((template) =>
                selectedTemplates.includes(template)
            )
        )
        .map((item) => item.value);
}

export {
    loadUserPreferences,
    askModeToUser,
    askUserPreferences,
    configure,
    getInitItems,
    getCleanItems,
};
