function palindrome(str)
{
    for(let i = 0; i < str.length; i++){

        let  x = str.length -1;
        if (str[i] !== str[x - i])
        {
            return false;
        }
    }return true;

}


function wordPalindrome(str){

     return palindrome(str)
    
}
let inputFunction = wordPalindrome("abdbba")
console.log(inputFunction)