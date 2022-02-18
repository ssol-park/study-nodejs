const indexes: number[] = [1, 2, 3, 4, 5];
const months: string[] = ['Jan', 'March', 'April', 'June'];
const seasons: string[] = ['spring', 'summer', 'fall', 'winter'];

console.log('------------- splice -------------');

// splice : 배열의 기존 요소를 삭제, 교체, 추가 하여 배열의 내용 변경. 원본 배열 변화 o
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

months.splice(1, 0, 'Feb');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

months.splice(4, 1, 'May');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]

console.log('------------- slice -------------');

// slice : 1.배열의 begin 부터 end까지 (end 미포함) 2.얕은 복사 3.원본 배열 변화 x

console.log(indexes.slice(2)); // [ 3, 4, 5 ]

console.log(indexes.slice(2, 4)); // [ 3, 4 ]

console.log(indexes.slice(-2)); // [ 4, 5 ]

console.log(indexes.slice(2, -1)); // [ 3, 4 ]

console.log('------------- shift -------------');

// shift : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환. 원본 배열 변화 o

console.log(`firstIndex : ${indexes.shift()}`); // firstIndex : 1

console.log(`after shift() --> ${indexes}`); // after shift() --> 2,3,4,5

console.log('------------- unshift -------------');

// unshift : 새로운 요소를 배열의 맨 앞쪽에 추가하고, 원본의 새로운 length 반환. 원본 배열 변화 o

console.log(indexes.unshift(4, 5, 6)); // 7

console.log(indexes); // [4, 5, 6, 2, 3, 4, 5];

console.log('------------- pop -------------');

// pop : 배열의 마지막 요소를 제거하고, 그 요소를 반환. 원본 배열 변화 o

console.log(indexes.pop()); // 5

console.log(indexes); // [ 4, 5, 6, 2, 3, 4 ];

console.log('------------- push -------------');

// push : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 length 반환. 원본 배열 변화 o

console.log(indexes.push(5, 6, 7));

console.log(indexes);

console.log('------------- join -------------');

// join : 배열의 모든 요소를 하나의 문자열로 만든다.

console.log(seasons.join(', ')); // spring, summer, fall, winter
