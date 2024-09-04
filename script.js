function getComputerChoice()
{ 
    let number = Math.random()*3;   //multiple random number by 3. The range the random number lands corresponds to the rock, paper, scissors selection of computer
    if (number<1)       
    {
        return "r";
    }
    else if (number<2)
    {
        return "p";
    }
    else
    {
        return "s";
    }
}

function getHumanChoice()
{
    let choice;
    let valid = false;
    while (!valid)           //loops until user selects a valid option
    {
        choice = prompt("Select rock, paper or scissors:")
        choice = choice.toLowerCase();
        switch (choice)     // if user types rock, paper, or scissors then there selection is change to r, p, or s. 
        {
            case "rock":
                choice = "r";
                break;
            case "paper":
                choice = "p";
                break;
            case "scissors":
                choice = "s";        
        }
        if (choice=="r" || choice == "p" || choice=="s")  //checks if choice is valid
        {
            valid = true;
        }
        else    // asks the user to select another option
        {
            console.log("Please select a valid option.");
        }
    }
    return choice;

}

function playRound(user)
{
    if (fin) return;
    let computer = getComputerChoice();
    // let user = getHumanChoice;
    if (user == "r")
    {
        if (computer == "p")
        {
            win.textContent = ("You lost. Paper beats rock.");
            computerScore++;
        }
        else if (computer == "s")
        {
            win.textContent = ("You win. Rock beats scissors");
            humanScore++;
        }
        else 
        {
            win.textContent = ("Tie. You both selected rock.");
        }
    }
    else if (user == "p")
    {
        if (computer == "r")
            {
                win.textContent = ("You win. Paper beats rock.");
                humanScore++;
            }
        else if (computer == "s")
            {
                win.textContent = ("You lost. Scissors beats paper");
                computerScore++;
            }
        else 
            {
                win.textContent = ("Tie. You both selected paper.");
            }
    }
    else
    {
        if (computer == "p")
        {
            win.textContent = ("You win. Scissors beats paper.");
            humanScore++;
        }
        else if (computer == "r")
        {
            win.textContent = ("You lost. rock beats scissors");
            computerScore++;
        }
        else 
        {
            win.textContent = ("Tie. You both selected scissors.");
        }
    }
    score.textContent = `User: ${humanScore} Computer: ${computerScore}`;
    rounds++;
    if (rounds >= 5)
    {
        fin = true;
        playGame();
    }

}

function playGame()
{
    // while (rounds<5)
    // {
    //     playRound();
    //     rounds++;
    //     if (humanScore > ((5-rounds)+computerScore) || computerScore > ((5-rounds)+humanScore))   //if the computer's current score is greater than the maximum score the user could get with the remain rounds left (or vice versa) then the game ends
    //     {
    //         break;
    //     }
    // }
    if (humanScore > computerScore)
    {
            final.textContent = (`You win! ${humanScore}-${computerScore}`);
    }
    else if (computerScore > humanScore)
    {
            final.textContent = (`You lost! ${computerScore}-${humanScore}`);
    }
    else
    {
        final.textContent = (`Tie game ${humanScore}-${computerScore}`);
    }
}
let fin = false; 
let rounds = 0;
humanScore = 0;
computerScore = 0;
buttons = document.querySelector("#buttons");
const body = document.querySelector("body");
const scoreText = document.querySelector("#scoreText");
const score = document.querySelector("#score");
const final = document.querySelector("#final");
let win = document.createElement("p");
body.insertBefore(win, score);
buttons.addEventListener("click", (e)=>{
    if (e.target.id == "rock")
    {
        playRound("r");
    }
    else if (e.target.id == "paper")
    {
        playRound("p");
    }
    else
    {
        playRound("s");
    }
});

playGame();