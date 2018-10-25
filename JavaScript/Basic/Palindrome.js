//Check for Palindromes

function palindrome(str) {
  var originalStr = str;
  str = str
    .replace(/\W/gi, '')
    .replace(/\s/gi, '')
    .replace(/[_]/gi, '');
  str = str.toLowerCase();
  var array = str.split('');
  array.reverse();
  var newStr = array.join('');

  if(str === newStr){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false;
  }
}

palindrome("race car");
