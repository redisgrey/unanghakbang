console.log("Yo!");

/*
What is an ARRAY?
-ORDERED collection of values
-it is ORDERED because of the index number
*/

// BASIC STRUCTURE
// Elements - these are the values in a [ ] called "Array Literals"

// How to create Javascript Arrays?
// 1. Declaring and initializing an array
let array = [];

// 2. Using new keyword and then the array
let arr = [ ];

let months = ["Jan", "Feb", "Mar", "Apr", "May"];

/*
    How to access array elements?
    - via index
    -index starts at 0

    How to count the elements in the array?
    -using the .length property

*/

console.log(months[0]); 
//Jan

console.log(months[1]); 
//Feb

console.log(months); 
// all elements

console.log(months.length); 
//5




// ARRAY MANIPULATION

// OLD METHOD: Using the assignment operator (=)
let count = ["one", "two", "three", "four"];

console.log(count[4]); 
//undefined - we do not have an element in index 4

count[4] = "five";
// adding element in index 4

console.log(count[4]);
// five

console.log(count);
// five is included in the array



// MUTATOR METHOD: these are the methods that modifies the original array

// 1. Push Method
count.push("six");
// push method adds an element at the end of an array

console.log(count);
// six is already included in the array

// push method inside the function

function addElement(element){

    count.push(element);
    console.log(count);

}

addElement("seven");


// 2. Pop Method
// pop method removes an element in the end of an array

count.pop();
console.log(count);

// Pop method inside the function

function removeElement(){

    count.pop();
    console.log(count);

}

removeElement();


// 3. Unshift Method: adds an element at the start of an array

count.unshift("zero");
console.log(count);


// 4. Shift Method: removes the first element of an array

count.shift();
console.log(count);





// ACCESSOR METHOD
// Sort Method

let nums = [15, 32, 61, 130, 230, 13, 34];

nums.sort();
console.log(nums);
// sorts based on the first digit regardless of the value

nums.sort(
    
    function (a,b){
    
        // ascending order
        // return a-b;

        // descending order
        return b-a;
    }
);

console.log(nums);


// Reverse Method

nums.reverse();
console.log(nums);


// Splice Method
// returns an array containing deleted elements
// first parameter - where an index start omitting an element
// second parameter - number of elements to be omitted
// third parameter - elements to be added or inserted

console.log(count);

let newSplice = count.splice(2);
// removes elements starting on index 2
console.log(newSplice);
console.log(count);



// Slice Method - accessor 
// returns new array
// start - removes all element before the element specified by the index syntax
// syntax: slice(<start>, <end>)

let animals = ["dog", "cat", "hamster", "crocodile", "lovebird"];

console.log(animals);

let newSlice = animals.slice(2);
// deletes all elements before the specified index

console.log(newSlice);
console.log(animals);


let newSlice1 = animals.slice(1,2);

console.log(newSlice1);
// cat


// Concat Method
// combines/merges arrays

console.log(animals);
console.log(count);

let newConcat = animals.concat(count);
console.log(newConcat);
// combines the arrays


// Join method

let meal = ["Tapsilog", "Noodles", "Burger Steak"];

let newJoin = meal.join();
console.log(newJoin);

newJoin = meal.join("");
console.log(newJoin);

newJoin = meal.join("-");
console.log(newJoin);

newJoin = meal.join("  ");
console.log(newJoin);



// toString method

let elements = ["b", "a", "d", 8, 5, "e"];

console.log(elements);
console.log(typeof elements[3]);
// number
console.log(typeof elements[4]);
// number

let newString = elements.toString();
// toString converts data of an array to one new string

console.log(typeof newString);


// ARRAY ACCESSOR METHOD: methods that return a new value of representation
// indexOf()
// gives the index(number) of an element where it is first found

// lastIndexOf()
// gives the index number of an element where it is last found


let countries = ["US", "PH", "CAN", "TAI", "PH", "SG", "HK", "PH"];

let index = countries.indexOf("PH");
console.log(index);
// 1


let lastIndex = countries.lastIndexOf("PH");
console.log(lastIndex);
// 7



// ITERATORS - defines a sequence and potentially a return value upon its termination.

// forEach()
/*
    SYNTAX:
    forEach(function(){



    });


*/

let bigData = [

    {fn: "Joshua",
     ln: "Garcia"},

     {fn: "Dingdong",
      ln: "Dantes"},

      {fn: "Christopher",
       ln: "De Leon"}

];

let result = bigData.forEach(function(element){

    console.log(element);
    return element

});

console.log(result);
// undefined


// Q: How to create a copy of an array from original array?


let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

// Step 1. map() - iterates/copies each elements in an array and returns a new array with the same elements (or different values depending on the result of the function operation)
// doesnt change or modify the original array


let mapNewDays = days.map(

    function (day){
        return day;

    }

);

console.log(mapNewDays);


// Step 2. Create a copy of the new array using forEach()


let newDays = [];

console.log(newDays);


days.forEach(function (day){

    newDays.push(day);

});

console.log(newDays);

