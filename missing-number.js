// missing in sequence only 1 value
// formula (n+1) * (n+2) / 2 - total value
const a = [1,3,4,2,6]; //1 missing
const b = a.length;

const sum = a.reduce((a,b) => a+b);
let missing = (b+1) * (b+2) / 2 - sum
console.log(missing)
