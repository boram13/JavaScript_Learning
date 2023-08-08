function getMin(items) {
    const sorted = items.sort()
    return sorted[0]
}

function getLowest(items, callback) {
    return callback(items)
}

const numbers = [1, 5, 7, 2, 4]
const lowest = getLowest(numbers, getMin)
console.log(lowest)