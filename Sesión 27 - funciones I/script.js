
/*multiplicacion*/
function multiplicacion(a, b){
    resultado = a*b 
    return resultado
} 

var resultado = multiplicacion(4, 5)
console.log(resultado)

 

/*division*/
function division(a, b){
    resultado = a/b 
    return resultado
} 

var resultado = division(20, 4)
console.log(resultado)

/*potencia*/
function potencia(a, b){
    resultado = a**b 
    return resultado
} 

var resultado = potencia(5, 3)
console.log(resultado)

/*promedio*/
function promedio(a, b, c){
    resultado = (a+b+c)/3
    return resultado
} 

var resultado = promedio(2, 4, 6)
console.log(resultado)

/*precio final*/
function calcularpreciofinal(precio, descuento){
    resultado = (precio*descuento)/100
    return precio - resultado 
} 

var resultado = calcularpreciofinal(100, 80)
console.log(resultado)

/*precio finalito*/

function calcularprecio(precio){
var descuento
if(precio >= 0 && precio <=100){
descuento = 20 
}
else if(precio <=200){
    descuento = 50
}
else{
    descuento = 60
}
resultado = (precio*descuento)/100
return precio - resultado
} 
var resultado = calcularprecio(200)
console.log(resultado)



/*si está entre 100 y 200 es 50% de descuento y si es mayor es 60% y si está entre 0 y 100 es 20%


var precio = (100,200)



if(precio= 100 || 200 ){
console.log("es 50% de descuento")
else if(precio < 200){
console.log("el descuento es del 60%")
}
else if(precio <100){
    console.log("el descuento es 20%")
}

}
*/