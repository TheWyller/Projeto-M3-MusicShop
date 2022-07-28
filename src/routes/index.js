import { Switch } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route isPrivate path="/" exact component={Home} />
      <Route isPrivate path="/cart" exact component={CartPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
