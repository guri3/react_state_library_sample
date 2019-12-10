import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Loading from '../../common/Loading';
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

const App = inject('store')(
  observer(({ store }) => {
    const { isLoading, fetchTodos } = store;

    useEffect(() => {
      fetchTodos();
    }, []);

    return (
      <div>
        <h1>MobX</h1>
        {isLoading ? <Loading /> : <TodoList />}
        <TodoAddForm />
      </div>
    );
  })
);

App.propTypes = {};

App.defaultProps = {};

export default App;
