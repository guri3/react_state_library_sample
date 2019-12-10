import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoAddForm from './TodoAddForm';
import { changeTodoName, postTodo } from '../modules/todos';

const mapStateToProps = state => {
  return {
    todoName: state.todos.todoName
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeTodoName,
      postTodo
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddForm);
