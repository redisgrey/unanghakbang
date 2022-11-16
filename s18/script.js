console.log("yo!");

const xy = {
    firstGrading: 95,
    subject: "English",
    teachers: ["Jelly", "Jem", "Joey"],
    isStudent: true,
    school: {
        city: "Pangasinan",
        country: "Philippines"
    },
    classmates: [
        {
        name: "Dahl",
        batch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name: "Jhyx",
            batch: "1"
        }

    ],

    description: function(){
        return `${this.subject}: ${this.firstGrading}`
    }

}

// ACCESSING PROPERTIES
// DOT NOTATION AND BRACKET

console.log(xy.firstGrading);
// 95

console.log(xy.subject);
// English

console.log(xy[`isStudent`]);
// true

console.log(xy[`teachers`]);
// array of teachers

console.log(xy.teachers);
// array of teachers

console.log(xy.teachers[1]);
// Jem

console.log(xy.school);
// array of school address

console.log(xy.school.city);
// Pangasinan

console.log(xy.school[`city`]);
// Pangasinan

console.log(xy[`school`][`city`]);
// Pangasinan

// ACCESS SCHOOL COUNTRY
console.log(xy[`school`][`country`]);
// Philippines


// ACCESS CLASSMATES
console.log(xy[`classmates`][`1`]);
// John Paul 5

console.log(xy[`classmates`][`1`][`batch`]);
// 5

// ACCESS FUNCTION IN THE OBJECT
console.log(xy.description());


// ADD PROPERTY
xy.semester = "first";
console.log(xy);

// DELETE PROPERTY
delete xy.semester;

console.log(xy);


const studentGrades = [
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8
    },
        
    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9
    },

    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6
    },

    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },

    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8
    }


]

// ASSIGNMENT: Compute the student average by accessing the declared objects

// CLUE: We can use to compute the average manually or using for loop

// MANUAL COMPUTATION OF AVERAGE 
