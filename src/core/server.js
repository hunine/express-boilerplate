const express = require('express');
const appConfig = require('./configs/app.config');
const apis = require('./apis');

class Server {
    start() {
        this.app = express();
        this.initRouters();
        this.app.listen(appConfig.env.port, () => {
            console.log(`Server started on ${appConfig.env.host}:${appConfig.env.port}`);
        });
    }

    initRouters() {
        apis.load(this.app);
    }
}

module.exports = new Server();
