import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = props => {
  const { todos, toggleTodoDone } = props;

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodoDone={toggleTodoDone} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodoDone: PropTypes.func.isRequired
};

export default TodoList;
