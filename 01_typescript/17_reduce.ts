const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((result, number, index) => {
  return result + number;
}, 0);
console.log(sum); // 15

const average = numbers.reduce((result, number, index, { length }) => {
  const sum = result + number;

  if (index === length - 1) {
    return sum / length;
  }

  return sum;
}, 0);
console.log(average); // 3

const result = numbers.reduce((result, number) => {
  return [...result, number + 1];
}, [] as number[]);
console.log(result); // [ 2, 3, 4, 5, 6 ]

const result2 = numbers.reduce((result, number) => {
  if (number % 2 === 1) {
    return [...result, number * 2];
  }

  return result;
}, [] as number[]);
console.log(result2); // [ 2, 6, 10 ]
