/*
Ceaser Cipher - One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*/

const cipher = (str) => {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let index, newIndex, ar = [], newAr = [];

  str = str.toUpperCase();
  ar = str.split("");

  for(let i=0; i<ar.length; i++){
      index = alphabets.indexOf(ar[i]);
      if(index === -1){
          newAr.push(ar[i]);
      }
      else{
          if(index <= 12){
              newIndex = index + 13;
              newAr.push(alphabets[newIndex]);
          }
          else{
              let value = 25 - index;
              newIndex = 12 - value;
              newAr.push(alphabets[newIndex]);
          }
      }
  }
  let newStr = newAr.join("");
  console.log(newStr);
}

cipher("mn oz");
cipher("SERR PBQR PNZC");
cipher("SERR CVMMN!");
cipher("SERR YBIR?");
cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
