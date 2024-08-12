//variables
var clima = 'nublado';
var fruta = 'manzana';
var diasemana = 'martes';
//estructura switch case
switch(clima){
    case 'lluvioso':
        console.log("recuerda llevar un paraguas");
        break;
    case 'soleado':
        console.log("viste ligero");
        break;
    case 'nublado':
        console.log("sal a la calle");
        break;
    default:
        console.log("tipo de clima desconocido")

}

//si la fruta es manzana el precio es de 5 soles 
//si la fruta es platano el precio es de 2 soles
//si la fruta es mango el precio es de 4 soles
//si es cualquiera otra fruta no se tiene esa fruta 

switch(fruta){
    case 'manzana':
        console.log("el precio es de 5 soles");
        break;
    case 'platano':
        console.log("el precio es de 2 soles");
        break;
    case 'mango':
        console.log("el precio es de 4 soles");
        break
    default:
        console.log("no se tiene esa fruta")
}

switch(diasemana){
    case 'lunes':
        console.log("el día es lunes");
        break;
    case 'martes':
        console.log("el día es martes");
        break;
    case 'miercoles':
        console.log("el día es miércoles");
        break;
    case 'jueves':
        console.log("el día es jueves");
        break;
    case 'viernes':
        console.log("el día es viernes");
        break;
    default:
        console.log("no se sabe que día es")
}
