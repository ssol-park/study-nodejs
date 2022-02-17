// OR 연산자 구동방식 : 1. 왼쪽부터 true 값을 찾는다. 2. true 값을 찾은 경우 해당 값 반환. 3. 마지막에 도달한 경우, 마지막 값 반환
const or1 = true || 'abc';
const or2 = false || 'abc';
const or3 = false || 1;
console.log({ or1, or2, or3 }); // { or1: true, or2: 'abc', or3: 1 }

console.log('-------------------------------');

// AND 연산자 구동방식 : 1. 왼쪽부터 false 값을 찾는다. 2. false 값을 찾은 경우 해당 값 반환. 3. 마지막에 도달한 경우, 마지막 값 반환
// AND 연산자가 OR 연산자 보다 우선순위가 높다.
const and1 = false && 'bcd';
const and2 = true && 0 && 'result';
const and3 = true && '';
const and4 = true && 100;
console.log({ and1, and2, and3, and4 }); // { and1: false, and2: 0, and3: '', and4: 100 }

console.log('-------------------------------');

// NOT 연산자 : 피연산자를 boolean 유형(true/false) 값으로 나눈 후, 결과 값의 반댓값을 반환
const not1 = !true;
const not2 = !!true;
const not3 = !'';
const not4 = !'abc';
console.log({ not1, not2, not3, not4 }); // { not1: false, not2: true, not3: true, not4: false }

console.log('-------------------------------');

interface Assignment {
  duration: number;
  title: string;
}

// (a ||= b)  === (a || (a = b)) --> a가 falsy한 값일 경우, b의 값을 a에 할당.
const a: Assignment = { duration: 0, title: '' };

a.duration ||= 10;
console.log(a.duration); // a.duration이 falsy한 값이면 10 출력

a.title ||= 'Empty!';
console.log(a.title); // a.title이 falsy한 값이면 Empty! 출력

console.log('-------------------------------');

// (a &&= b)  === (a && (a = b)) --> a가 truthy한 값일 경우, b의 값을 a에 할당.
const b: Assignment = { duration: 10, title: '' };

b.duration &&= 1;
console.log(b.duration); // duration이 falsy한 값이면 0출력

b.title &&= '1';
console.log(b.title); // duration이 falsy한 값이면 빈문자열 출력

console.log('-------------------------------');
