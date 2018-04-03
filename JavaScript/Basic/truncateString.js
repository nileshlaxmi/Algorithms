

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
  if(len > num && num > 3){
    var newStr = str.slice(0, (num-3)).concat("...");
    console.log(newStr);
    return newStr;
  }
  else if(num <= 3){
    var finStr = str.slice(0, num).concat("...");
    console.log(finStr);
    return finStr;
  }
  else{
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
