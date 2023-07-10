
//  -------  Metodos Asincronos --------
// Estos métodos se ejecutan despúes de cierto tiempo. Trabaja con una funcion la cúal recive dos parámetros (error, echo). El siguiente ejemplo se muestra en la vercion ETMAScrip-5

const fs = require('fs')

fs.readFile('./data/first.txt', function (error, data) {

    console.log(error)
    // console.log(data) // De esta manera mostrará un buffer.
    console.log(data.toString())
})

// Funcion flecha con agregado de condicional.

fs.readFile('./datta/first.txt', 'utf-8', (error, data) => { // Acá se está forzando el error en la ruta del archivo para que se muestre en consola como arroja el error.
    if (error) {
        console.log(error)
    }
    // console.log(data) // De esta manera mostrará un buffer.
    console.log(data)
})

// Esta es la forma típica en que se ejecutan las funciones Asíncronas.

// Anidado de codigos. Se crean funciones dentro de otras para hacer diferentes tareas como la de leer y escribir (rearFile, writeFile).

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    }
    
    console.log(data)

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(error)
        }
        
        console.log(data)

        fs.writeFile('./data/newFile.txt', 'Archivo creado desde fs Async','utf-8', (error, data) => {
            if (error) {
                console.log(error)
            }
            
            console.log(data)
        })
    })
})

// En esta manera de escribir codigo existe un problema llamado CALLBACK HELL. Este problema consiste en que el codigo se vuelve inmantenible y dificil de leer. Esto se resuelve con las Promesas Async Away.