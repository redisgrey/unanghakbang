console.log("Yo");

// If Statement
// conditional branching statement
// condition is true, a group of statement is executed
// condition is false, statement is skipped.


// Syntax:
/*
 if(condition){

    statement 1
    statement 2

 }
*/


// if(20 <= 30){

//     console.log("No Id No Entry!");

// }

/*

let age = prompt("How old are you?");

function getAge(age){

    if (age <= 30){
        console.log("Can you be my girlfriend?");
    }

    return (age);

}

getAge(age);

*/

// If-else statement
// 2-way decision statement
// used to make decisions and execute command conditionally


/*

    If (condition){

        statement 1

    }else if (condition){

        statement 2

    }else{

        statement 3
    }

*/

// let myAge = 30;
// if(myAge == "30"){

//     alert('hello old man!');

// }else {

//     console.log('sanaol young!');

// }



/*
let heightCm = prompt("Gaano ka katangkad sa iyong paningin? I only accept height in cm unit.")

function getHeightCm(heightCm){

    if (heightCm <= 150){

        console.log("Did not pass the minimum height requirement. Come back again pag may itinangkad ka pa!")
    
    }else{
    
        console.log("Pass the minimum height requirement. Sanaol matangkad!")
    }
    
    return(heightCm);

}

getHeightCm(heightCm);


*/


/*

let price = prompt(`Price:`);

    if (price < 50){

        console.log(`affordable`);

    }else if(price <= 75){

        console.log(`ang mahal naman`);

    }else if (price <= 90){

        console.log(`magsara ka na lang ate`);
    
    }else {

        console.log(`nalimutan ko pala wallet ko bhie`);
    }

    */


/*

let typhoonIntensity = prompt("Kuya Kim, gaano kalakas ang parating na bagyo?");

    function getTyphoonIntensity(typhoonIntensity){

    if (typhoonIntensity <= 30){

        console.log("Not a typhoon");

    }else if(typhoonIntensity < 61){

        console.log("tropical depression is detected");

    } else if(typhoonIntensity = 61 && typhoonIntensity <= 88){

        console.log("tropical storm is detected");

    } else if(typhoonIntensity = 89 && typhoonIntensity <= 117){

        console.log("severe tropical storm is detected");

    }else{

        console.log("typhoon detected. magbalot ka na, liliparin ka ng bagyo.")

    }

    return(typhoonIntensity);

}

getTyphoonIntensity(typhoonIntensity);

*/



// SWITCH STATEMENT
// it performs different actions on different conditions
// compares the same expression to several different values


/*
    RULE OF THUMB

    YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING A LIST OF VALUES AGAINST A SINGLE VARIABLE

    SYNTAX:
    switch (expression){

        case condition1:
            statements
            break;
            // breaks out the switch block
            // stops the execution inside the switch block

        case condition2:
            statements
            break;

        default:
            // specifies the code to run if there is no match
            // like else statement
            // no break
            statement

    }
*/

/*

let day = prompt("Enter a number between 1 to 7:");

switch(day){

    case (day = "1"):
        console.log("Monday");
    break;

    case (day = "2"):
        console.log("Tuesday");
    break;

    case (day = "3"):
        console.log("Wednesday");
    break;

    case (day = "4"):
        console.log("Thursday");
    break;

    case (day = "5"):
        console.log("Friday");
    break;

    case (day = "6"):
        console.log("Saturday");
    break;

    case (day = "7"):
        console.log("Sunday");
    break;

    default:
        console.log("Pangit mo kabonding");

}

*/


/*


let color = prompt("Anong magandang kulay para sayo?");

function judgeColor(color){

    switch (color){

        case (color = "black"):
            console.log("Maganda nga yan!");
        break;
    
        case (color = "violet"):
            console.log("Nice one! Fave ko din yan!");
        break;
    
        case (color = "pink"):
            console.log("Same taste tayo sis!");
        break;
    
        default:
            console.log("Pangit naman!");
    
    }

    return(color);

}

judgeColor(color);

*/



let number = prompt("Enter the first number that comes to mind? yieee birthday ng jowa niya.");

function typeofNumber(number){

    switch(number){

        case (number%2 === 0):
            console.log("It is an even number!");
        break;

        case (number%2 != 0):
            console.log("It is an odd number!");
        break;

        default:
            console.log("sana okeh ka lang.");

    }

    return(number);

}

typeofNumber(number);



