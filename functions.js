// // functions
// function greetClass() {
//     console.log ("Hello class!!!")
// }

// greetClass()

// pizza functions
// const prompt = require('prompt-sync')();

// function getSizeOfPizza () {
    
//     const pizzaSize = promt ("What size pizza do you want? S, M, L,")

//     return pizzaSize;
// }

// funcational expression
// const greetClass = function() {
//     return console.log ("Hello class!!!")
// }

// greetClass()

// arrow functions
// const greetClass = () => console.log ("Hello class!!!");

// greetClass()
// can be a larger block of code if needed.


// parameters and arguments

// function in length and width and gives parimeter
// function logRectInfo (length, width) {
//     console.log (length * width);
//     console.log (2*(length+width))
// };

// logRectInfo(10,5);

// function calculateArea(length, width) {
//     return length * width;
// };

// function calculateParameter (length, width) {
//     return 2 * (length + width);
// };

// function calculateVolume (length, width, height = 1) {
//     return length * width * height;
// }

// console.log (`Area = ${calculateArea(10,5)}; parameter = ${calculateParameter(10,5)}; volume = ${calculateVolume(10,5)}`);

// console.log (`Area = ${calculateArea(10,5)}; parameter = ${calculateParameter(10,5)}; volume = ${calculateVolume(10, 5, 2)}`);


// pizza function
// break your pizza calculator up into multiple functions
// 1. getCostofSize() - include while loop for wrong answers
// return amount based on size
// 2. getCostOfCheese - extra cheese? return cost
// 3. getCostOfToppigns - return cost of toppings
// multiple loop for the whole thing for multiple pies

const prompt = require('prompt-sync')(); 
var colors = require('colors'); 

let total = 0;
let pizza = null;
// // let another = null;

// size of pizza function and prompt
function getCostOfSize (size) {
    total = size;
    console.log (`Your running total so far is ${total}.00`.green);
};

do {
    pizza = prompt ("What size pizza do you want (S, M, L, or XL?) ").toUpperCase();
    switch (pizza) {
        case "S":
            getCostOfSize (5);
            break;
        case "M":
            getCostOfSize (6);
            break;
        case "L":
            getCostOfSize (7);
            break;
        case "XL":
            getCostOfSize (8);
            break;
        default:
            console.log("Invalid entry please try again. (HINT: only enter S, M, L or XL.) ".red)
    };
    if (pizza === 'S' || pizza === 'M'|| pizza === 'XL' || pizza === 'XL'){
        pizza = 1;
        };
} while (pizza !== 1);

// extra cheese function and prompt
function getCostOfCheese (cheese){
    total += cheese;
    console.log (`Your current running total is ${total}.00`.green) 
};

let extraCheese = null;    
do {
    extraCheese = prompt ("Do you want extra cheese for $1 more? (Y/N) ").toUpperCase();
    switch (extraCheese) {
        case "Y":
            getCostOfCheese (1);
            break;
        case "N":
            getCostOfCheese (0);
            break;
        default:
            console.log ("Invalid entry please try again. (HINT: only enter Y or N.)".red);
    };
    if (extraCheese === 'Y' || extraCheese === 'N'){
        extraCheese = 1;
    }
} while (extraCheese !== 1);



    