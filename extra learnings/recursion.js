console.log("yo!");

/*
    FACTORIAL

    n! =    n * (n-1)!    if n >= 1
    n! =        1         if n = 0

*/

let list = [9,26,6,14,3,27,21,45,111,587];
let value = 27;

//Step 2. Create a function that will accept two parameters/arguments for an array and a value.

let linearSearch = (list,value) => {
    //Step 3. Inside the function create a loop through the entire array and check if the current item is equals to a value.
    for(let i=0; i < list.length; i++){
        if(list[i] === value)
        {
            return i;
        }
    }
    return ("There is no value given."); //false statement
}

//invoke the function in the console log
console.log(linearSearch(list,value)); //element 3 is in the index 


let items = ["yakult","cheese","soju","chocolate","chuckie","dishwashing liquid", "colgate", "toyo", "sardinas"];
let isFound = false;

items.forEach(function (itemValue, index){
    if(itemValue === "colgate")
    {
        console.log("Item Found: "+itemValue);
        isFound = true;
        return;
    }
});

if (!isFound){
    console.log("Item not found");
}