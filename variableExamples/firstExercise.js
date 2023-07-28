
// first we create a const  array object
const student1Name = "Era";
const student1Surname = "Menerja";
const student1Age = 28;
const student1Courses = ["TIK", "English", "MAth"];
const student1Graduated = true;

const student1 ={ name:student1Name, surname:student1Surname, age:student1Age, courses:student1Courses, graduated:student1Graduated}

const student = [
{ 
    name: "Bora", surname: "Menerja", age: 23, courses: ["TIK", "English", "MAth"], graduated: true 
},
student1,
{

    name: "Ledio", surname: "Menerja", age: 18, courses: ["TIK", "English", "MAth"], graduated: false 
},
{
    name: "Armina", surname: "Suta", age: 7, courses: ["TIK", "English", "MAth"], graduated: false 
},
];

// afishoj studentet
 console.log(student[1].name)
 console.log(student1.name)
 console.log(student1Name)





