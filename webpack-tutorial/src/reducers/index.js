import initialState from './initialState';
import * as types from '../actions/ActionTypes';

export default (state = initialState, actions) => {
  switch(actions.type){
    case types.ADD_CARD:
      return {
        ...state
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
