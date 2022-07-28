import { userLogout, userSign } from "./actions";
import { toast } from "react-toastify";

export const userSignThunk = (info) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(info));
  toast.success(`Bem-Vindo, ${info.name}`);
  dispatch(userSign(info));
};

export const userLogoutThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(userLogout());
  toast.success("Logout realizado com Sucesso");
};
