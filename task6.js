const squareSumAverage = (numbers) => {
  let sumOfSquare = 0;

  for (const number of numbers) {
    const square = number * number;
    console.log(`square of ${number} is`, square);

    sumOfSquare = sumOfSquare + square;
    console.log(sumOfSquare);
  }
  return sumOfSquare / numbers.length;
};
const numbers = squareSumAverage([2, 3, 4]);
console.log(numbers);
