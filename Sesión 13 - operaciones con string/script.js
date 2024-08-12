//variables
var saludo = "Hola como estás!"
var nombre = "Manuel"

//salida en consola 
console.log(`Enrique ${saludo}`)

//operaciones con estring 
//1. longitud de cadena 

console.log(`longitud del nombre ${nombre} : ${nombre.leigth}`);

//2. seleccionar una letra 

console.log(`la primera letra del nombre: ${nombre} : ${nombre[5]}`);

//3.seleccionar una subcadena
console.log(`seleccionar la palabra Hola de frase: ${saludo.substring(0,4)}`);

//4. convertir en Mayúscula
console.log(`Mayuscula del nombre: ${nombre}: ${nombre.toUpperCase()}`);