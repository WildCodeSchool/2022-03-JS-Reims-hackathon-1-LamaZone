import { useProductsContext } from "../contexts/ProductsContext";
import Card from "./Card";

function CardList() {
  const { products } = useProductsContext();
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
}

export default CardList;
