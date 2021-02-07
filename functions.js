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

let total = 0;
let pizza = null;
// let another = null;


function getCostOfSize (size) {
    let total += pizzaPrice
};

do {
    do {
        pizza = prompt ("What size pizza do you want? (S, M, L, XL) ".green).toUpperCase();
        switch (pizza) {
            case  "S":
                let pizzaPrice = 5;
                getCostOfSize;
                break;
            case "M":
                let pizzaPrice = 6;
                getCostOfSize;
                break;
            case "L":
                let pizzaPrice = 7;
                getCostOfSize;
                break;
            case "XL":
                let pizzaPrice = 8;
                getCostOfSize;
                break;
            default:
                console.log("Invalid entry please try again.".red);
        };
        if(pizza === 'S' || pizza === 'M'|| pizza === 'XL' || pizza === 'XL'){
            pizza = 1;
            }
    }while(pizza !== 1);
    
//     let extraCheese = prompt ("Do you want extra cheese? (Y/N) ".yellow).toUpperCase();

//     // terinary operator option
//     total += extraCheese === "Y" ? 1 : 0;

//     let extraToppings = null;
//     do{
//         extraToppings = prompt ("Do you want any other toppings? (Y/N) ".zebra).toUpperCase();
//         if (extraToppings === "Y") {
//             let toppings = prompt ("Please select: mushroom (M), onion (O), green pepper (G), pepperoni (P), sausage (S), or bacon (B)? ".grey.bgWhite).toUpperCase();
            
//             switch (toppings) {
//             case  "M":
//                 total += 2;
//                 break;
//             case "O":
//                 total += 2;
//                 break;
//             case "G":
//                 total += 2; 
//                 break;   
//             case "P":
//                 total += 3;
//                 break;
//             case "S":
//                 total += 3;
//                 break;
//             case "B":
//                 total += 5;
//                 break;
//             };
//         }; 
//     }while (extraToppings === "Y");
    
//     another = prompt ("Would you like another pizza? (Y/N) ".grey.bgWhite).toUpperCase();
// } while (another === "Y");

// console.log (`Your total cost is $${total}.00`.rainbow.bgWhite);