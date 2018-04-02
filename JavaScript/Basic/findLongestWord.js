//Find the Longest Word in a String

function findLongestWord(str) {
  var ar = str.split(' ');
  var ln = [], nln = [];
  for(var i=0; i<ar.length; i++){
    ln.push(ar[i].length);
  }

  nln = ln.sort(function(a, b){
    return b - a;
  });
  return nln[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
