const Student = require('../models/Student')

const students = [

    new Student("Bora", "Menerja", 23, ['Tik', 'Math'], false), // krijuam nje array me 5 studenta
    new Student("John", "Dee",     23, ['Tik', 'Math'],  true),
    new Student("Era", "Dee", 23, ['Tik', 'Math'], false),
    new Student("Ian", "Dee", 24, ['Tik', 'Math'], true),
    new Student("Nolan", "Dee", 23, ['Tik', 'Math'], false)
]

function getFullNamesFromStudents(elements) {

    let fullNames = [];

    elements.forEach((element) => {

            fullNames.push(element.getFullName())
        });
        return fullNames;
}
let inputNames = getFullNamesFromStudents(students)
console.log(inputNames)

  
  