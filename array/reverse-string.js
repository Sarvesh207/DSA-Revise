let s = ["h", "e", "l", "l", "o"];

function reverseString(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  console.log("Reversed String", str);
}

console.log(reverseString(s));
