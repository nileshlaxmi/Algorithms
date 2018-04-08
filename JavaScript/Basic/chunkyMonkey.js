
function chunkArrayInGroups(arr, size) {

  var newAr = [];
  var c=1;

  for(var i=0; i<arr.length; i+=size){
    var nAr = [];
    for(var j=i; j<size*c; j++){
      nAr = arr.slice(i, size*c);
    }
    newAr.push(nAr);
    c++;
    console.log(nAr);

  }
  console.log(newAr);
  // Break it up.
  return newAr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
