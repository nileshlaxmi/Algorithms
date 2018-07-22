const str = "Hello There!";
const newObj = {};

for (let i of str){
  console.log(i);
  console.log(!newObj[i]);
  if(!newObj[i]){
    newObj[i] = 1;
  }
  else {
    newObj[i]++;
  }
}

//console.log(newObj);
