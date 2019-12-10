import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
  const { todo, toggleTodoDone } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodoDone(todo.id)}
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
  toggleTodoDone: PropTypes.func.isRequired
};

Todo.defaultProps = {
  todo: {
    id: null,
    name: '',
    done: false
  }
};

export default Todo;
