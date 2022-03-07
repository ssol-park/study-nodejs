const array = [1, 2];
const array2 = [...array, 3];
const array3 = [...array, ...array2];

console.log({ array, array2, array3 }); // { array: [ 1, 2 ], array2: [ 1, 2, 3 ], array3: [ 1, 2, 1, 2, 3 ] }

interface IShoes {
  name: string;
  size?: number;
  color?: string;
}
const shoes: IShoes = { name: 'Style36' };
const updatedShoesSize: IShoes = { ...shoes, size: 240 };
const updatedShoesColor1: IShoes = { ...updatedShoesSize, color: 'blue' };
const updatedShoesColor2: IShoes = { ...updatedShoesSize, color: 'red' };

console.log({ shoes, updatedShoesSize });
console.log({ blueColor: updatedShoesColor1, redColor: updatedShoesColor2 });
// {
//   shoes: { name: 'Style36' },
//   updatedShoesSize: { name: 'Style36', size: 240 }
// }
// {
//   blueColor: { name: 'Style36', size: 240, color: 'blue' },
//   redColor: { name: 'Style36', size: 240, color: 'red' }
// }
