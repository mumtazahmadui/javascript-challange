var arrText = [
  [9, 2, 3, 4 ],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

arrText.map(function (val) {
  //console.log(val)
  sortedArray(val)
  console.log('AV : ', avg(val));
})

// sum of each row:

// arrText.map(function (x) {
//   //console.log(x);
//   var sum=0;
//   x.map(function(y) {
//     sum += y;
//   })
//   console.log(sum);
// })

// Some of Each Column:
// for(let i =0; i<arrText.length; i++){
//   //console.log('FiXXXXXX', arrText[i]);
//   var sum =0;
//   for(let y=0; y<arrText[i].length; y++) {
//     //console.log('xxx ', arrText[y][i])
//     sum += arrText[y][i]
//   }
//   console.log(sum)
// }

//some of each cross:
  // var sum =0;
  // for(let y=0; y<arrText.length; y++) {
  //   console.log('xxx ', arrText[y][y]);
  //   sum += arrText[y][y];
  // }
  // console.log(sum);


//var ssr = [7,2,6,0,3];

//Min and Max Value: 

function sortedArray (arr) {
  var min = arr[0];
  var max = arr[0];
  for(var i=0; i<arr.length-1; i++){
    //console.log(arr[i]);
    if(max < arr[i+1]) {
      max = arr[i+1]
    }
    if(min > arr[i +1]) {
      min = arr[i+1]
    }
  }
  console.log('Min Value : ', min)
  console.log('Max Value : ', max)
}
//sortedArray(ssr)

var ssr = [7,2,6,0,3];

//average
function avg (arg) {
  var sum = 0;
  var dev = arg.length;
  for (var otp of arg) {
    sum = otp + sum
  }
  return sum = sum/dev;
}
//console.log(avg(ssr))


