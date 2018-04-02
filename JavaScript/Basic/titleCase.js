//Return the provided string with the first letter of each word capitalized. 
function titleCase(str) {
  str = str.toLowerCase();
  console.log(str);

  var ar = str.split(' ');
  console.log(ar);
  var nArr = [];

  for(var i=0; i< ar.length; i++){
  s = ar[i].toString();

  let title = s.charAt(0).toUpperCase();
  let nextpart = s.slice(1);

  nArr[i] = title+nextpart;
}
  console.log(nArr.join(' '));
  return nArr.join(' ');
};

titleCase("I'm a little tea pot");
