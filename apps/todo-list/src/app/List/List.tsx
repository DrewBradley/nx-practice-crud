import React, { useState } from 'react';
import { Todo } from './Todo'

interface Props {
  todos: Todo[];
  completeToDo: completeToDo;
}

export const List: React.FC<Props> = ({ todos, completeToDo }) => {
  return (
    <>
      <ul>
      {todos.map(todo => (
        <Todo key={todo.text} todo={todo} completeToDo={completeToDo} />
      ))}
      </ul>
    </>
  );
}