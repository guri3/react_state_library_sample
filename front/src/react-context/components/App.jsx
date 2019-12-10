import React, { useState, useEffect } from 'react';
import RootContext from '../contexts/root';
import Loading from '../../common/Loading';
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(json => {
        setTodos(json);
        setIsLoading(false);
      });
  }, []);

  const handleToggleTodoDone = id => {
    const data = { id };
    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => setTodos(json));
  };

  const handleChangeTodoName = name => {
    setTodoName(name);
  };

  const handleAddTodo = () => {
    const data = { name: todoName };
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        setTodoName('');
        setTodos([...todos, json]);
      });
  };

  return (
    <RootContext.Provider
      value={{
        todos,
        todoName,
        setTodoName,
        handleToggleTodoDone,
        handleChangeTodoName,
        handleAddTodo
      }}
    >
      <div>
        <h1>React Context</h1>
        {isLoading ? <Loading /> : <TodoList />}
        <TodoAddForm />
      </div>
    </RootContext.Provider>
  );
};

export default App;
