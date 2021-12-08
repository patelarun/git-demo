import { User_Token, Set_User } from "../actions";

const getTokenFromLocalStorage = () => {
  let getToken = localStorage.getItem("token") || "";
  return getToken;
};

const initialState = {
  registerUser: {
    email: "",
    password: "",
  },
  token: getTokenFromLocalStorage(),
};

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case User_Token:
      return {
        ...state,
        token: action.payload,
      };
    case Set_User:
      return {
        ...state,
        registerUser: action.payload,
      };
    default:
      return state;
  }
}
