import propTypes from "prop-types";
import { useProductsContext } from "../contexts/ProductsContext";
import Card from "./Card";

function CardList({ value }) {
  const { products } = useProductsContext();
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

CardList.propTypes = {
  value: propTypes.string.isRequired,
};

export default CardList;
