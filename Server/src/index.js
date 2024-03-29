const express = require("express");
const server = express(); //config de nuestro server
const router = require("./routes/index")
const morgan = require("morgan");
const PORT = 3002;
const { conn } = require('./DB_connection'); //config de nuestra base de datos 05052023

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use("/rickandmorty", router)

server.listen(PORT, async() =>{
    console.log(('Server raised in port: ' + PORT));
    await conn.sync({force: true})
})



// const { response } = require("express");
// const http = require("http");
// const { getCharById } = require("./controllers/getCharById")

// http
// .createServer((request, response) =>{
//     response.setHeader('Access-Control-Allow-Origin', '*');

//     if(request.url.includes("/rickandmorty/character")){
//         const id = request.url.split("/").at(-1)

//         getCharById(response, +id);
//     }
// })
// .listen(3002, "localhost")