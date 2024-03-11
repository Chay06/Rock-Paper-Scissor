let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg")

let choices = document.querySelectorAll(".choice");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{

    const arr = ["rock", "paper", "scissor"];
    let randIDx = Math.floor(Math.random()*3);
    let compChoice = arr[randIDx];
    return compChoice;

}
const gameDraw = ()=>{
    msg.innerText = "Game was a Draw! Try Again"
    msg.style.backgroundColor = "#081b31";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playGame = (userChoice)=>{
// generate random computer choice
    let compChoice = genCompChoice();
    
    if(compChoice===userChoice){
        gameDraw();
    }
    else{

        let userWin = true;
        if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "rock"? true:false;
        }
        else if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
    
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});
