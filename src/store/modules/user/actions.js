import { USER_LOGOUT, USER_SIGN_IN } from "./actionTypes";

export const userSign = (info) => ({
  type: USER_SIGN_IN,
  info,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
