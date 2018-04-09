//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

  var first = arr[0].toLowerCase(), sec = arr[1].toLowerCase();
  var fLength = first.length, sLength = sec.length;
  var fArr = [], sArr = [], i, newAr = [];
  if(fLength >= sLength){
    i=0;
    while(i < fLength){
      fArr.push(first.substr(i,1));
      sArr.push(sec.substr(i,1));
      i++;
    }
    fArr = fArr.filter(Boolean);
    sArr = sArr.filter(Boolean);
    console.log(fArr);
    console.log(sArr);
    for(var j=0; j<fArr.length; j++){
      newAr.push(sArr.indexOf(fArr[j]));
    }
    console.log(newAr);
    for(var j=0; j<newAr.length; j++){
      if(newAr.includes(-1)){
        console.log(false);
        return false;
      }
      else{
        console.log(true);
        return true;
      }
    }

  }
  else{
    i=0;
    while(i < sLength){
      fArr.push(first.substr(i,1));
      sArr.push(sec.substr(i,1));
      i++;
    }
    fArr = fArr.filter(Boolean);
    sArr = sArr.filter(Boolean);
    console.log(fArr);
    console.log(sArr);

    for(var j=0; j<sArr.length; j++){
      newAr.push(sArr.indexOf(fArr[j]));
    }
    console.log(newAr);
    for(var j=0; j<newAr.length; j++){
      if(newAr.includes(-1)){
        console.log(false);
        return false;
      }
      else{
        console.log(true);
        return true;
      }
    }
  }




}

mutation(["hello", "Hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
