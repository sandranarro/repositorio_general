//variables 
const preguntas = [ 
    "¿Con qué frecuencia realizas deporte?<br>considera como deporte cualquier actividad que aceñere tu ritmo cardiaco, como caminar rapido, andar en bicicleta, bailar, o por supuesto, practicar un deporte",
    "¿Cuántos vasos de agua (200mL) bebes al día?<br>No consideres la ingesta de otos líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?",];
    const opciones = [ 
        [ "3 o más veces por semana",
        "Entre 1 y 2 veces a la semana",
        "Al menos 4 veces al mes"],
       ["Al menos 8 vasos al día",
        "Entre 5 y 8, depende del día",
       "Cuando me acuerdo"],
       ["5 ó más",
        "2 a 4",
        "Al menos 1 vez al día"] 
    ];

    const clave = [
        [5, 4, 3],
        [5, 4, 2],
        [5, 4, 3],
    ];
    var i = 0;
    var puntaje = 0;
    var intervalo;



    function mostrarPregunta(){
        document.getElementById('pregunta').innerHTML=preguntas[i];
        document.getElementById('op1').innerHTML=opciones[i][0];
        document.getElementById('op2').innerHTML=opciones[i][1];
        document.getElementById('op3').innerHTML=opciones[i][2];
        iniciarcronometro();
    };

    function iniciarcronometro(){
        var duracion = 15;
        var cronometro = document.getElementById('cronometro');
        iniciartiempo(duracion, cronometro);
    }

    function iniciartiempo(tiempo, elemento){
        intervalo= setInterval(() => {
            if(tiempo ==0){
               clearInterval(intervalo);
               i=i+1;
               mostrarPregunta();
            }
            else{
                tiempo = tiempo - 1;
                elemento.textContent = "00:"+tiempo;
            }

        }, 1000);
    }

    mostrarPregunta();
/*
    //funciones
    function mostrarpreguntas(){
        document.getElementById('contenido').innerHTML = `
        <p class="opcion">${preguntas[i]}<p/>
         `
    }


    console.log(preguntas [0])
    console.log(opciones[0])*/    
    