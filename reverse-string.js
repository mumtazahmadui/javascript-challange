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





//
'use strict';

// 1. Reverse a string. 'Hello' -> 'olleH'
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));

// 2. Change all small letters to big and vise versa . 'Hey' -> 'hEY'
function reverseCaps(str) {
  let result = '';

  for (const w of str) {
    result += w === w.toLocaleLowerCase() ? w.toLocaleUpperCase() : w.toLocaleLowerCase();
  }

  return result;
}

console.log(reverseCaps('Hey'));

// 3. Return count of each letter in string. 'Book' -> '1B2o1k'
function countLetters(str) {
  const obj = {};
  let result = '';

  for (const letter of str) {
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (const x in obj) {
    if ( obj.hasOwnProperty(x) ) {
      result += obj[x] + x;
    }
  }

  return result;
}

console.log(countLetters('Book'));

// 4. Remove all numbers in String.  'H4e6 y5' -> 'He y'
function removeNumbers(str) {
  return str.replace(/\d/g, '');
}

console.log(removeNumbers('H4e6 y5'));

// 5. Change whitespaces with single comma. 'H4  e6 y5' -> 'H4,e6,y5'
function changeWhitespaces(str, separator) {
  return str.replace(/\s+/g, separator);
}

console.log(changeWhitespaces('H4  e6 y5', ','));

// 6. Find count of word 'he' in String. 'hello, he is bad guy.' -> '1'
function getCount(str, searchValue) {
  const patt = new RegExp('\\b' + searchValue + '\\b', 'gi');

  return str.match(patt).length;
}

console.log(getCount('hello, he is bad guy.', 'he'));

// 7. Reverse every second word in String. 'Hey it is me'-> 'Hey ti is em'
function reverseSecondWord(str) {
  const words = str.split(' ');
  let   result = [];

  result = words.map( (word, i) => {
    return i % 2 ? reverseString(word) : word;
  });

  return result.join(' ');
}

console.log(reverseSecondWord('Hey it is me'));
