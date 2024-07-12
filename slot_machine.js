//Prompt the User
const prompt = require("prompt-sync")();

//Create a Fucntion to Deposit the Money
function deposit_money(){
    while (true){
        //Ask the user for a deposit ammount
        const depositAmount = prompt("Enter a deposit amount: ");

        //Convert the amount from a String into a Number
        const numberDepositAmount = parseFloat(depositAmount);

        //Check if the Number is valid and if not print invalid 
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        }
    }
};

//Run the Function
deposit_money();