// command for prompt
const prompt = require('prompt-sync')();
// for colors
var colors = require('colors'); 


// const firstName = prompt ("What is your first name? ");

// // console.log (`Hello ${firstName}!`);

// const lastName = prompt ("What is your last name? ");

// console.log (firstName + " " + lastName);
// console.log (`Hello ${firstName} ${lastName}`);

// const user = {
//     firstName: "Maggie",
//     lastName: "Oudsema",
//     age: 34,
//     pet1: { 
//         petName: "Basil",
//         type: "dog",
//     },
//     pet2: {
//         petName: "Lennon",
//         type: "gecko",
//     },
//     pet3: {
//         petName: "Taboo",
//         type: "fish",
//     }
// };

// console.log (user)

// need line one uncommented for this block

// const eMail = prompt ("Email LogIn ");
// const password = prompt ("Password? ")

// if (eMail === 'maggieoudsema@gmail.com' && password === 'Password!') {
//     console.log ("Access granted")
// } else {
//     console.log ("Try again...")
// }

// switch statements

let pizza = null; 
let extraCheese = null; 
let extraToppings = null;
let another = null;
let toppings = null;
let total = 0;
// const taxes = 0.06;

do {
    do {
        pizza = prompt ("What size pizza do you want? (S, M, L, XL) ".green).toUpperCase();
        switch (pizza) {
            case  "S":
                total += 5;
                break;
            case "M":
                total += 6;
                break;
            case "L":
                total += 7;
                break;
            case "XL":
                total += 8;
                break;
            default:
                console.log("Invalid entry please try again.".red);
        };
        if(pizza === 'S' || pizza === 'M'|| pizza === 'XL' || pizza === 'XL'){
            pizza = 1;
            }
    }while(pizza !== 1);
    
    extraCheese = prompt ("Do you want extra cheese? (Y/N) ".yellow).toUpperCase();

    // terinary operator option
    total += extraCheese === "Y" ? 1 : 0;

    do{
        extraToppings = prompt ("Do you want any other toppings? (Y/N) ".america).toUpperCase();
        if (extraToppings === "Y") {
            toppings = prompt ("Please select: mushroom (M), onion (O), green pepper (G), pepperoni (P), sausage (S), or bacon (B)? ".grey.bgWhite).toUpperCase();
            
            switch (toppings) {
            case  "M":
                total += 2;
                break;
            case "O":
                total += 2;
                break;
            case "G":
                total += 2; 
                break;   
            case "P":
                total += 3;
                break;
            case "S":
                total += 3;
                break;
            case "B":
                total += 5;
                break;
            };
        }; 
    }while (extraToppings === "Y");
    
    another = prompt ("Would you like another pizza? (Y/N) ".grey.bgWhite).toUpperCase();
} while (another === "Y");

console.log (`Your total cost is $${total}.00`.rainbow.bgWhite);


// if/else statement
// if (extraCheese === "Y") {
//     total = total+1
// } else {
//     total = total+0
// };