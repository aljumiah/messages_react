import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: null,
  profile: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_OBJ:
      return {
        ...state,
        username: action.payload
      };
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload[0]
      };
    default:
      return state;
  }
};

export default reducer;
