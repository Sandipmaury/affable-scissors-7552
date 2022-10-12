import axios from "axios";
import * as type from "./ActionsType";

const isAuthLoding = {
  type: type.GET_AUTH_REQUEST,
};

const isAuthSuccess = (payload) => {
  return {
    type: type.GET_AUTH_SUCCESS,
    payload: payload,
  };
};

export const isAuthFailed = {
  type: type.GET_AUTH_FAILURE,
};

export const logOut = {
  type: type.LOGOUT,
};

export const checkAuthenticaion = {
  type: type.CHECK_AUTH,
};

export const userSignup = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .post(`http://localhost:8080/usersData`, payload)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data));
    });
};

export const userLogin = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .get(`http://localhost:8080/usersData`)
    .then(({ data }) => {
      dispatch(
        isAuthSuccess(
          data.find(
            (el) =>
              el.email === payload.email && el.password === payload.password
          )
        )
      );
    })
    .catch((err) => {
      dispatch(isAuthFailed);
      throw err;
    });
};

export const getUserData = (token) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .get(`http://localhost:8080/usersData/${token}`)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data));
    })
    .catch(() => {
      dispatch(isAuthFailed);
    });
};
