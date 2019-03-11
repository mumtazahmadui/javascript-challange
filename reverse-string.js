var str = 'Wel@come !';
// var rev = str.replace(/[a-z]+/gi, function(s){
//     return s.split('').reverse().join('')
//   });

// console.log(rev); 
let out = [...str].reduce((accum, current) => current + accum);
console.log(out)


//another appr.: 

  const reverseString = (number) => {
    let newNumber = []; 
    number = number.toString(); 
    for (let i = 1; i < number.length; i++) {
      newNumber.unshift(number[i]); 
    }
    if (number[0] === "-") {
      newNumber.unshift(number[0]);
    } else {
      newNumber.push(number[0]); 
    }
    newNumber = parseFloat(newNumber.join(''));
    if (newNumber > 2147483647 || newNumber < -2147483647) {
        return 0
    }
    return newNumber;
  };
  reverseString(8798)
