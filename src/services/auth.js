import api from "../api";
import { SIGN_UP_URL, SIGN_IN_URL } from "./endpoints";

export const signUp = (data) => {
  return api.post(SIGN_UP_URL, data);
};

export const signIn = (data) => {
  return api.post(SIGN_IN_URL, data);
};
