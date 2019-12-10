import React from 'react';
import PropTypes from 'prop-types';
import RootContext from '../contexts/root';

const Todo = props => {
  const { todo } = props;

  return (
    <RootContext.Consumer>
      {({ handleToggleTodoDone }) => (
        <li>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleTodoDone(todo.id)}
          />
          {todo.name}
        </li>
      )}
    </RootContext.Consumer>
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
