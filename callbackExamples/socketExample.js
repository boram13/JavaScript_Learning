var allUserData = [];
// generic logStuff function that prints to console​
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}
//A function that takes two parameters, the last one a callback function​
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);
}
//////////////////////////// ushtrim tjeter

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const filterPositive = (x) => {
    return x >= 0
}

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, filterPositive);

console.log(posNumbers)
// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
////////////////////////////ushtrim tjeter 

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    console.log('Finished my homework');
  })
////////////////////////// ushtrim tjeter 

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    setTimeout(function(){
        console.log(`Finished my ${subject} homework.`);
        callback();
    }, 500); 
} // 500 means it is executed for 500 miliseconds





























