import esbuild, { BuildOptions } from 'esbuild';

// import { resolve, join } from 'path';
// const basePath = resolve(__dirname);

const pkg = require('./package.json');
const dependencies = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
const external = dependencies || [];

const options: BuildOptions = {
    entryPoints: ['./Source/App.ts'],
    outfile: './Build/App.js',
    bundle: true,
    platform: 'node',
    external: external,
    loader: { '.ts': 'ts' },
    tsconfig: './tsconfig.json',
    color: true,
};

const args = process.argv.slice(2);
(async () => {
    switch (args[0]) {
        case 'watch':
            options.sourcemap = 'linked';
            await esbuild.build(options);
            const ctx = await esbuild.context(options);
            await ctx.watch();
            break;
        case 'prod-build':
            options.minify = true;
            options.keepNames = true;
            options.treeShaking = true;
            await esbuild.build(options);
            break;
        default:
            options.sourcemap = 'linked';
            await esbuild.build(options);
            break;
    };
})();