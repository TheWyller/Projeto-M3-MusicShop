import { toast } from "react-toastify";
import { addCart, removeAllCart, removeCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addCart(product));
  toast.success("Item adicionado com Sucesso");
};

export const removeCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((_, index) => index !== Number(id));

  localStorage.setItem("cart", JSON.stringify(list));

  dispatch(removeCart(list));
  toast.success("Item removido com Sucesso");
};

export const removeAllCartThunk = () => {
  return (dispatch) => {
    const list = [];

    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(removeAllCart(list));
    toast.success(
      "eh! he! Pegadinha do Malandro, os instrumentos vão todos para o Wyller hahahaha",
      { autoClose: 5000 }
    );
  };
};
