import { useFormControlStyles } from "@chakra-ui/react";
import * as ways from "./ActionsType";

const initialState = {
  isAuth: false,
  isLoding: false,
  isError: false,
  token: "",
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_REQUEST:
      return { ...state, isLoding: true };
    case ways.GET_AUTH_SUCCESS:
      return {
        ...state,
        isLoding: false,
        token: payload,
        isAuth: true,
        isError: false,
        data: payload,
      };
    case ways.GET_AUTH_FAILURE:
      return {
        ...state,
        isError: false,
        token: "",
        isAuth: false,
        isLoding: false,
      };
    default:
      return state;
  }
}

export { Reducer };
