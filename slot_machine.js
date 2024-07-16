//Prompt the User
const prompt = require("prompt-sync")();

//Init the number or rows and Columns
const ROWS = 3;
const COLS = 3;

//Init the symbols and how many there are
const SYMBOLS_COUNT = {
    "🍒": 4,
    "🍌": 4,
    "🍊": 6,
    "🍍": 8,
    "🎰": 3,
}

//give the symbols values
const SYMBOL_VALUES = {
    "🍒": 5,
    "🍌": 5,
    "🍊": 3,
    "🍍": 2,
    "🎰": 10,
}

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
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            //Returns the amount of lines
            return numberOfLines;
        }
    }
}

//define a funtion to get the total bet
function getBet(balance, lines){
    //Loop Until the user enters a valid amount
    while (true){
        //Ask the user for the amount they want to bet per line
        const bet = prompt("Enter the bet per line: ");

        //Convert the bet amount into a float
        const numberBet = parseFloat(bet);

        //Check if the Number is valid based on how many lines they chose and their balance and if not print invalid
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            //Returns the bet amount
            return numberBet;
        }
    }
}

//Define a function to spin the slot machine
function spin(){
    const symbols = [];
    //for all of the symbols and the count of the symbols count variable
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
      for (let i = 0; i < count; i++) {
        //push the symbols to the list to store all possible symbols
        symbols.push(symbol);
      }
    }
    //init the slot machine rows
    const reels = [];
    for (let i = 0; i < COLS; i++) {
      reels.push([]);
      //copy all of the symbols to a new list
      const reelSymbols = [...symbols];
      for (let j = 0; j < ROWS; j++) {
        //randomy generate the rows based on all the symbols available
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        //get rid of the selected symbol so it cannot be selected again
        reelSymbols.splice(randomIndex, 1);
      }
    }
  
    return reels;
  };

function transpose(reels){
    const rows = [];
  
    for (let i = 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]);
      }
    }
  
    return rows;
  };

//Sets depositAmount Equal to what was returns in the Function
let balance = deposit_money();

//Sets Number of Lines equal to the amount that was returned in the function
const numberOfLines = getNumberOfLines();

//Gets the users total bet based on how much they put in the balance and the number of lines
const bet = getBet(balance, numberOfLines);

const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);
