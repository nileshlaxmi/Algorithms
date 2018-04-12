//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.

function sumAll(ar) {
  var sum = 0, i=0;
  if(ar[0] <= ar[1]){
    for(i=ar[0]; i<=ar[1]; i++){
      sum =sum + i;
    }
  }
  else{
    for(i=ar[1]; i<=ar[0]; i++){
      sum = sum + i;
    }

  }
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
