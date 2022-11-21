console.log("hello world");



// *CREATE A STUDENT LIST

let studentList = [];

function studentInput(name){
    console.log(`${name} is added to the student's list`);
    studentList.push(name);
};

studentInput("Jem");
studentInput("Ralph");
studentInput("Joey");
studentInput("Jasper");
studentInput("Nuestra");

function studentCounter(){
    console.log(`There are total number of ${studentList.length} students in the students' list`);
}

studentCounter(studentList);




// *DISPLAY STUDENTS NAME

function currentStudentList(){

    studentList.forEach(function(student){

        console.log(student);
        return student
    
    });

}

currentStudentList(studentList);






// * VALIDATE IF JOE IS AN ENROLLEE

let student = "Nuestra"
let studentIn = studentList.includes(student);

function studentChecker(student){

    if(studentIn === true){
        console.log(`${student} is enrolled`);
    } else{
        console.log(`${student} is not found on the students' list`)
    }

}

studentChecker(student);






// * STUDENTS SHOWING THEIR SECTION
studentSection = [];

function updateStudentSection(name, section){
    studentSection.push(`${name} - ${section}`);
    console.log(studentSection);
}

updateStudentSection("Jem", "Section A");
updateStudentSection("Ralph", "Section A");
updateStudentSection("Joey", "Section A");
updateStudentSection("Jasper", "Section A");
updateStudentSection("Nuestra", "Section A");





// *STUDENTS THAT ARE REMOVED FROM THE LIST THEN THE REMAINING STUDENTS ARE DISPLAYED
function dropStudent(){

    studentList.splice(1,1);
    console.log(studentList);
}

dropStudent();