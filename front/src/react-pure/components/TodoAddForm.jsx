import React from 'react';
import PropTypes from 'prop-types';

const TodoAddForm = props => {
  const { todoName, handleChangeTodoName, handleAddTodo } = props;

  return (
    <>
      <input
        type="text"
        value={todoName}
        onChange={e => handleChangeTodoName(e.target.value)}
      />
      <button type="button" onClick={() => handleAddTodo()}>
        Add
      </button>
    </>
  );
};

TodoAddForm.propTypes = {
  todoName: PropTypes.string.isRequired,
  handleChangeTodoName: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired
};

TodoAddForm.defaultProps = {};

export default TodoAddForm;
