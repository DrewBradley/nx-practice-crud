// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { List } from './List/List';
import { Todo } from './List/Todo'
import { Form } from './Form/Form'


const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [list, setList] = useState(initialTodos);

  const completeToDo = (selectedTodo: Todo) => {
    const newTodos = list.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setList(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setList([...list, newTodo]);
  };


  return (
    <>
      <List todos={list} completeToDo={completeToDo} />
      <Form addTodo={addTodo} />
    </>
  );
}

export default App;
