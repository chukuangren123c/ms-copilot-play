import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import html from 'rollup-plugin-html';

// rollup.config.mjs
// ---cut-start---
/** @type {import('rollup').RollupOptions} */
// ---cut-end---
export default {
    input: 'src/workers.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
            plugins:[
                terser()
            ]
        }
    ],
    plugins:[
        typescript(),
        json(),
        html({
			include: '**/*.html'
		})
    ]
};