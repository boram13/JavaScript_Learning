const testObj = {
    name: 'Bora',
    surname: 'Menerja',
    age: 23,
    grades: ['Math', 'Algebra', 'TIK'],
    getName: function (name) { return name },
    isGraduaded: true,
    
}

const packageJsonContent = {
    "name": "node_first_project",
    "version": "1.0.0",
    "description": "My first real project on node.jd",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index.js",
      "first:exercise": "node variableExamples/firstExercise.js",
      "sumOfNumbers:function": "node functionsExamples/sumOfNumbers.js",
      "printName:function": "node functionsExamples/printName.js",
      "sumOfArray:function": "node functionsExamples/sumOfArray.js",
      "minElement:function": "node functionsExamples/minElement.js",
      "maxElement:function": "node functionsExamples/maxElement.js",
      "stringInclude:function": "node functionsExamples/stringInclude.js",
      "pushElement:function": "node functionsExamples/pushElement.js",
      "concat:function": "node functionsExamples/concat.js",
      "splice:function": "node functionsExamples/splice.js",
      "wordPalindrome:function": "node functionsExamples/wordPalindrome.js",
      "firstCapitalLetter:function": "node functionsExamples/firstCapitalLetter.js",
      "upperWithCycle:function": "node functionsExamples/upperWithCycle.js",
      "capitalLetter:function": "node functionsExamples/capitalLetter.js",
      "uppercaseIncluding:function": "node functionsExamples/uppercaseIncluding.js",
      "orderAlphabetically:function": "node arrayVectors/orderAlphabetically.js",
      "longestString:function": "node arrayVectors/longestString.js",
      "shortestString:function": "node arrayVectors/shortestString.js",
      "printEachElement:function": "node functionsExamples/printEachElement.js",
      "vowelCounting:function": "node arrayVectors/vowelCounting.js",
      "typeOfVariables:function": "node arrayVectors/typeOfVariables.js"
      
     
    },
    "author": "",
    "license": "ISC"
}

const testStr = 'long string'

const testNumber = 1000000

const testArray = ['1', '2', '3', '4']

module.exports = {
    firstObj: testObj,
    secondObj: packageJsonContent,
    firstStr: testStr,
    firstNr: testNumber,
    firstArr: testArray
}