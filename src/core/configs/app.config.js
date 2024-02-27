const appConfig = Object.freeze({
    env: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
    },
});

module.exports = appConfig;