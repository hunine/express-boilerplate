const path = require('path');
const dotenv = require('dotenv');

const projectPath = path.resolve('.');
dotenv.config({ path: path.resolve(projectPath, './.env') });

require('../app').start();
