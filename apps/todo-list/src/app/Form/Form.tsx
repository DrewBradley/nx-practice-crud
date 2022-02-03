import React, { useState } from 'react'

interface Props {
    addTodo: AddTodo;
  }
  
  export const Form: React.FC<Props> = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    return (
      <form>
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            addTodo(title, text);
            setText('');
          }}
        >
          Add Item
        </button>
      </form>
    );
  };