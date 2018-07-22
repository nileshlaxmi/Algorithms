const maxChar = (str) => {
  const charMap = {};
  let max = 0, maxChar = "";

  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  console.log(maxChar);
}

maxChar("aabbccccddegfejdl");
