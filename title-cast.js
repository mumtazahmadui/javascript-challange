const txt = "I'm little tea pot";

let newText = txt.toLowerCase().split(' ');
let result = newText.map((x)=>{
  return x.replace(x.charAt(0), x.charAt(0).toUpperCase());
})


console.log(result.join(' '));  //I'm Little Tea Pot
