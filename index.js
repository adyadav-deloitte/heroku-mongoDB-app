const hapi = require('@hapi/hapi');

const start = async function () {
    const server = hapi.Server({
        port: 3000
    });
    
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return h.response("Hello, Heroku!");
            }
        }
    ]);

    await server.start();
    console.log(`Server running at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start();