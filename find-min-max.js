const ary = [1,2,3,4];

function findMinMax(arr){
  let minNumber = Math.min.apply(null, arr);
  let maxNumber = Math.max.apply(null, arr);

  let arySum = arr.reduce((x,y)=> x+y);
  let minSum = arySum - minNumber;
  let maxSum = arySum - maxNumber;

  return {minSum: minSum, maxSum:maxSum};
}

console.log(findMinMax(ary))
//1 - 2+3+4 = 9
//2 - 1+3+4 = 8
