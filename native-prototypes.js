String.prototype.show = function() {
  console.log('hello ' + this);
};
"Mumtaz".show(); //hello Mumtaz


// Array.prototype.show2 = function () {
//   let val = '';
//   this.forEach((x)=> {
//     val += `${x},`;
//   })
//   console.log(val);
// };
Array.prototype.show2 = function () {
  let val = '';
  this.forEach((x) => {
    if(x === this.length) {
      val += x;
    } else {
      val += `${x},`;
    }
  });
  console.log(val);
};

[1,2].show2(); //1,2
