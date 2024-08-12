var color = "verde";
var tamaño = "mediano";
var precio = 1000;
var estación = "verano"
var nota_juan = 16;



//si el color es verde y el precio es menor igual a 100
//entonces lo compro, caso contrario me compro otra cosa

if(color == "verde" && precio <=100){
console.log("lo compro");
}
else{
console.log("compro otra cosa");
}

//si el tamaño es mediano o el color es verde lo compro, 
//caso contrario me voy de viaje
if(tamaño == "mediano" || color == "verde"){
    console.log("lo compro")
}
else{
 console.log("me voy de viaje")
}

//si la estación es invierno o la estación es otoño "lo compro"
//caso contrario ahorro el dinero 
if(estación == "invierno" || estación == "otoño"){
    console.log("lo compro")
}
else{
    console.log("ahorro el dinero")
}

//si el tamaño es mediano o el precio es menor igual a 1000
//o el color es rojo entonces lo compro, caso contrario lo pongo en el banco

if(tamaño == "mediano" || precio <= 1000 || color == "rojo"){
    console.log("lo compro")
}
else{
    console.log("lo pongo en el banco")
}

//si la nota es mayor o igual a 10 y menor a 15 entonces tendrá una c 
//si la nota es mayor a 15 y menor a 18 entonces tendrá una b
//caso contrario tendrá una a

if(nota_juan >= 10 && nota_juan < 15){
    console.log("C")
}
else if(nota_juan >15 && nota_juan < 18){
    console.log("B")
}
else{
    console.log("A")
}



//&& = y 
//|| = o 