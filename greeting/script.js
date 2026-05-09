document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = function () {
        let name = document.querySelector("#name").value;


        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = new Date();

        let hour = now.getHours();

        if (hour < 12) {
            document.querySelector("#time").innerHTML = "Good morning!";
        } else if (hour < 18) {
            document.querySelector("#time").innerHTML = "Good afternoon!";
        } else {
            document.querySelector("#time").innerHTML = "Good evening!";
        }

        let day = now.getDay();

        if (day == 0) {
            document.querySelector("#day").innerHTML = "Today is Sunday";
        } else if (day == 1) {
            document.querySelector("#day").innerHTML = "Today is Monday";
        } else if (day == 2) {
            document.querySelector("#day").innerHTML = "Today is Tuesday";
        } else if (day == 3) {
            document.querySelector("#day").innerHTML = "Today is Wednesday";
        } else if (day == 4) {
            document.querySelector("#day").innerHTML = "Today is Thursday";
        } else if (day == 5) {
            document.querySelector("#day").innerHTML = "Today is Friday";
        } else if (day == 6) {
            document.querySelector("#day").innerHTML = "Today is Saturday";
        }

        if (day == 1) {
            document.querySelector("#friday").innerHTML = "Not Friday, yet!";
        } else if (day == 2) {
            document.querySelector("#friday").innerHTML = "Not Friday, yet!";
        } else if (day == 3) {
            document.querySelector("#friday").innerHTML = "Not Friday, yet!";
        } else if (day == 4) {
            document.querySelector("#friday").innerHTML = "Not Friday, yet!";
        } else if (day == 5) {
            document.querySelector("#friday").innerHTML = "Finally Fridaaaaaay! 🕺";
        } else {
            document.querySelector("#friday").innerHTML = "Just enjoy your weekend 🙌";
        }

        return false; // Prevent page reload
    };

});
