import * as type from "./ActionsType";

const isDataLoding = {
  type: type.GET_DATA_REQUEST,
};

const isDataLodingSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};

const isDataLodingFailed = {
  type: type.GET_DATA_FAILURE,
};
