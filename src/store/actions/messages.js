import * as actionTypes from "./actionTypes";
import { setInfoMessage, clearInfoMessage } from "./infoMessages";
// AC
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchMessages = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("message/list/");
      // to get data from object reponse
      let messages = response.data;
      //to send to reducer
      dispatch({
        type: actionTypes.FETCH_MESSAGES,
        payload: messages
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the messages");
    }
  };
};

export const sendMessage = (data, history) => {
  console.log("data from reducer", data);
  return async dispatch => {
    dispatch(clearInfoMessage());
    try {
      // to fetch from api
      let response = await instance.post("message/create/", data);
      // to get data from object reponse
      let message = response.data;
      console.log("meesssage baack", message);
      dispatch(setInfoMessage("Your message has been sent!"));
      //to send to reducer
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error sending the message");
    }
  };
};
