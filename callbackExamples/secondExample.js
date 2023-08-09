const { firstCapitalLetter } = require('../functionsExamples/firstCapitalLetter')

const animals = ['dog', 'cat', 'mouse', 'fish']

function capitalizeEachElement(items, callback) {
    const results = []
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        results.push(callback(element))
    }
    return results
}

function doesntDoNothing(str) {
    return str
}

const capitalized = capitalizeEachElement(animals, doesntDoNothing)
console.log(capitalized)

const capitalized1 = capitalizeEachElement(animals, firstCapitalLetter)
console.log(capitalized1)