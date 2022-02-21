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

const oddIds = todos.filter((todo) => {
  return todo.id % 2 === 1;
});

console.log(oddIds);
// { id: 1, text: 'JavaScript', isDone: true },
// { id: 3, text: 'NodeJS', isDone: false }
