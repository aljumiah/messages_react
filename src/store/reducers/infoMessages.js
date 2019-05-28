import * as actionTypes from "../actions/actionTypes";

const initialState = {
  infoMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INFO_MESSAGE:
      return {
        ...state,
        infoMessage: action.payload
      };
    case actionTypes.CLEAR_INFO_MESSAGE:
      return {
        ...state,
        infoMessage: null
      };
    default:
      return state;
  }
};

export default reducer;
