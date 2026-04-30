function play(userGuess){
    let randomNum = Math.random();
    console.log(randomNum)

    let subtitle = document.querySelector("h2");
    if(randomNum < 0.3 ){
        subtitle.innerHTML ="Rocks";
        subtitle.style.color ="lightblue";
    } if(randomNum > 0.3 < 0.6 ){
        subtitle.innerHTML ="Paper";
        subtitle.style.color ="lightblue";
    } if(randomNum > 0.6 ){
        subtitle.innerHTML ="Scissors";
        subtitle.style.color ="lightblue";
    }

    let gameResult = subtitle.innerHTML;
    let result = document.querySelector("h3");
     if (userGuess === gameResult){
        result.innerHTML = "We have a tie!";
     }

}
