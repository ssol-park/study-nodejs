// var : 함수레벨스코프

var a = 10;

console.log(a); // 10

{
  var a = 20;
}

console.log(a); // 20

// let, const : 블록레벨스코프

let b = 30;

console.log(b); // 30

{
  let b = 40;
}

console.log(b); // 30

// 렉시컬스코프

let x = 'global';

const foo = () => {
  let x = 'local';
  bar();
};

const bar = () => {
  console.log(x);
};

foo(); // global
bar(); // global

// https://yeoncoding.tistory.com/39
