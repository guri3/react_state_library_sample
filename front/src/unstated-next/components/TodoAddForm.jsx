import React from 'react';
import RootContainer from '../containers';

const TodoAddForm = () => {
  const rootContainer = RootContainer.useContainer();

  return (
    <>
      <input
        type="text"
        value={rootContainer.todoName}
        onChange={e => rootContainer.setTodoName(e.target.value)}
      />
      <button type="button" onClick={() => rootContainer.postTodo()}>
        Add
      </button>
    </>
  );
};

TodoAddForm.propTypes = {};

TodoAddForm.defaultProps = {};

export default TodoAddForm;
