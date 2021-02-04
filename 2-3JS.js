// while loop
// let a = 0;
// while (a < 20) {
//     console.log (a);
//     a++;
// }
// if console log is after a++ would go show 1-19, where as written above it shows 0-19.

// for loop
// for (let a = 0; a < 20; a++) {
//     console.log (a);
// };

// do...while loops
// let a = 0;
// do {
//     console.log (a);
//     a++;
// } while (a < 20);


// using break to stop the loop at 5 even though it goes to 10
// let a = 0
// for (let a = 0; a < 10; a++) {
//     console.log (a);
//     if (a === 5) {
//         break;
//     }
// }

// using continue and console log afterwards skips 5
let a = 0
for (let a = 0; a < 10; a++) {
    if (a === 5) {
        continue;
    }
    console.log (a);
}