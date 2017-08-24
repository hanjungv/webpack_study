import * as types from './ActionTypes';

export const changeValueNewTodo = (value, name) => {
  return {
    type: types.CHANGE_VALUE_NEW_TODO, value, name,
  }
}

export const toggleIsFinished = (value, idx) => {
  if(value){
    return {
      type: types.MOVE_TO_FINISHED_JOB, value, idx,
    }
  } else {
    return {
      type: types.MOVE_TO_TODOLISTS, value, idx,
    }
  }
    
}

export const addCard = () => {
  return {
    type: types.ADD_CARD,
  };
};

export const deleteCard = () => {
  return {
    type: types.DELETE_CARD,
  };
};

export const updateCard = () => {
  return {
    type: types.UPDATE_CARD,
  };
};

export const editCard = () => {
  return {
    type: types.EDIT_CARD,
  };
};