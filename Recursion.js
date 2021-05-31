const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

let result = 0;
let x;
let num = [1, 2, 3, 4, 5, 6];
const sum = (array) => {
  if (array.length !== 0) {
    x = array.pop();
    if (Number.isInteger(x)) result += x;
    else sum(x);
    sum(array);
  }
  return result;
};

console.log(sum(numbers));
