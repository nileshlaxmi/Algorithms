//Ceaser Cipher - One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) { // LBH QVQ VG!
  //var ar = str.split("");
  var newAr = [];
  //console.log(ar);
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) == " "){
      newAr[i] = " ";
      console.log(true);
    }
    else{
      newAr[i] = str.charCodeAt(i) + 13;
    }
    //newAr[i] = str.charCodeAt(i) + 13;
    //console.log(n);
  }

  var finalAr = [];
  for(i=0; i<newAr.length; i++){
    finalAr[i] = String.fromCharCode(newAr[i]);
  }

  console.log(newAr);
  console.log(finalAr);
  return str;
}

// Change the inputs below to test
rot13("SE RR");
