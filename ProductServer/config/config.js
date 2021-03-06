var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
var config = {
    development: {
        root: rootPath,
        app: { name: 'TodoToday' },
        port: 5000,
        db: 'mongodb://127.0.0.1/Product-dev',
        secret: "cayennedlikedhistreats"
    },
    test: {
        root: rootPath,
        app: { name: 'ThingsToDo' },
        port: 4000,
        db: 'mongodb://127.0.0.1/Product-test',
        secret: "cayennedlikedhistreats"
    },
    production: {
        root: rootPath,
        app: { name: 'TodoToday' },
        port: 80,
        db: 'mongodb://127.0.0.1/Product',
        secret: "cayennedlikedhistreats"
    }
};

module.exports = config[env];