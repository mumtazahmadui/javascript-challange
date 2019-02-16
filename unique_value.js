Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!

ar firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];


var temp = {};
var output = [];

firstArray.forEach(function (x) {
  if(secondArray.includes(x) && !output.includes(x)) {
     output.push(x);
  }
});
output;
//console.log(ab1)

// for(let i = 0; i<firstArray.length; i++) {
//   secondArray.filter(function(x) {
//     if(firstArray[i] === x) {
//       if(!temp.hasOwnProperty(firstArray[i])) {
//         temp[firstArray[i]] = 1;
//         output.push(firstArray[i])
//       }
//     }
//   })
// }

//output;
