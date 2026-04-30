function coin(userGuess){
    let randomNum = Math.random();
    console.log(randomNum)

    let subtitle = document.querySelector("h2");
    if(randomNum < 0.5){
        subtitle.innerHTML ="Heads";
        subtitle.style.color ="white";
    } else{
        subtitle.innerHTML ="Tails";
        subtitle.style.color ="white";
}

     let coinResult = subtitle.innerHTML;
     let result = document.querySelector("h3");
     if (userGuess=== coinResult){
        result.innerHTML = "You won!";
     } else{
        result.innerHTML ="You lost, try again!";
     }



}

