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

function playRound()
{
    let computer = getComputerChoice();
    let user = getHumanChoice();
    if (user == "r")
    {
        if (computer == "p")
        {
            console.log("You lost. Paper beats rock.");
            computerScore++;
        }
        else if (computer == "s")
        {
            console.log("You win. Rock beats scissors");
            humanScore++;
        }
        else 
        {
            console.log("Tie. You both selected rock.");
        }
    }
    else if (user == "p")
    {
        if (computer == "r")
            {
                console.log("You win. Paper beats rock.");
                humanScore++;
            }
        else if (computer == "s")
            {
                console.log("You lost. Scissors beats paper");
                computerScore++;
            }
        else 
            {
                console.log("Tie. You both selected paper.");
            }
    }
    else
    {
        if (computer == "p")
        {
            console.log("You win. Scissors beats paper.");
            humanScore++;
        }
        else if (computer == "r")
        {
            console.log("You lost. rock beats scissors");
            computerScore++;
        }
        else 
        {
            console.log("Tie. You both selected scissors.");
        }
    }
}

function playGame()
{
    let rounds = 0;
    // while (rounds<5)
    // {
    //     playRound();
    //     rounds++;
    //     if (humanScore > ((5-rounds)+computerScore) || computerScore > ((5-rounds)+humanScore))   //if the computer's current score is greater than the maximum score the user could get with the remain rounds left (or vice versa) then the game ends
    //     {
    //         break;
    //     }
    // }
    // if (humanScore > computerScore)
    // {
    //         console.log(`You win! ${humanScore}-${computerScore}`);
    // }
    // else if (computerScore > humanScore)
    // {
    //         console.log(`You lost! ${computerScore}-${humanScore}`);
    // }
    // else
    // {
    //     console.log(`Tie game ${humanScore}-${computerScore}`);
    // }
}
console.log("a");
humanScore = 0;
computerScore = 0;
console.log("Let's play rock, paper, scissors! 5 rounds")

buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e)=>{
    if (e.target.id == "rock")
    {
        console.log("rock");
    }
    else if (e.target.id == "paper")
    {
        console.log("paper");
    }
    else
    {
        console.log("scissors");
    }
});

playGame();