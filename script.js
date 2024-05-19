function getComputerChoice()
{ 
    let number = Math.random()*3;
    if (number<1)
    {
        return "rock";
    }
    else if (number<2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let choice;
    let valid = false;
    while (!valid)
    {
        choice = prompt("Select rock, paper or scissors:")
        choice = choice.toLowerCase();
        if (choice=="rock" || choice == "paper" || choice=="scissors")
        {
            valid = true;
        }
        else
        {
            console.log("Please select a valid option.");
        }
    }
    return choice;

}

console.log(getComputerChoice());
getHumanChoice();