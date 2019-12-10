import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from './TodoList';
import { toggleTodoDone } from '../modules/todos';

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTodoDone
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
