import React from 'react';
import { inject, observer } from 'mobx-react';

const TodoAddForm = inject('store')(
  observer(({ store }) => {
    const { todoName, changeTodoName, postTodo } = store;

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
  })
);

TodoAddForm.propTypes = {};

TodoAddForm.defaultProps = {};

export default TodoAddForm;
