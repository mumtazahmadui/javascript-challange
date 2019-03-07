```
Removing duplicates of an array and returning an array of only unique elements
```

// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}
// second app:

const arr = [1,2,3,2,1,3,5,4,2];
var obj = arr.reduce(function (x, y){
  if(!x[y]) {
    x[y] = 0;
  }
  x[y]++;
  return x;
},{})
console.log(Object.keys(obj))
