// const reverseString = (str) => {
//     let newStr = "";
//     for(let i=str.length-1; i>=0; i--){
//       newStr=newStr+str[i];
//     }
//     console.log(newStr);
//     console.log(str);
// }

function reverseString(str){
    if(str === "")
        return "";
    else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("hello"));
console.log(reverseString("apple"));
