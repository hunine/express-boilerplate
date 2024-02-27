// const express = require('express');
// const app = express();
// const port = 3000;

// app.get(
//     '/',
//     (req, res, next) => {
//         console.log('this is middleware');
//         next();
//     },
//     (req, res, next) => {
//         console.log('this is another middleware');
//         next();
//     },
//     (req, res) => {
//         res.send('Hello World!');
//     }
// );

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

const server = require('./server');

class App {
    start() {
        server.start();
    }
}

module.exports = new App();
