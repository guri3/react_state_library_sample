import React from 'react';
import { inject, observer } from 'mobx-react';
import Todo from './Todo';

const TodoList = inject('store')(
  observer(({ store }) => {
    const { todos, toggleTodoDone } = store;

    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodoDone={toggleTodoDone} />
        ))}
      </ul>
    );
  })
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
