// El siguiente código utiliza el módulo 'path' de Node.js para acceder a funcionalidades relacionadas con la manipulación de rutas de archivos y directorios. La declaración 'const path = require('path')' importa el módulo 'path' y lo asigna a la variable 'path', lo que permite utilizar sus métodos y propiedades en el código posterior.


const path = require('path')

const filePath = path.join('/public', 'dist', '/styles', 'main.css')
// Este tipo de metodo permite unir rutas de directorios/carpetas. Lo convierte en una ruta valida para el sistema en el que se está trabajando (windows, mac, linux, etc) Dato: Este metodo es muy utilizado en backend.

console.log(path.basename(filePath))
// Este metodo devuelve el archivo base de la ruta, en este caso devolveria 'main.css'

console.log(path.dirname(filePath))
// Este metodo devuelve la ruta del archivo pero no muestra el archivo mismo

console.log(path.parse(filePath))
// Este metodo devuelve la ruta en formato de objeto

console.log(path.resolve('dist'))
// Este metodo completa la ruta del archivo que se está ejecutando



