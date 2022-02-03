import React from 'react';

interface Props {
  todo: Todo;
  completeToDo: completeToDo;
}

export const Todo: React.FC<Props> = ({ todo, completeToDo }) => {
  return (
    <li>
    <label
      style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
    >
      <input 
        type="checkbox" 
        checked={todo.complete} 
        onClick={() => {
          completeToDo(todo);
        }}
      />{' '}
        {todo.text}
    </label>
  </li>
  );
};