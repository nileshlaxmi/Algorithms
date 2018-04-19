//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);

  for(var i=0; i<arr.length; i++){
    for(var j=0; j<args.length; j++){
      if(arr[i] == args[j]){
        delete arr[i];
      }
    }
  }
  console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
