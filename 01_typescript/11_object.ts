interface IPerson {
  name: string;
  age: number;
}

const person = {
  name: 'Sora',
  age: 28,
};

console.log(person); // { name: 'Sora', age: 28 }
console.log(person.name); // Sora
console.log(person.age); // 28

console.log('--------------------------');

console.log(Object.entries(person)); // [ [ 'name', 'Sora' ], [ 'age', 28 ] ]
console.log(Object.keys(person)); // [ 'name', 'age' ]
console.log(Object.values(person)); // [ 'Sora', 28 ]
