console.log('Yo!');

// IF ELSE STATEMENTS


/*
//Hour
// if hour is between 6am and 12pm: Good Morning!
//if hour is between 12pm and 6pm(18:00): Good Afternoon!
//Otherwise: Good Evening!
*/

let hour = 20;

if (hour >= 6 && hour < 12){

    console.log("Good Morning!");

}else if (hour >= 12 && hour < 18){

    console.log("Good afternoon!");

}else{

    console.log("Good Evening!");

}






// SWITCH STATEMENTS

/*
Alarm Clock
//Mon         - 7AM
//Tue - Thurs - 4AM
//Fri         - 9AM
//Sat - Sun   - 8AM
*/

/*
let day = "Sunday";

switch(day){
    case (day = "Monday"):

        console.log("Wake up at 7AM!");
        break;

    case (day = "Tuesday"):

        console.log("Wake up at 4AM!");
        break;

    case (day = "Wednesday"):

        console.log("Wake up at 4AM!");
        break;

    case (day = "Thursday"):

        console.log("Wake up at 4AM!");
        break;

    case (day = "Friday"):
        
        console.log("Wake up at 9AM!");
        break;

    case (day = "Saturday"):

        console.log("Wake up at 8AM!");
        break;

    case (day = "Sunday"):

        console.log("Wake up at 8AM!");
        break;
    
}
*/

let day = "Holiday";

switch(day){
    case (day = "Monday"):

        console.log("Wake up at 7AM!");
        break;

    case (day = "Tuesday"):
    case (day = "Wednesday"):
    case (day = "Thursday"):

        console.log("Wake up at 4AM!");
        break;

    case (day = "Friday"):
        
        console.log("Wake up at 9AM!");
        break;

    case (day = "Saturday"):
    case (day = "Sunday"):

        console.log("Wake up at 8AM!");
        break;

    default:
        
        console.log("Wake up whenever you want!");
    
}

