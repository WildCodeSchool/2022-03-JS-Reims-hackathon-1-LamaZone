import propTypes from "prop-types";
import { useShoppingCartContext } from "../contexts/ShoppingCartContext";

function CartCard({ product }) {
  const { shoppingCart, setShoppingCart } = useShoppingCartContext();
  return (
    <div className="card m-3">
      <h3 className="title-card">{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <article className="content-card">
        <h4>Materiaux</h4>
        <ul className="flex items-center justify-center flex-wrap">
          {Object.values(product.metals).map((metal, index) => (
            <li className="m-1" key={metal}>
              {Object.keys(product.metals)[index]}: {metal}mg
            </li>
          ))}
        </ul>
      </article>
      <button
        type="button"
        className="card-button"
        onClick={() => setShoppingCart([...shoppingCart, product])}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

CartCard.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    metals: propTypes.shape.isRequired,
  }).isRequired,
};

export default CartCard;
