let time;
let timer;

function startTimer(seconds) {

    clearInterval(timer);

    time = seconds;

    timer = setInterval(function () {

        let minutes = Math.floor(time / 60);
        let secondsLeft = time % 60;

        if (secondsLeft < 10) {
            secondsLeft = "0" + secondsLeft;
        }

        document.getElementById("timer").innerHTML =
            minutes + ":" + secondsLeft;

        time--;

        if (time < 0) {
            clearInterval(timer);
            document.getElementById("alarm").play();
        }

    }, 1000);
}
