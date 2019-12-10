import React from 'react';
import PropTypes from 'prop-types';
import RootContainer from '../containers';

const Todo = props => {
  const { todo } = props;
  const rootContainer = RootContainer.useContainer();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => rootContainer.toggleTodoDone(todo.id)}
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
  })
};

Todo.defaultProps = {
  todo: {
    id: null,
    name: '',
    done: false
  }
};

export default Todo;
