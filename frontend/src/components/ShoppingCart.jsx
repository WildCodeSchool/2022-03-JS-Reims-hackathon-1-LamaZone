import CartCardList from "./CartCardList";

function ShoppingCart() {
  return (
    <div>
      <CartCardList />
      <div className="flex items-center justify-center">
        <p>Total :</p>
        <ul className="flex flex-wrap max-w-[70%] items-center justify-center">
          <li className="m-1">Aluminium: 4518 mg</li>
          <li className="m-1">Cuivre: 3112 mg</li>
          <li className="m-1">Plastique: 2053 mg</li>
          <li className="m-1">Cobalt: 1138 mg</li>
          <li className="m-1">Tungstene: 104 mg</li>
          <li className="m-1">Argent: 71 mg</li>
          <li className="m-1">Neodium: 15 mg</li>
          <li className="m-1">Gold: 9 mg</li>
          <li className="m-1">Indium: 5 mg</li>
          <li className="m-1">Paladium: 5 mg</li>
          <li className="m-1">Néodyme: 2100mg</li>
          <li className="m-1">Praséodyme: 270mg</li>
          <li className="m-1">Dysprosium: 60mg</li>
          <li className="m-1">Gadolinium: 0.01mg</li>
          <li className="m-1">Cérium: 0.08mg</li>
          <li className="m-1">Europium: 0.13mg</li>
          <li className="m-1">Lanthane: 0.11mg</li>
          <li className="m-1">Terbium: 0.04mg</li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
