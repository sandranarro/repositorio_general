//variables
var num1 = 4;
var num2 = 2;
var num3 = 8;
var texto1 = '4';
var nombre = "Sa0ndra"
//salidas 
console.log(num2>num1);
console.log(num1==texto1);
console.log(num1===texto1);
//operadores lógicos 
//el num1 es mayor al num2 o num 3 es menor a num 1
console.log(num1>num2 || num3<num1);
//el num1 es mayor al num2 y num2 es mayor a num3
console.log(num1>num2 && num2>num3)

//condicional
//si num1 es mayor a num2 "maria gana el juego"
//si num 3 es mayor a num2 "mario gana e. juego"
//caso contrario "juan gana el juego"
if(num1>num2){
    console.log("maria gana el juego")
}
else if(num3>num1){
    console.log("mario gana el juego")
}
else{
    console.log("juan gana el juego")
}

//si la primera letra es "A" entonces colocar "tu nombre comienza con A"
//si la primera letra es "B" entonces colocar "tu nombre comienza con B"
//caso contrario colocar "no sé como inicia tu nombre"
if(nombre[0] == "A"){
    console.log("tu nombre comienza con A")
}
else if(nombre[0] == "B"){
    console.log("tu nombre comienza con B")
}
else{
    console.log("no sé como inicia tu nombre")
}