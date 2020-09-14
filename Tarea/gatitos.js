const fs = require('fs');
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === "/") {
    res.end("Gatitos!");
  } else if (pathname === "/mostrarGatito") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`<div>
    <h1>Gatito!</h1>
    <img src="http://placekitten.com/837/837" />
    </div>`);
  } else if (pathname === "/fotosGatito") {
    fs.readFile("./assets/cats.json", "utf-8", (error, data) => {
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Este camino no lleva a ningún lado");
  }
});

server.listen(3030);