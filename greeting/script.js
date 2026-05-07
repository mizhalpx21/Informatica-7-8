document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){

        let name = document.querySelector("#name").value;
        console.log("Hi " + name);

        document.querySelector("h1").innerHTML ="Hi " + name;

        let now = new Date();

        let hour = now.getHours();
        if (hour < 12) {
            document.querySelector("#time").innerHTML = "Good morning!";
        } else if (hour < 18>){
            document.querySelector("#time").innerHTML = "Good afternoon!";
        } else{
            document.querySelector("#time").innerHTML = "Good night!";
        }


        let day = now.getDay();
        console.log("Today is " + day);

        if(day == 0){
            document.querySelector("#day").innerHTML = ""Today is Sunday";
        } else if (day == 1>){
            document.querySelector("#day").innerHTML = "Today is Monday";
        } else if (day == 2>){
            document.querySelector("#day").innerHTML = "Today is Tuesday";
        } else if (day == 3>){
            document.querySelector("#day").innerHTML = "Today is Wednesday";
        } else if (day == 4>){
            document.querySelector("#day").innerHTML = "Today is Thursday";
        } else if (day == 5>){
            document.querySelector("#day").innerHTML = "Today is Friday";
        } else if(day == 6>){
            document.querySelector("#day").innerHTML = "Today is Saturday";



        return false; //Prevents website from reloading after submitting
    };
});
