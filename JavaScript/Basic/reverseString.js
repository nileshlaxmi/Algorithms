//Reverse a String
function reverseString(str) {
  array = str.split('');
  array.reverse();
  str = array.join('');
  console.log(str);
  return str;
}

reverseString("hello");
