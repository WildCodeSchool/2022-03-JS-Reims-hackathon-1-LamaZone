import { useProductsContext } from "../contexts/ProductsContext";
import { useValueContext } from "../contexts/ValueContext";
import Card from "./Card";

function CardList() {
  const { products } = useProductsContext();
  const { value } = useValueContext();
  return (
    <div className="card-list flex flex-wrap flex-grow items-center justify-center">
      {products
        .filter((product) => product.name.toLowerCase().startsWith(value))
        .map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </div>
  );
}

export default CardList;
