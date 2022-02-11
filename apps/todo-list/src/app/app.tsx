// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { List } from './List/List';
import { Todo } from './List/Todo'
import { Form } from './Form/Form'
import { Quote } from './Quote/Quote';


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
  const [quote, setQuote] = useState({text: "Finish your work, Drew!", author: "Rich Vazquez (probably)"})

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

  const getQuote = () => {
    fetch(`https://type.fit/api/quotes/`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuote(data[Math.floor(Math.random() * data.length)]);
    });
  }

  const addTodo: AddTodo = (text: string) => {
    getQuote();
    const newTodo = { text, complete: false };
    setList([...list, newTodo]);
  };


  return (
    <>
      <List todos={list} completeToDo={completeToDo} />
      <Form addTodo={addTodo} />
      <Quote quote={quote} />
    </>
  );
}

export default App;
