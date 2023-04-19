// const { response } = require("express");
const http = require("http");
const data = require("./utils/data");

http
.createServer((request, response) =>{
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split("/").at(-1)
        // console.log(typeof +id); >> pasar de string a numero con el +

        const characterFind = data.find((character) =>{
            return character.id === +id
        })

        response
        .writeHead(200, { "Content-type":"application/json" })
        .end(JSON.stringify(characterFind))
    }

})
.listen(3002, "localhost")