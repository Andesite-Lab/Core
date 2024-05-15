import {
    cancel,
    intro,
    outro,
    spinner,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
} from '@clack/prompts';
import { exit } from 'process';

import {
    type IAndesiteApiConfigDTO,
    type IAndesiteLibraryConfigDTO,
    type IAndesiteSampleScriptConfigDTO,
    type IAndesiteWorkerManagerConfigDTO,
    type IBuildProjectOptionsDTO
} from '@/DTO';
import { execBuildCommand } from '@/Domain/Service/User/Command';
import { readAndesiteYmlConfig } from '@/Domain/Service/User/Config';
import { initAndesiteFolderStructure, updateTsConfig } from '@/Domain/Service/User/Config/AndesiteFolder';
import { type ChildProcess } from 'child_process';

/**
 * Build the project
 */
async function buildProject(): Promise<void> {
    intro('Hey there! 👋');
    try {
        const s = spinner();
        s.start('Running build process 🚀');
        const config = readAndesiteYmlConfig() as IAndesiteApiConfigDTO | IAndesiteLibraryConfigDTO | IAndesiteSampleScriptConfigDTO | IAndesiteWorkerManagerConfigDTO;
        initAndesiteFolderStructure();
        updateTsConfig(config);
        
        const buildOptions: IBuildProjectOptionsDTO & (IAndesiteApiConfigDTO | IAndesiteLibraryConfigDTO | IAndesiteSampleScriptConfigDTO | IAndesiteWorkerManagerConfigDTO) = {
            minify: true,
            keepNames: true,
            treeShaking: true,
            dev: false,
            watch: false,
            ...config
        };

        await new Promise<void>((resolve) => {
            const child: ChildProcess = execBuildCommand(buildOptions);
            child.stderr?.on('data', (data: string | Uint8Array) => {
                process.stderr.write(data);
            });
            child.on('close', () => {
                resolve();
            });
        
        });

        s.stop('Build successful! ✅');
    } catch (error) {
        cancel('Build failed ❌');
        console.error(error);
        exit(1);
    }
    const date = new Date();
    if (date.getHours() >= 8 && date.getHours() <= 18)
        outro('Have a great day! 🌞');
    else
        outro('Have a great night! 🌚');
}

export {
    buildProject
};
