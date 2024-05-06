import {
    cancel,
    intro,
    isCancel,
    outro,
    select,
    text
    // @ts-ignore
} from '@clack/prompts';
import { exit } from 'process';


import { AndesiteError } from '@/Common/Error';
import {
    createEslint,
    createFolderStructure,
    createPackageJson,
    createTsConfig,
    createJestConfig
} from '@/Domain/Service';

/**
 * Cancel the project initialization and stop the process.
 */
function cancelAndStop(): void {
    cancel('Project initialization canceled');
    exit(0);
}

/**
 * The user selects the project type.
 * 
 * @returns The project type selected by the user.
 */
async function requestProjectTypeSelected(): Promise<string> {
    const projectType = await select({
        message: 'Select the project type',
        initialValue: 'API',
        options: [
            {
                value: 'API',
                label: 'API',
            },
            {
                value: 'Worker Manager',
                label: 'Worker Manager',
            },
            {
                value: 'Library',
                label: 'Library',
            },
            {
                value: 'Sample Script',
                label: 'Sample Script',
            },
        ]
    });
    if (isCancel(projectType)) cancelAndStop();
    return projectType as string;
}

/**
 * Request the project name to the user.
 * 
 * @returns The project name.
 */
async function requestProjectName(): Promise<string> {
    const projectName = await text({
        message: 'Enter the project name',
        defaultValue: 'my-project',
        placeholder: 'my-project'
    });
    if (isCancel(projectName)) cancelAndStop();
    return projectName as string;
}

/**
 * Request the project description to the user.
 * 
 * @returns The project description.
 */
async function requestProjectDescription(): Promise<string> {
    const projectDescription = await text({
        message: 'Enter the project description',
        defaultValue: '',
        placeholder: ''
    });
    if (isCancel(projectDescription)) cancelAndStop();
    return projectDescription as string;
}

/**
 * Initialize a new project by asking the user several questions.
 */
async function InitProject(): Promise<void> {
    intro('Initializing a new project');
    const projectType = await requestProjectTypeSelected();
    const projectName = await requestProjectName();
    const projectDescription = await requestProjectDescription();
    try {
        const projectInformation = {
            name: projectName,
            description: projectDescription,
            type: projectType
        };
        createPackageJson(projectInformation, './');
        createFolderStructure(projectInformation.type, './');
        createTsConfig('./');
        createEslint('./');
        createJestConfig(projectInformation.name, './');
        // Creation of esbuild.config.ts
        
        // if projectType is library then create .npmignore
    } catch (error) {
        if (error instanceof AndesiteError)
            cancel(`An error occurred while initializing the project 😢 ${error.message}`);
        else
            cancel('An error occurred while initializing the project 😢');
        console.error(error);
        exit(1);
    }
    outro('Project initialized 😊');
}

export { InitProject };
