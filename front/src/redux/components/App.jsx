import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/Loading';
import TodoAddForm from './TodoAddFormContainer';
import TodoList from './TodoListContainer';

const App = props => {
  const { isLoading, fetchTodos } = props;

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Redux</h1>
      {isLoading ? <Loading /> : <TodoList />}
      <TodoAddForm />
    </div>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired
};

export default App;
