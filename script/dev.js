const esbuild = require('esbuild')

esbuild.serve({ servedir: 'dist', onRequest: (req) => console.log(req.method, req.status, req.path)},{
    entryPoints: ['src/index.jsx'],
    bundle: true,
    sourcemap: true,
    splitting: true,
    target: ['chrome80', 'firefox80', 'safari13', 'edge80'],
    outdir: 'dist',
    format: 'esm',
    define: {
        'process.env.NODE_ENV': '"production"',
    },
}).then((server)=> {
    console.log(`Server started on http://${server.host}:${server.port}`)
})