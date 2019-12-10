import React, { useEffect } from 'react';
import Loading from '../../common/Loading';
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';
import RootContainer from '../containers';

const App = () => {
  const rootContainer = RootContainer.useContainer();

  useEffect(() => {
    rootContainer.fetchTodos();
  }, []);

  return (
    <div>
      <h1>Unstated Next</h1>
      {rootContainer.isLoading ? <Loading /> : <TodoList />}
      <TodoAddForm />
    </div>
  );
};

export default App;
