import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_OBJ:
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
