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
    .post(`https://62a8b465943591102ba84f08.mockapi.io/crud`, payload)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data));
    });
};

export const userLogin = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .get(`https://62a8b465943591102ba84f08.mockapi.io/crud`)
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

export const getUserData = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .get(`https://62a8b465943591102ba84f08.mockapi.io/crud`)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data.find((el) => el.token === payload)));
    })
    .catch(() => {
      dispatch(isAuthFailed);
    });
};
