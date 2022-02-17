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
