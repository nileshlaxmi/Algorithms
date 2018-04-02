//Check if a string (first argument, str) ends with the given target string (second argument, target)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  if(target.length == 1){
    if(target === str.charAt(str.length-1)){
      console.log(true);
      return true;
    }
    else{
      console.log(false);
      return false;
    }
  }
  else{
    var n = str.lastIndexOf(target);
    console.log(n);

    var res = str.substring(n);

    if(n == -1){
      console.log(false);
      return false;
    }
    else {
      if(target == res){
        console.log(true);
        return true;
      }
      else{
        console.log(false);
        return false;
      }
    }
  }
}

confirmEnding("Connor", "n");
confirmEnding("Connor", "r");
confirmEnding("He has to give me a new name", "new");
confirmEnding("Open sesame", "same");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("Open sesame", "pen");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
