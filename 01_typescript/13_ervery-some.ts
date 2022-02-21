const numbers = [10, 20, 30, 40, 50];

// 모든 요소가 조건에 일치하면 true, 아니면 false
console.log(numbers.every((n) => n > 0)); // true
console.log(numbers.every((n) => n > 20)); // fasle

// 조건에 일치하는 요소 발견 즉시 true 리턴, 아니면 false
console.log(numbers.some((n) => n === 10)); // true
console.log(numbers.some((n) => n < 10)); // false
