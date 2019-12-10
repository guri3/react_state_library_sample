import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = props => {
  const { todos, handleToggleTodoDone } = props;

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggleTodoDone={handleToggleTodoDone}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  handleToggleTodoDone: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;
