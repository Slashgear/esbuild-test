const esbuild = require('esbuild')

esbuild.buildSync({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    minify: true,
    splitting: true,
    target: ['chrome80', 'firefox80', 'safari13', 'edge80'],
    outdir: 'dist',
    format: 'esm',
    define: {
        'process.env.NODE_ENV': '"production"',
    },
})