function play(userGuess){
    let randomNum = Math.random();
    let compChoice;
    if(randomNum < 0.33 ){
        compChoice ="Rock";
        compChoice.style.color ="lightblue";
    } else if(randomNum < 0.66 ){
        compChoice ="Paper";
        compChoice.style.color ="lightblue";
    } else if(randomNum > 1){
        compChoice ="Scissors";
        subtitle.style.color ="lightblue";
    }

    console.log(compChoice);

    let result =document.querySelector("#result");
    if (userGuess == compChoice){
        result.innerHTML ="We have a tie";
    } else if(userGuess =="Rock"){
        if(comChoice=="Paper"){
           result.innerHTML ="Looser";
        } else {
            result.innerHTML ="You won";
        }
    }
}

// document.addEventListener("DOMContentLoaded", function(){
//     //Your code here
//     document.querySelector("#rock-button").onclick = game("Rock");
// });
