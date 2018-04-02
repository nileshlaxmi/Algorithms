//Factorialize a Number
function factorialize(num) {
  var fact=1;
  for (var i=1; i<=num; i++){
    fact = fact * i;
  }
  return fact;
  console.log(fact);
}

factorialize(5);
