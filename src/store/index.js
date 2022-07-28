import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import cartReducer from "./modules/cart/reducer";
import productsReducer from "./modules/products/reducer";
import userReducer from "./modules/user/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
