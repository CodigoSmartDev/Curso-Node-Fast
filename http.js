const http = require('http')

http.createServer( (request, response) => {
    response.write('Hello world. Probando creacion de servidor.')  //Este es el mensaje que se mostrará cuando se llame al servidor.
    response.end() // Siempre hay que colocar este método para que el servidor termine la función.
}).listen(3000) // Se coloca un servidor que no esté reservado. Por eso siempre se colocan números elevados.

console.log('Servidor escuchando en el puerto 3000')

// Para poder visitar el servidor hay que conectarse desde el navegador y buscar "localhost:3000" De esa manera se vera, en este caso, el mensaje que se está ejecutando "Hello world. Probando creacion de servidor."
// Para cancelar el funcionamiento del servidor se utiliza Ctrl + C dos veces.