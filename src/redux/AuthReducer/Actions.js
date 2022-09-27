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

const isAuthFailed = {
  type: type.GET_AUTH_FAILURE,
};
