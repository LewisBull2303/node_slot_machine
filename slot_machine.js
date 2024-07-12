//Prompt the User
const prompt = require("prompt-sync")();

//Create a Fucntion to Deposit the Money
function deposit_money(){
    //Loop Until the user enters a valid amount
    while (true){
        //Ask the user for a deposit ammount
        const depositAmount = prompt("Enter a deposit amount: ");

        //Convert the amount from a String into a Number
        const numberDepositAmount = parseFloat(depositAmount);

        //Check if the Number is valid and if not print invalid 
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            //Returns the Successful Bet
            return numberDepositAmount;
        }
    }
};
//define a function to get the number of lines
function getNumberOfLines(){
    //Loop Until the user enters a valid amount
    while (true){
        //Ask the user for the amount of lines that wish to bet on
        const lines = prompt("Enter the number of lines you wish to bet on(1-3): ");

        //Convert the line amount from a String into a Number
        const numberOfLines = parseFloat(lines);

        //Check if the Number is valid and if not print invalid
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >= 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            //Returns the amount of lines
            return numberOfLines;
        }
    }
}


//Sets depositAmount Equal to what was returns in the Function
const depositAmount = deposit_money();

//Sets Number of Lines equal to the amount that was returned in the function
const numberOfLines = getNumberOfLines();
