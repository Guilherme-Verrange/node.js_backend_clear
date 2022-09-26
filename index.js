const express = require ('express');

let app = express();

    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Olá, Mundo!</h1>");
    });


    app.get('/users',  (req, res) => {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            users:[{

                name: 'Guilherme Verrange',
                email: 'verrangeguilherme@gmail.com',
                id: 1
            }]

        }));
    });

    app.listen(3000, '127.0.0.1', ()=>{

        console.log("Servidor Iniciado");


    });