let userScore = 0;
let compScore = 0;

// dom
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("sessior");


// computer Choice
function computerChoice() {
    const choises = ['rock', 'paper', 'sessior'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choises[randomChoice];
}

function conv(words) {
    if (words == "rock") return "Rock";
    if (words == "paper") return "Paper";
    return "Sessiors";
}


function win(userChoice, computerchoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `You Choose ${conv(userChoice)}, Computer choose ${conv(computerchoice)}, You Win.`;
    document.getElementById(userChoice).classList.add('green');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green'), 500);
}

function lose(userChoice, computerchoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `You Choose ${conv(userChoice)}, Computer choose ${conv(computerchoice)}, You Lost.`;
    document.getElementById(userChoice).classList.add('red');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red'), 500);

}

function tie(userChoice, computerchoice) {
    result_p.innerHTML = `You both Choose the same, It's a draw.`;
    document.getElementById(userChoice).classList.add('grey');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey'), 500);

}



// game Function
// user choice
function game(userChoice) {
    const computerchoice = computerChoice();
    switch (userChoice + computerchoice) {
        case "rocksessior":
        case "paperrock":
        case "sessiorpaper":
            win(userChoice, computerchoice);
            break;

        case "rockpaper":
        case "papersessior":
        case "sessiorrock":
            lose(userChoice, computerchoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "sessiorsessior":
            tie(userChoice, computerchoice);
            break;
    }
    // console.log("user choice" + userChoice);
    // console.log("comp choice" + computerchoice);
    // if (userChoice == computerchoice) {
    //     tie();
    // } else if (userChoice === "rock" && computerchoice === "paper") {
    //     loss();
    // } else if (userChoice === "rock" && computerchoice === "sessior") {
    //         win();
    // } else if (userChoice === "paper" && computerchoice === "rock") {
    //         win();
    // } else if (userChoice === "paper" && computerchoice === "sessior") {
    //     loss();
    // } else if (userChoice === "sessior" && computerchoice === "rock") {
    //     loss();
    // } else if (userChoice === "sessior" && computerchoice === "paper") {
    //         win();
    // }

}

// evenrt Listenr to button 

function main() {
    rock_div.addEventListener('click', () => game("rock"))
    paper_div.addEventListener('click', () => game("paper"))
    scissor_div.addEventListener('click', () => game("sessior"))
}

main();