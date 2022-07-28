import Product from "../Product";
import { useSelector } from "react-redux";
import { Conteiner } from "./style";

const Products = () => {
  const products = useSelector((store) => store.products);
  return (
    <Conteiner>
      {products.map((elem) => (
        <Product key={elem.id} product={elem} />
      ))}
    </Conteiner>
  );
};

export default Products;
