const array = [1, 2, 3, 4, 5];

const [one, two, ...others] = array;
console.log({ one, two, others }); // { one: 1, two: 2, others: [ 3, 4, 5 ] }

interface IShoes {
  name: string;
  size?: number;
  color?: string;
}

const shose: IShoes = {
  name: 'Style36',
  size: 240,
  color: 'red',
};

const { color, ...shoesNameAndSize } = shose;

const { size, ...shoesName } = shoesNameAndSize;

console.log({ shose }); // { shose: { name: 'Style36', size: 240, color: 'red' } }
console.log({ color, shoesNameAndSize }); // { color: 'red', shoesNameAndSize: { name: 'Style36', size: 240 } }
console.log({ size, shoesName }); // { size: 240, shoesName: { name: 'Style36' } }
