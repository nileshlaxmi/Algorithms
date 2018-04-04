
function chunkArrayInGroups(arr, size) {
  var len = arr.length;
  var finalAr = [];
  for(var i=0; i<len; i++){
    var newAr = [];
    newAr.push(arr.splice(0, size));
    console.log(newAr + "\n");
    finalAr.push(newAr);
  }
  console.log(finalAr);
  // Break it up.
  return finalAr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
