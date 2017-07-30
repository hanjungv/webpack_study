import * as actions from '../actions';
import { connect } from 'react-redux';
import TodoLists from '../components/TodoLists';

const mapStateToProps = (state) => ({
  lists: state.todoLists,
});

const mapDispatchToProps = (dispatch) => ({

});

const TodoListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLists);

export default TodoListsContainer;
