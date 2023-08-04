const Student = require('../models/Student')

const student = new Student("Bora", "Menerja", 23, ['Tik', 'Math'], false)
console.log(student)
console.log("---------------------")
console.log("studend: '" + student.getFullName() + "' has the following grades: " + student.getGrades())
console.log("Adding another grade to student---------------------")
student.setGrade('Physics')
console.log("studend: '" + student.getFullName() + "' now has the following grades: " + student.getGrades())
console.log("---------------------")

console.log("---------------------")
console.log("Student now has enough credits to be graduated")
student.changeGraduationStatus(true)
console.log("Gongrats, studend: '" + student.getFullName() + "' has now the graduation status: " + student.getIsGraduaded())
console.log("---------------------")
console.log(student)


// krijo 1 file tjeter ku do ndertosh 1 funksion qe krijon 1 array me shume(5) studenta
// funksioni gjithashtu do afishoj dinamikisht full name-in e secilit student
// funksioni gjithashtu do afishoj listen unike te grades qe kane studentet ne teresi