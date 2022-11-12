console.log("Yo!");

// NESTED IFS
// An If statement that is the target of another if or else


// let userInput = prompt("Enter your age:");

// function eligibility (age){
    
//     if (age < 18){

//         return ("minor ka pa, child labor yan if ever");

//     }else{

//         if (age >= 18 && age <= 60){

//             return ("matanda ka na");

//         }
//     }
// }

// console.log(eligibility(userInput));

/*


Create a JavaScript code that will determine if the input type is even or odd.

MAIN GOAL:
Perform a Nested If for this scenario.
Enclose inside the function.
When a user input a word, it will display “Unexpected Input”
When a user inputs none, it will display “Please input inside the box”.
When a user inputs a valid number, it will display even or odd.


*/


// function oddEven(num){
//     if(isNaN (num) || typeof parseInt (num) !== "number"){
//         //isNan - determines whether a values is NaN (not a number) or a number
//         return `Unexpected Input`;
//     }

//     else if (num === '') {
//         return "Please input inside the box";
//     }

//     else {
//         if (num % 2 == 0)
//         {
//             return ("Even Number");
//         }
//         else {
//             return ("Odd Number");
//         }
//     }
// }

// let userInput = prompt ("Give Me a Number");
// console.log(oddEven(userInput));









// NESTED LOOPS
// A loop that is placed to another loop

/*
    SYNTAX

for (initialization; condition; increment/decrement){

    //create an inner loop
    for (init; cond; incr/decr){

        //statement of inner loop

    }

    //statement of an outer loop

}


*/

/*
for (let i = 0; i <= 2; i++){

    console.log("-Outer Loop");

    for (let j = 0; j <= 3; j++){

        console.log("---Inner Loop");

    }

}
*/


// USING WHILE LOOP



// let i = 0;
// while (i <= 2){

//     console.log("-outer loop");
//     i++;

//     let j = 0;
//     while (j <=3){

//         console.log("---inner loop");
//         j++;
//     }

// }


// NESTED LOOPS IN AN ARRAY

// function multiplyNumbers(arr){

//     let product = 1;
//     // create an outer loop
//     for (let k = 0; k < arr.length; k++){

//         for (let l = 0; l < arr[k].length; l++){

//             // create statement in inner loop
//             product *= arr[k][l];

//         }

//     }
//     console.log(product);
//     return(product);

// }


// multiplyNumbers([

//     [1,2],
//     [3,4],
//     [5,6,7]

// ])


// let chismosa = ["Karen", "Marites", "Marisol"];

// for (let i = 0; i < chismosa.length; i++){

//     console.log("Ako ay si ${chismosa}");

//     for(let j = 0; j < chismosa[i].length; j++){
    
//         console.log("Spells as ${[i][j]}");
//     }
// }
