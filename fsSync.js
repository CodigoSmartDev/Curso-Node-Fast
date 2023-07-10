// El método  `fs`  de Node.js es un módulo incorporado que proporciona funcionalidades para trabajar con el sistema de archivos. Permite realizar operaciones como leer y escribir archivos, crear y eliminar directorios, obtener información sobre archivos y directorios, entre otras tareas relacionadas con la manipulación de archivos y directorios en un entorno de Node.js. Es una herramienta fundamental para interactuar con el sistema de archivos en aplicaciones Node.js. Existen sdos metodos Async y Sync.

const fs = require('fs')

// En este caso el metodo Sync es un metodo sincrono.

const first = fs.readFileSync('./data/first.txt')
// const first = fs.readFileSync('./data/first.txt') De esta menera devolveria un Bufer ("<Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>"), el cual se trata del archivo sin convercion, no lo interpretaria. Para poder convertirlo a un formato string se agrea la funcion UTF-8 o bien se puede agregar al momento de llamar a la funcion. Ej: console.log(first.toString())

const second = fs.readFileSync('./data/first.txt', 'utf-8')


console.log(first)
console.log(second)

// Con el siguiente metodo se pueden crear archivos utilizando Node.
const writeFileSync = fs.writeFileSync('./data/third.txt', 'Este es un archivo creado desde el metodo writeFileSync.')

// console.log(writeFileSync)

// Tambien se pueden crear archivos que su conteniso provengan de VARIABLES
const content = 'Este contenido se creo para almacenarlo en un nuevo archivo y fué sobreescrito'

const fourth = fs.writeFileSync('./data/fourth.txt', content)

// De esta manera si se vuelve a correr el programe, la funcion sobreescribirá el archivo si huvo alguna modificación.

// Si se desea agregar contenido al archivo se utliza la siguiente funcion
// const fourth = fs.writeFileSync('./data/fourth.txt', title, --{
//     flag: 'a'
// }--) De esta manera se agregará el nuevo contenido al archivo.

console.log(fourth)

//  ---------------------------------------





