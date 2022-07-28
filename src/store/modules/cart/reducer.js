import { ADD_CART, REMOVE_ALL, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { list } = action;
      return list;

    case REMOVE_ALL:
      const { allList } = action;
      return allList;

    default:
      return state;
  }
};

export default cartReducer;
