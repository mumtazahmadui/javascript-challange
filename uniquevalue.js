const arr = [2,1,4,2,4,6,5,2];

let repetValue = duplicateValue(arr);  //[ 2, 4, 2, 4, 2 ]
let rm = removeDuplidate(repetValue); // [ 2, 4 ]
console.log(rm)

function duplicateValue(d) {
   return d.filter(a => d.indexOf(a) !== d.lastIndexOf(a));
}

function removeDuplidate(val) {
  let obj = [];
  for (let x in val) {
    if(obj.indexOf(val[x])===-1) {
      obj.push(val[x])
    }
  }
  return obj;
}
