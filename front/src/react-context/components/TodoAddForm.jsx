import React from 'react';
import RootContext from '../contexts/root';

const TodoAddForm = () => (
  <RootContext.Consumer>
    {({ todoName, handleChangeTodoName, handleAddTodo }) => (
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
    )}
  </RootContext.Consumer>
);

TodoAddForm.propTypes = {};

TodoAddForm.defaultProps = {};

export default TodoAddForm;
