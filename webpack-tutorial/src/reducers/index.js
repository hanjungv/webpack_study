import update from 'immutability-helper';
import initialState from './initialState';
import _ from 'lodash';
import * as types from '../actions/ActionTypes';

export default (state = initialState, actions) => {
  switch(actions.type){
    case types.MOVE_TO_FINISHED_JOB:
      let todoList_item = _.clone(state.todoLists[actions.idx]);
      todoList_item.isFinished = true;
      return {
        ...state,
        finishedJob: update(state.finishedJob,{
          $push: [todoList_item],
        }),
        todoLists: update(state.todoLists,{
          $splice: [[actions.idx, 1]]
        }),
      }
    case types.MOVE_TO_TODOLISTS:
      let finished_item = _.clone(state.finishedJob[actions.idx]);
      finished_item.isFinished = false;
      return {
        ...state,
        todoLists: update(state.todoLists,{
          $push: [finished_item],
        }),
        finishedJob: update(state.finishedJob,{
          $splice: [[[actions.idx], 1]]
        }),
      }
    case types.CHANGE_VALUE_NEW_TODO:
      return {
        ...state,
        newTodo: update(state.newTodo,{
            [actions.name]: {
              $set: actions.value,
            },
          }
        )
      }
    case types.ADD_CARD:
      return {
        ...state,
        todoLists: update(state.todoLists,{
          $push: [state.newTodo],
        }),
      };
    case types.DELETE_CARD:
      return {
        ...state
      };
    case types.UPDATE_CARD:
      return {
        ...state
      };
    case types.EDIT_CARD:
      return {
        ...state
      };
    default:
      return state;
  }
};
