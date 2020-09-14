// filesystem
// comandos para leer la informacion de un archivo que tenga en la computadora
const fs = require('fs');

const textoLeido = fs.readFileSync('./asset/texto.txt', 'utf-8')

console.log(textoLeido)

// puedo CREAR archivos, recibe dos parametros: nombre del archivo, y qué voy a escribir ahi

const nombreDeLaProfe = "Malena"

const nuevoTexto = `El nombre de la profe es ${nombreDeLaProfe}`

fs.writeFileSync('./assets/nuevoTexto.txt,', nuevoTexto)

//Pomesas en Node. Se agrega un tercer parametro, un callback para que se ejecute esa funcion cuando termine
// parametros del callback, un error por si hay y data
fs.readFile('./assets/texto.txt', 'utf-8', (err, data) => {
    if(err) console.log(err)
})


const http = require('http')

http.createServer((req, res) => {
    fs.readFile('./assets/texto.json',)
    res.end('Hola')
})

server.listen(8080)