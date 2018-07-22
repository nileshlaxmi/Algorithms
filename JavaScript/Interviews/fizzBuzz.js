//FizzBuzz

function fizzBuzz(n){
  let i=1;
  for(i=1; i<=n; i++){
    if(i%3 == 0 && i%5 != 0 && i%15 != 0){
      console.log("Fizz\t");
    }
    else if(i%5 == 0 && i%3 != 0 && i%15 != 0){
      console.log("Buzz\t");
    }
    else if(i%15 == 0){
      console.log("FizzBuzz\t");
    }
    else{
      console.log(i+"\t");
    }
  }
}

fizzBuzz(30);
