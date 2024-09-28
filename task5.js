const joinArray = (arr1, arr2) => [...arr1, ...arr2];
const marge = joinArray([5, 8, 5, 6], [5, 7, 9, 10]);
const maxNum = Math.max(...marge);
console.log(maxNum);
