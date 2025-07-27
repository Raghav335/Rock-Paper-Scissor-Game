let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#computerscore");

const GenerateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const DrawGame = () => {

    msg.innerText = "Game Was Draw Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = You Win! Your ${userchoice} beats ${compchoice};
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        compscorePara.innerText = computerscore;

        msg.innerText = You lost ${compchoice} beats Your ${userchoice};
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    //Generate Computer choice
    const compchoice = GenerateCompChoice();

    if (userchoice === compchoice) {
        //Draw Game
        DrawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            //rock,paper
            compchoice === "rock" ? false : true;

        }
        showWinner(userwin, userchoice, compchoice);
    }

}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")

        playGame(userchoice)

    });
});