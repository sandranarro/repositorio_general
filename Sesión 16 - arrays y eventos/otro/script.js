//variables
const diasemana = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];
const frutas = ["manzana","platano","pera","uva","ciruela"]
//salida en documento

//funciones
document.getElementById('mostrar').addEventListener("click", function mostrar(){
    document.getElementById("arreglo1").innerHTML = diasemana;
    document.getElementById("valor1").innerHTML = diasemana[6];
    document.getElementById("frutas").innerHTML = frutas;
    //longitud de frutas
    document.getElementById("longituddefrutas").innerHTML = 'hay ' + frutas.length +' frutas'
} )



