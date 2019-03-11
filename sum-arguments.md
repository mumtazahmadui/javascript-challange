# Sum Arguments

### Step-1
##### First Approach

```javascript
console.log(add(1,2));
console.log(add(4)(2));

function add(num1, num2) {
  if(num1 && num2) {
    return num1 + num2
  } else {
    return function(num3) {
      return num1 + num3
    }
  }
}

Output 
======
3
6
```
