import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';
import { completeLoading } from '../modules/app';
import { fetchTodos } from '../modules/todos';

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      completeLoading,
      fetchTodos
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
