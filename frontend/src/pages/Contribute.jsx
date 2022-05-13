import { useState } from "react";

function Contribute() {
  const [hasClick, setHasClick] = useState([]);
  const handleClick = () => {
    setHasClick([...hasClick, "clicked"]);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form action="" method="post" className="flex flex-col">
        <label htmlFor="name">
          Nom
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="category">
          Catégorie
          <select name="category" id="category">
            <option value="laptop">Ordinateur portable</option>
            <option value="mobile">Téléphone portable</option>
            <option value="tablet">Tablette</option>
            <option value="TV">Télévision</option>
          </select>
        </label>
        <label htmlFor="img">
          Image
          <input type="file" name="img" id="img" />
        </label>
        <button type="button" onClick={() => handleClick()}>
          Ajouter un matériel
        </button>
        <div className="m-1">
          <input type="text" placeholder="Matériel" name="materiel" />
          <input type="text" placeholder="Quantité en mg" name="quantite" />
        </div>
        {hasClick.map(() => (
          <div className="m-1">
            <input type="text" placeholder="Matériel" name="materiel" />
            <input type="text" placeholder="Quantité en mg" name="quantite" />
          </div>
        ))}
        <button
          type="button"
          // eslint-disable-next-line no-alert
          onClick={() => alert("Votre contribution a été prise en compte")}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contribute;
