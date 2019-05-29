import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: [],
  replays: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case actionTypes.FETCH_REPLAYS:
      return {
        ...state,
        replays: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
