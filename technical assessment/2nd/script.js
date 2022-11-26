console.log("hello world");



// // *CREATE A STUDENT LIST

// let studentList = [];

// function studentInput(name){
//     console.log(`${name} is added to the student's list`);
//     studentList.push(name);
// };

// studentInput("Jem");
// studentInput("Ralph");
// studentInput("Joey");
// studentInput("Jasper");
// studentInput("Nuestra");

// function studentCounter(){
//     console.log(`There are total number of ${studentList.length} students in the students' list`);
// }

// studentCounter(studentList);




// // *DISPLAY STUDENTS NAME

// function currentStudentList(){

//     studentList.forEach(function(student){

//         console.log(student);
//         return student
    
//     });

// }

// currentStudentList(studentList);






// // * VALIDATE IF JOE IS AN ENROLLEE

// let student = "Nuestra"
// let studentIn = studentList.includes(student);

// function studentChecker(student){

//     if(studentIn === true){
//         console.log(`${student} is enrolled`);
//     } else{
//         console.log(`${student} is not found on the students' list`)
//     }

// }

// studentChecker(student);






// // * STUDENTS SHOWING THEIR SECTION
// studentSection = [];

// function updateStudentSection(name, section){
//     studentSection.push(`${name} - ${section}`);
//     console.log(studentSection);
// }

// updateStudentSection("Jem", "Section A");
// updateStudentSection("Ralph", "Section A");
// updateStudentSection("Joey", "Section A");
// updateStudentSection("Jasper", "Section A");
// updateStudentSection("Nuestra", "Section A");





// // *STUDENTS THAT ARE REMOVED FROM THE LIST THEN THE REMAINING STUDENTS ARE DISPLAYED
// function dropStudent(){

//     studentList.splice(1,1);
//     console.log(studentList);
// }

// dropStudent();

let students = [];
function addStudent(name)
{
    students.push(name);
    console.log(`${name} is added to the student's list.`);
}
addStudent("John");
addStudent("Jane");
addStudent("Joe");

function countStudents(){
    return `There are total number of ${students.length}`
}
console.log(countStudents());
// console.log(students);

function printStudents(){
    students.sort();
    students.forEach(function (student){
        console.log(student);
    });
}
printStudents();

function findStudent(keyword){
    let match = students.filter(function (element){
        return element.toLowerCase().includes(keyword.toLowerCase())
    })

    // console.log(match);

    if (match.length == 1){
        console.log(`${match} is an enrollee`);
    }

    else if (match.length > 1) {
        console.log(`${match} are enrollees`);
    }
    else {
        console.log(`No student found with name ${match}`);
    }
}

findStudent("Joe");

let studentSection = [];
function addSection(section){
    studentSection = students.map (function (student){
        return `${student} - section ${section}`
    })
}

console.log(addSection("A"));
console.log(studentSection);

function removeStudent(name){
    let firstLetter = name.slice(0,1).toUpperCase();
    let remainingLetters = name.slice(1, name.length);
    let capitalizedName = firstLetter + remainingLetters;
    let studentIndex = students.indexOf(capitalizedName);

    if(studentIndex >= 0){
        students.splice(studentIndex, 1);
    }

    console.log(`${name} was removed from the student's list`);
}

removeStudent("Joe");
console.log(students);