let counter = 0;
let interval;

function setTimer(seconds){
    counter = seconds;
    document.querySelector('h1').innerHTML = counter;


}

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;

    if (counter <=0){
        clearInterval(interval);
        document.querySelector('h1').innerHTML = "Time's Up!";

    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
        clearInterval(interval);
        interval = setInterval(count, 1000);

    };
});

