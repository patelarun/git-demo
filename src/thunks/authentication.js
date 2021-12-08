import client from "./axios";
import { userToken } from "../actions";

export const requestRegisterUser = (user, history) => async () => {
  try {
    await client.post("auth/register", { ...user });
    history.push("/login");
  } catch (err) {
    console.log(err);
  }
};

export const requestUserLogin = (loginData) => async (dispatch) => {
  try {
    const response = await client.post("auth/login", loginData);
    client.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
    localStorage.setItem('token', response.data.access_token);
    dispatch(userToken(response.data.access_token));
  } catch (err) {
    console.log(err);
  }
};
