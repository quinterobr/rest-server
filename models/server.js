const express = require('express');
const cors = require('cors');

class server {

    constructor() {

        this.port = process.env.PORT || 8081;
        this.app = express();
        this.usuriosPath = '/api/usuarios';

        //Midelwares
        this.middlewares();

        this.routes();
    }

    routes() {

        this.app.use(this.usuriosPath, require('../routes/usuarios'));
    }

    middlewares() {

        //Directorio Público
        this.app.use(express.static('public'));

        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('server on port', this.port);
        });
    }
}

module.exports = server;