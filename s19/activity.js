// ACTIVITY

// *My Class Based Object Blueprint
class dataWeight {
    constructor (name, kilograms){
        this.name = name;
        this.kilograms = kilograms;
        this.pounds = parseFloat(kilograms * 2.20462).toFixed(2);
    }
}


// *Examples of Data
const weightJelly = new dataWeight ("Jelly", 59.87);

const weightJava = new dataWeight ("Java", 47);

const weightPython = new dataWeight ("Python", 64);


// *My Function for logging the weight in pounds
function viewWeightData(variable){

    console.log(`${variable.name}'s weight in lbs is ${variable.pounds}`);

}

// *It works! :D
viewWeightData(weightJelly);
viewWeightData(weightJava);
viewWeightData(weightPython);