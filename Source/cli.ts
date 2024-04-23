#!/usr/bin/env node

import { Command } from 'commander';
import { argv } from 'process';
import 'source-map-support/register';

import { PackageJsonCore } from '@/Config';
import { InitProject } from '@/Domain/UseCase/CLI';

const commander = new Command();


commander.version(PackageJsonCore.version, '-v, --version', 'output the current version');

commander
    .command('init')
    .description('Initialize a new project')
    .action(InitProject);

commander.parse(argv);