import axios from "axios";
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

export const getData = (params) => (dispatch) => {
  dispatch({ type: type.GET_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/newArrivalData", { params })
    .then((res) => {
      return dispatch({ type: type.GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: type.GET_DATA_FAILURE, err });
    });
};

export const getBrandData = (params) => (dispatch) => {
  dispatch({ type: type.GET_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/glowyMakeupData", { params })
    .then((res) => {
      return dispatch({ type: type.GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: type.GET_DATA_FAILURE, err });
    });
};
