// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [],  
     splited = str.split(' ');
  
  for (let char of splited) 
    words.push(char[0].toUpperCase() + char.slice(1));
  
  return words.join(' ');
}


//second approach
const txt = "I'm little tea pot";

let newText = txt.toLowerCase().split(' ');
let result = newText.map((x)=>{
  return x.replace(x.charAt(0), x.charAt(0).toUpperCase());
})


console.log(result.join(' '));  //I'm Little Tea Pot
