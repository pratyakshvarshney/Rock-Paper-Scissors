let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScoreQuery = document.querySelector("#user-score");
const compScoreQuery = document.querySelector("#comp-score");

const genCompChoices = () => {
    const c = ["rock", "paper", "scissors"];
    const randVal = Math.floor(Math.random() * 3);
    return c[randVal];
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again!!";
    msg.style.backgroundColor = "rgb(98, 98, 186)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreQuery.innerText = userScore;
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreQuery.innerText = compScore;
        msg.innerText = `You Lost!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoices();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};