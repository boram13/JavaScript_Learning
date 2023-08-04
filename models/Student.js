class Student {
    constructor(name, surname, age, grades, isGraduated) {
        this.name = name
        this.surname = surname
        this.age = age
        this.grades = grades
        this.isGraduated = isGraduated
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    getFullName() {
        return this.name + " " + this.surname
    }

    getAge() {
        return this.age
    }

    getGrades() {
        return this.grades
    }

    getIsGraduaded() {
        return this.isGraduated
    }

    setGrade(grade) {
        // check if grade already exists
        this.grades.push(grade)
    }

    changeGraduationStatus(isGraduaded) {
        this.isGraduated = isGraduaded
    }
}

module.exports = Student
console.log(Student)
