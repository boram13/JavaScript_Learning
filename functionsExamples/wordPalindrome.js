function wordPalindrome(str){

    let  x = str.length -1;

    for(let i = 0; i < str.length; i++){
       
        if (str[i] !== str[x - i])
        {
            return false;
        }
    }
    return true;
}
let inputFunction = wordPalindrome("abdbba")
console.log(inputFunction)