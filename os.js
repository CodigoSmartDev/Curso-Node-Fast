const os = require('os')

console.log(os.userInfo())  //Muestra la informacion del usuario
console.log(os.uptime())    //Muestra el tiempo transcurrido desde el inicio del equipo
console.log(os.platform())  //Muestra el tipo de plataforma del sistema operativo del equipo
console.log(os.totalmem())  //Muestra el total de la memoria RAM
console.log(os.freemem())  //Muestra la memoria RAM disponible del sistema


  // Otro tipo de mensaje por consola
console.table({
    os: os.platform(),
    version: os.version(),
    totalMemory: os.totalmem()
})