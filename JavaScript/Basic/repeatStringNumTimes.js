//Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  // repeat after me

  var newStr = "";
  for(var i=1; i<=num ; i++){
    newStr = newStr + str;
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes("abc", 3);
