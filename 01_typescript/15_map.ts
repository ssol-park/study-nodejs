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

const updatedId = todos.map((todo) => {
  return { ...todo, id: todo.id * 10 };
});
console.log(updatedId);
// { id: 10, text: 'JavaScript', isDone: true },
// { id: 30, text: 'NodeJS', isDone: false },
// { id: 20, text: 'TypeScript', isDone: true },
// { id: 40, text: 'Express', isDone: false }

const updatedIsDone = todos.map((todo) => {
  if (!todo.isDone) {
    return { ...todo, isDone: true };
  }

  return { ...todo };
});
console.log(updatedIsDone);
// { id: 1, text: 'JavaScript', isDone: true },
// { id: 3, text: 'NodeJS', isDone: true },
// { id: 2, text: 'TypeScript', isDone: true },
// { id: 4, text: 'Express', isDone: true }
