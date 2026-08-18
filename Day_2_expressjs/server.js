// let http = require("http");

// let server = http.createServer((req, res) => {
//     if (req.url === "/users"){
//         res.end("mai user me hun");
//     }

//     if (req.url === "/home"){
//         res.end("mai home me hun");
//     }

//     if (req.url === "/carts"){
//         res.end("mai carts me hun");
//     }
// });

// server.listen(3000, () => {
//     console.log("server chalu hai 3000 pe");
// });

const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    res.send("okay got it");
});

app.listen(3000, () => {
    console.log("server is runing on port 3000");
});