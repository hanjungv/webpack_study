import * as types from './ActionTypes';

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