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
            //Returns the Successful Bet to the User
            return numberDepositAmount;
        }
    }
};

//Sets depositAmount Equal to what was returns in the Function
const depositAmount = deposit_money();
//Print the Correct Amount
console.log(depositAmount)
