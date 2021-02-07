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


let total = 0
let pizza = null;
let stop = false;
// // let another = null;

do {
    // size of pizza function and prompt
    function getCostOfSize (size) {
        subtotal = size;
        console.log (`*****Your current subtotal is ${subtotal}.00*****`.green);
    };

    do {
        pizza = prompt ('What size pizza do you want (S, M, L, or XL?) ' ).toUpperCase();
        switch (pizza) {
            case 'S':
                getCostOfSize (5);
                stop = true;
                break;
            case 'M':
                getCostOfSize (6);
                stop = true;
                break;
            case 'L':
                getCostOfSize (7);
                stop = true;
                break;
            case 'XL':
                getCostOfSize (8);
                stop = true; 
                break;
            default:
                console.log('Invalid entry please try again. (HINT: only enter S, M, L or XL.) '.red);
        };
    } while (!stop);

    // extra cheese function and prompt
    function getCostOfCheese (cheese){
        subtotal += cheese;
        console.log (`*****Your current subtotal is ${subtotal}.00*****`.green); 
    };

    let extraCheese = null;    
    do {
        extraCheese = prompt ('Do you want extra cheese for $1 more? (Y/N) ').toUpperCase();
        switch (extraCheese) {
            case 'Y':
                getCostOfCheese (1);
                stop = true;
                break;
            case 'N':
                getCostOfCheese (0);
                stop = true;
                break;
            default:
                console.log ('Invalid entry please try again. (HINT: only enter Y or N.)'.red);
                stop = false;
        };
    } while (!stop);

    // extra toppings function and prompt
    function getCostOfToppings (toppings) {
        subtotal += toppings;
        console.log (`*****Your current subtotal is ${subtotal}.00*****`.green);
    }

    let extraToppings = null;
    do {
        extraToppings = prompt ("Do you want any other toppings? (Y/N) ").toUpperCase();
        if (extraToppings === 'Y') {
            toppings = prompt ('Please select: Mushroom: $2 (M), Onion: $2 (O), Green Pepper: $2 (GP), Pepperoni: $3 (P), Sausage: $3 (S), or Bacon: $5 (B). ').toUpperCase();
            switch (toppings) {
                case 'M':
                    getCostOfToppings (2);
                    break;
                case 'O':
                    getCostOfToppings (2);
                    break;
                case 'GP':
                    getCostOfToppings (2);
                    break;
                case 'P':
                    getCostOfToppings (3);
                    break;
                case 'S':
                    getCostOfToppings (3);
                    break;
                case 'B':
                    getCostOfToppings (5);
                    break;
                default:
                    console.log('Invalid entry please try again. Hint: use what is in the M, O, GP, P, S or B.'.red)
            };
        };
    }while (extraToppings === 'Y');
    
    console.log (`*****Your subtotal for this pizza is ${subtotal}.00*****`.green)
    another = prompt ('Would you like another pizza? (Y/N) ').toUpperCase();
} while (another === 'Y');

// function taxes(subtotal, stateTaxes=0.06) {
//     return total = subtotal + (subtotal * stateTaxes);
// }

// taxes (subtotal, 0.06);
// console.log (`*****Your total for this pizza is ${total.toFixed(2)}*****`.green);