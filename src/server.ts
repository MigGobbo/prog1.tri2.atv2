const server = Bun.serve({
    port: 3000,
    routes: {
        "/api-debugger":Bun.file(`public/api-debugger.html`) ,
        "/test": {
            GET: () => Response.json({time:Date.now}),
            PUT: () => Response.json({time:Date.now}),
            POST: () => Response.json({time:Date.now}),
            DELETE: () => Response.json({time:Date.now})
    }
    },
    fetch() {
        return new Response('not found', {status: 404})
    }
})

console.log('server runing on port: http://localhost:${server.port}')