import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import messagesReducer from "./messages";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  messagesReducer: messagesReducer,
  profileReducer: profileReducer
});
