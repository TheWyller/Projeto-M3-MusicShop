import { useSelector } from "react-redux";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const infoUser = useSelector((state) => state.user);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!infoUser.name ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/"} />
        );
      }}
    />
  );
};
export default Route;
