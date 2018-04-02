//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  // You can do this!
  var curMax = 0;
  var newArr = [];
  for(var i =0; i<arr.length; i++){
    for(var j=0; j< arr[i].length; j++){
      if(arr[i][j] > curMax){
        curMax = arr[i][j];
      }
    }
  curMax = newArr.push(curMax);
  }
  console.log(newArr);
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 18, 26, 27], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
