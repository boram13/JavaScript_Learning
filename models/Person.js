

class Person {

    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }

    getName() {
        return this.name

    }

    getAge() {
        return this.age
    }

    getCountry() {
        return this.country
    }

    getFullInfo() {
        return "person with name " + this.getName() + " ne moshen " + this.getAge() + " jeton ne " + this.getCountry()
    }

    getFullInfoInterpolates() {
        return  `person with name ${this.name} ne moshen ${this.age} jeton ne ${this.country}`
    }

    pritFunction(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
      }

}
module.exports = Person