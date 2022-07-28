import { USER_LOGOUT, USER_SIGN_IN } from "./actionTypes";

const infoUser = JSON.parse(localStorage.getItem("user")) || {};

const defaultState = infoUser;

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      const { info } = action;
      return info;

    case USER_LOGOUT:
      return (state = {});

    default:
      return state;
  }
};

export default userReducer;
