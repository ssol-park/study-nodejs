const array = [1, 2];
const [a, b, c = 3] = array;

console.log({ a, b, c }); // { a: 1, b: 2, c: 3 }

let [d, e] = array;

console.log({ d, e }); // { d: 1, e: 2 }

[e, d] = [d, e];

console.log({ d, e }); // { d: 2, e: 1 }

const object = { f: 4, g: undefined, h: 6 };
const { f, g = 5, h: i } = object;

console.log({ f, g, i }); // { f: 4, g: 5, i: 6 }

const array2 = [3, 4];
