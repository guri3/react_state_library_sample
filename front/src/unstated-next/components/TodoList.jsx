import React from 'react';
import Todo from './Todo';
import RootContainer from '../containers';

const TodoList = () => {
  const rootContainer = RootContainer.useContainer();

  return (
    <ul>
      {rootContainer.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
