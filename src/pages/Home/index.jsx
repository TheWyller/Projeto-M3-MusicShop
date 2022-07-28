import { useHistory } from "react-router-dom";
import Products from "../../components/Products";
import { useDispatch } from "react-redux";
import { userLogoutThunk } from "../../store/modules/user/thunks";
import Button from "../../components/Button";
import { Header, Main } from "./style";
import { useSelector } from "react-redux";
const Home = () => {
  const history = useHistory();
  const { name, instrument } = JSON.parse(localStorage.getItem("user")) || {};

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function logout() {
    dispatch(userLogoutThunk());
  }
  return (
    <>
      <Header>
        <h1>
          <p>Kenzie</p> <p>Instruments</p>
        </h1>
        <section className="welcome">
          <div>
            <p>Olá,{name}</p>
            {instrument.toLowerCase().split(" ")[0].slice(-1) === "a" ? (
              <p>Espero que encontre sua {instrument}</p>
            ) : (
              <p>Espero que encontre seu {instrument}</p>
            )}
          </div>
          <div className="buttons">
            <Button onClick={logout}>Logout</Button>
            <Button onClick={() => history.push("/cart")}>Carrinho</Button>
            {cart.length > 0 && <div className="numCart">{cart.length}</div>}
          </div>
        </section>
      </Header>
      <Main>
        <Products />
      </Main>
    </>
  );
};

export default Home;
