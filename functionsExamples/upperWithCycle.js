
//ushtirm i gatshem nga stackoverflow

function upperWithCycle(str) {
    str = str.split(' ');
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      result += str[i].substring(0, 1).toUpperCase() + str[i].substring(1).toLowerCase();
    }
    return result;
  }
  
  console.log(upperWithCycle('hello everyone my name is Andrew, how are you doing?'))