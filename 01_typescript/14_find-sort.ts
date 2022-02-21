interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

const todos: ITodo[] = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 4, text: 'Express', isDone: false },
];

// find
const todo = todos.find((todo) => todo.id === 3);
console.log(todo); // { id: 3, text: 'NodeJS', isDone: false }

// findIndex
const index = todos.findIndex((todo) => todo.id === 2);
console.log(index); // 2

// sort
// todos.sort((a, b) => a.id - b.id); // 원본 배열 정렬
// [
//   { id: 1, text: 'JavaScript', isDone: true },
//   { id: 2, text: 'TypeScript', isDone: true },
//   { id: 3, text: 'NodeJS', isDone: false },
//   { id: 4, text: 'Express', isDone: false }
// ]

const sortedTodos = [...todos].sort((a, b) => a.id - b.id); // 원본 배열을 copy 후 정렬
