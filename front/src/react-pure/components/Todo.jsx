import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
  const { todo, handleToggleTodoDone } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => handleToggleTodoDone(todo.id)}
      />
      {todo.name}
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool
  }),
  handleToggleTodoDone: PropTypes.func.isRequired
};

Todo.defaultProps = {
  todo: {
    id: null,
    name: '',
    done: false
  }
};

export default Todo;
