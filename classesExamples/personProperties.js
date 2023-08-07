
//therras klasen qe kam krijuar si model Person, i bej import me  ane te require
//me get do mar formatin ng file me emrin person dhe do ti afishoj ne base te te dhenave qe ka ky file 

const Person = require('../models/Person')


const person1 = new Person("Bora Menerja", 23, "Albania")
console.log(person1);
 
const person2 = new Person('John Dee', 23, 'Albania');
console.log(person2);


console.log(person1.getFullInfo())
console.log(person1.getFullInfoInterpolates())