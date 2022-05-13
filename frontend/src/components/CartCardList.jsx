import { useShoppingCartContext } from "../contexts/ShoppingCartContext";
import CartCard from "./CartCard";

function CartCardList() {
  const { shoppingCart } = useShoppingCartContext();
  return (
    <div className="card-list flex flex-wrap flex-grow items-center justify-center">
      {shoppingCart.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartCardList;
