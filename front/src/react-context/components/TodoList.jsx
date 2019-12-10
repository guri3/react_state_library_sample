import React from 'react';
import RootContext from '../contexts/root';
import Todo from './Todo';

const TodoList = () => (
  <RootContext.Consumer>
    {({ todos }) => (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    )}
  </RootContext.Consumer>
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
