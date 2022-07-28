import { useDispatch } from "react-redux";
import Button from "../Button";
import { addCartThunk, removeCartThunk } from "../../store/modules/cart/thunks";
import { Container, ContainerCart } from "./style";

const Product = ({ product, isRemovable = false, index }) => {
  const { name, price, describe, image } = product;

  const dispatch = useDispatch();

  return (
    <>
      {isRemovable ? (
        <ContainerCart wrap="nowrap">
          <img
            src={require(`../../assets/${image}`)}
            alt={`imagem de ${name}`}
          />
          <h2 className="titleCart">{name}</h2>
          <span>R$ {price},00</span>
          <Button
            onClick={(e) => dispatch(removeCartThunk(e.target.id))}
            id={index}
          >
            Remover
          </Button>
        </ContainerCart>
      ) : (
        <Container wrap="wrap">
          <img
            src={require(`../../assets/${image}`)}
            alt={`imagem de ${name}`}
          />
          <h2>{name}</h2>
          <span>R$ {price},00</span>
          <p>{describe}</p>
          <Button onClick={() => dispatch(addCartThunk(product))}>
            Comprar
          </Button>
        </Container>
      )}
    </>
  );
};

export default Product;
