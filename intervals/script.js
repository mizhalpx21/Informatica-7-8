let counter = 0; //Guarda el tiempo en segundos
let interval;

function startTimer(seconds){ //Se crea una funcion que almacena los segundos de los minutos 1, 5 y 10
    counter = seconds;  //Guarda el numero dentro de counter
    document.querySelector('h1').innerHTML = counter; //Esto va a mostrar el numero en la pantalla


}

function count() { //Esto determina cada cuando se realiza la funcion, esto es cada segundo
   let minutes = Math.floor(counter/60);
   let seconds = Math.floor(counter%60)

    counter--; //-1 un segundo al timer
    document.querySelector('h1').innerHTML = `${minutes}:${seconds}` ; //Va a mostrar el numero nuevo en la pantalla

    if (counter <=0){ //Si el contador llega a 0
        clearInterval(interval); //Detiene el tiempo
        document.querySelector('h1').innerHTML = "Alarm!";
    }
    if (counter == 0){
        alarm.play();
        time--;
        }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#start').onclick = function(){ //Cuando haces click al boton de start counting entonces...
        clearInterval(interval); //Detiene el timer para reiniciarlo
        interval = setInterval(count, 1000); //Cada 1000 milisegundos es 1 segundo

    };
});

