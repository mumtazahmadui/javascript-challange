/ --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const arr = [1,2,3,4,3,6];

let obj = {};
for(let i of arr) {
  if(!obj[i]) {
    obj[i] = 0
  }
  obj[i]++;
}

let char='';
let maxChar = 0;
for(let i in obj){
  if(obj[i] > maxChar) {
    maxChar = obj[i];
    char = i;
  }
}
console.log(obj);
console.log(char)


//second approach
function maxChar(str) {
  let obj = {},
    max = 0,
    maxChar = '';
  Array.from(str, l => {
    (!obj[l]) ? obj[l] = 1 : obj[l]++;
  });

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
