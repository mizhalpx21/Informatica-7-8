document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const clap = new Audio("sounds/clap.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const snare = new Audio("sounds/snare.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const clapDiv = document.querySelector("#clap");
    const cowbellDiv = document.querySelector("#cowbell");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");
    const snareDiv = document.querySelector("#snare");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");

    window.addEventListener("keydown", function(event){
        if (event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        } else if (event.key == "c") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        } else if (event.key == "l") {
            cowbell.currentTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");
        } else if (event.key == "h") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        } else if (event.key == "o") {
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        } else if (event.key == "s") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        } else if (event.key == "t") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        } else if (event.key == "y") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        }
    })

    window.addEventListener("keyup", function(event){
        if (event.key == "a"){
            kickDiv.classList.remove("active");
        } else if (event.key == "c"){
            clapDiv.classList.remove("active");
        } else if (event.key == "l"){
            cowbellDiv.classList.remove("active");
        } else if (event.key == "h"){
            hihatDiv.classList.remove("active");
        } else if (event.key == "o"){
            openhatDiv.classList.remove("active");
        } else if (event.key == "s"){
            snareDiv.classList.remove("active");
        } else if (event.key == "y"){
            tomDiv.classList.remove("active");
        } else if (event.key == "y"){
            yuhDiv.classList.remove("active");
        }

    })
})

