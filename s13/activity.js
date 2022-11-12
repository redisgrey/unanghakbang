// Assignment and Activity: JS Operators

/*
Essay Part:

1.What is the difference between a comparison operator and an assignment operator?
--- An assignment operator only assign the value of a variable and it only uses the symbol of equal sign (=).
--- A comparison operator compares two operands and returns a logical value - either true or false.

2.What is a Boolean? What does it represent?
--- A boolean is a primitive data type which is represented by true or false

3.How is the += operator different than + operator?
--- Using an example:

//USING ONLY THE + OPERATOR
    let k = 30;
    console.log(k + 8); //38
    console.log(k); //30
--- using only the + operator will add the given value to the variable but will not change the original assigned value to the variable.


//USING THE += OPERATOR
    let k = 30;
    console.log(k += 8); //38
    console.log(k); //38
--- using the += operator will add the given value to the variable and because of the = operator, the sum will be the new value assigned to the original value of the variable.




Code Part

1.Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. Change one of their values by using the +=, -=, *=, or /= operator. Then, compare their values again.

2.Try out the <= and >= operators.

3.Try to use the !== operator.


1.
let barbie = 39;
let ken = 46;

console.log(barbie <= ken); //true
console.log (barbie += 10); //49
console.log(barbie <= ken); //false


2.
console.log(barbie <= ken); //false
console.log(barbie >= ken); //true


3.
console.log(barbie !== ken); //true
*/