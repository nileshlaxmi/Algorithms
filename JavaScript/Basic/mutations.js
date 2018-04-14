//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
  var first = arr[0].toLowerCase();
  var sec = arr[1].toLowerCase();

  for(var i=0; i<sec.length; i++){
    if(first.indexOf(sec[i]) === -1){
		console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

mutation(["hello", "hey"]);


mutation(["hello", "Hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
