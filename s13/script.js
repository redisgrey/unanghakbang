console.log('connected');


// JS OPERATORS -  symbols used to manipulate values or operands
// used to perform specific mathematical and logical computation in operands

// assignment operators - represents the equal symbol (=)

let a = 14;
a = 18;

let b = a;

console.log(b);
// in this example, using let can reassign the value of variable.


// arithmetic operators - mathematical operations on a numerical values/operands and returns a single numerical value


// addition (+)
console.log(20+30); 
// 50 - primitive data type

console.log("20"+"30");
// 2030 - string
// String Concatenation 
// concatenation - it links or combines two strings together


// subtraction (-)
console.log(20-10);
// 10 - number

console.log("20"-"10");
// 10 - type coercion  - automatic conversion of values from one data type to another

let val1 = 50;
let val2 = '30';
let diff = val1 - val2;

console.log(diff);
// 20 type coercion

console.log("twenty" - "ten");
// NaN - Not a Number


// division (/)
console.log(50/5);
// 10 primitive

console.log("50"/"5");
// 10 type coercion

console.log('fifty'/'five');
// NaN



// Modulus Division (modulo - % - remainder)
console.log(100%3);
// 1 remainder


// increment (++) and decrement (--)
// pag plus dadagdag, pag minus mababawas 
let c = 30;
console.log(++c);
// 31 - add one

console.log(c);
// 31 the original declared value changed due to increment

console.log(--c);
// 30 minus 1

console.log(c);
// 30 because of decrement








// if the operand comes last, print first before increment or decrement

console.log(c++);
// 30

console.log(c);
// 31

console.log(c--);
// 31

console.log(c);
// 30




// exercises
console.log(27+3);
// 30

let tom = 50;
let jerry = 38;
console.log(tom - jerry);
// 12


console.log(25 * (9/3));
// 75




// Compound Assignment Operator


// long method
// let j = 15;
// console.log(j+3);
// console.log(j);



// Additional Assignment Operator (+=)
let i = 15;
console.log(i += 3);
// 18 adds the number to the declared value

console.log(i);


// Subtraction Assignment Operator (-=)

console.log(i -= 10);





// Companion Operators
// compares two operands and returns a logical value (true or false)

// < - less than
// > - greater than


// Equality Operator (==) aka "Loose Equality"
// compares the same value regardless of data type because of coercion

console.log("Jan" == "Jen");


console.log(true == true);
// true


console.log(false == true);
// false

console.log(true==false);
// false

console.log(false==false);
// true

console.log(null==undefined);
// true

console.log('20'==20);
// true




// BINARY NUMBERS
// 1 = TRUE 0 = FALSE
console.log(true==1);
// true

console.log(true==2);
// false

console.log(false==0);
// true

console.log(false==1);
// false


console.log(4.00 == 4);
// true