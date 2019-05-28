import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import messagesReducer from "./messages";
import profileReducer from "./profile";
import infoMessageReducer from "./infoMessages";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  messagesReducer: messagesReducer,
  profileReducer: profileReducer,
  infoMessageReducer: infoMessageReducer
});
