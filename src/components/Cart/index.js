import Product from "../Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAllCartThunk } from "../../store/modules/cart/thunks";
import Button from "../Button";
import { ContainerCheckout, Conteiner } from "./style";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  function sum(array) {
    return array.reduce((acc, elem) => acc + elem.price, 0);
  }
  function buyAll() {
    dispatch(removeAllCartThunk());
  }

  return (
    <Conteiner>
      {cart.length > 0 ? (
        cart.map((elem, i) => {
          return <Product key={i} product={elem} isRemovable index={i} />;
        })
      ) : (
        <div className="emptyCart">
          Carrinho Vazio, volte para Home e adicione um !
        </div>
      )}
      <ContainerCheckout>
        <div>
          <h3>Quntidade</h3>
          <p>{cart.length}</p>
        </div>
        <div>
          <h3>Valor Total</h3>
          <span>R$ {sum(cart)},00</span>
        </div>
        {sum(cart) !== 0 && <Button onClick={buyAll}>Finalizar compra</Button>}
      </ContainerCheckout>
    </Conteiner>
  );
};

export default Cart;
