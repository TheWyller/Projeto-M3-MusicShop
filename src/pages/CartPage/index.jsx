import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Cart from "../../components/Cart";
import { Header } from "./style";

const CartPage = () => {
  const history = useHistory();
  return (
    <>
      <Header>
        <h1>
          <p>Kenzie</p> <p>Instruments</p>
        </h1>
        <section>
          <h1>Carrinho</h1>
          <Button onClick={() => history.push("/")}>Home</Button>
        </section>
      </Header>
      <main>
        <Cart />
      </main>
    </>
  );
};

export default CartPage;
