interface IUser {
  id: string;
  info?: {
    email?: string;
  };
}

const userId: IUser = {
  id: 'abc123',
};

const userIdAndInfo: IUser = {
  id: 'abc123',
  info: {
    email: 'abbbb',
  },
};

console.log(userId.id); // abc123
// console.log(userId.info.email); // Error
console.log(userId.info?.email); // undefined

console.log(userIdAndInfo.info?.email); // abbbb

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// 왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용
