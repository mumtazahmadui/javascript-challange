/ --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {},
    max = 0,
    maxChar = '';
  Array.from(str, l => {
    (!obj[l]) ? obj[l] = 1 : obj[l]++;
  });

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
