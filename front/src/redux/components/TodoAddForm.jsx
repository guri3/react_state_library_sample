import React from 'react';
import PropTypes from 'prop-types';

const TodoAddForm = props => {
  const { todoName, changeTodoName, postTodo } = props;

  return (
    <>
      <input
        type="text"
        value={todoName}
        onChange={e => changeTodoName(e.target.value)}
      />
      <button type="button" onClick={() => postTodo(todoName)}>
        Add
      </button>
    </>
  );
};

TodoAddForm.propTypes = {
  todoName: PropTypes.string.isRequired,
  changeTodoName: PropTypes.func.isRequired,
  postTodo: PropTypes.func.isRequired
};

TodoAddForm.defaultProps = {};

export default TodoAddForm;
