import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useRoot() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = () => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(json => {
        setTodos(json);
        setIsLoading(false);
      });
  };

  const toggleTodoDone = id => {
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

  const postTodo = () => {
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

  return {
    todos,
    todoName,
    isLoading,
    setTodoName,
    setIsLoading,
    fetchTodos,
    toggleTodoDone,
    postTodo
  };
}

const RootContainer = createContainer(useRoot);
export default RootContainer;
