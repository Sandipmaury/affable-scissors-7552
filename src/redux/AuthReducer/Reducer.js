import { getFromLS, saveToLS } from "../../Utils/Constants";
import * as ways from "./ActionsType";

const initialState = {
  isAuth: getFromLS("token") || false,
  isLoding: false,
  isError: false,
  user: {},
  token: getFromLS("token") || "",
};
function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_REQUEST:
      return { ...state, isLoding: true };
    case ways.GET_AUTH_SUCCESS:
      saveToLS("token", payload.token);
      return {
        ...state,
        isLoding: false,
        isAuth: true,
        isError: false,
        user: payload,
        token: payload.token,
      };
    case ways.GET_AUTH_FAILURE:
      return {
        ...state,
        isError: false,
        token: "",
        isAuth: false,
        isLoding: false,
      };
    case ways.LOGOUT:
      return { ...state, isAuth: false, user: {} };
    case ways.CHECK_AUTH:
      return { ...state, isAuth: state.user.firstName ? true : false };
    default:
      return state;
  }
}

export { Reducer };
