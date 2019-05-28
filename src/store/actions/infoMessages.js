import * as actionTypes from "./actionTypes";

export const setInfoMessage = message => ({
  type: actionTypes.SET_INFO_MESSAGE,
  payload: message
});

export const clearInfoMessage = () => ({
  type: actionTypes.CLEAR_INFO_MESSAGE,
  payload: null
});
