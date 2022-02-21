interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

const todos: ITodo[] = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 4, text: 'Express', isDone: false },
];

// 모든 요소가 조건에 일치하면 true, 아니면 false
console.log(todos.every((todo) => todo.isDone)); // false
console.log(todos.every((todo) => todo.text.length > 5)); // true

// 조건에 일치하는 요소 발견 즉시 true 리턴, 아니면 false
console.log(todos.some((todo) => todo.isDone)); // true
console.log(todos.some((todo) => todo.text.length > 5)); // true
