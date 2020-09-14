 const fs = require('fs');
 const jsonAEnviar = require('./modules/enviarJson')
 
//--- SINCRONO----

// Leer archivos ya creados

/* const textoLeido = fs.readFileSync('./assets/texto.txt', 'utf-8')

console.log(textoLeido) */

// Crar un nuevo texto en mi carpeta

/* const nombreDeLaProfe = "Malena";

const nuevoTexto = `El nombre de la profe es ${nombreDeLaProfe}`

fs.writeFileSync("./assets/nuevoTexto.txt", nuevoTexto) */

//----ASINCRONO----
//callback hell

/* fs.readFile('./assets/texto.txt', 'utf-8', (err, data) => {
    if (err) console.log(err)   

    fs.readFile(data, 'utf-8', (err, data2) => {
        if (err) console.log(err)       

        fs.readFile(data2, 'utf-8', (err, data3) => {
            if (err) console.log(err)
            console.log(data3)
        });
    });
}); */

const http = require('http');
const { url } = require('inspector');

// subir un archivo al servidor

/* const server = http.createServer((req, res) => {    
    res.end('Hola');
}); */

const server = http.createServer((req, res) => {  
  /* console.log(req.url) */ // para saber desde donde se hace el pedido
   // console.log(url.parse(req.url, true)) 
    // me devuelve un objeto, interesa la query, el pathname
  // con el true en query me devuelve un objeto, con propiedades de cada query
  // se puede guardar en variable 
  /* const pathname = url.parse(req.url, true).pathname
  const query = url.parse(req.url, true).query */
  /* const { query, pathname } = url.parse(req.url, true)  */

  if ( req.url /* pathname */ === '/peliculas') {
    /* if (query.id === '1') {
      fs.readFile('./assets/singleMovie.json', 'utf-8', (err, data) => {
        res.end(data);
    });  
    } */
    fs.readFile('./assets/movies.json', 'utf-8', (err, data) => {
        res.end(data);
    });  
  }
  else if ( req.url  /* pathname */ === '/series') {
    fs.readFile('./assets/series.json', 'utf-8', (err, data) => {
        res.end(data)
    })
  }
  else {
    // enviar error 404 al usuario (network)
    res.writeHead(404, {
      'Content-type': 'text/html'
    }) 
    // server side rendering
    res.end(`
    <div>
      <img src="http://www.placekitten.com/300"/>
      <p>Estas en la pagina equivocada.</p>
    </div>
    `)  
  }       
});

server.listen(8080)

