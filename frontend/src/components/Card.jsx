import propTypes from "prop-types";

function Card({ product }) {
  return (
    <div className="card">
      <h3 className="title-card">{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <article className="content-card">
        <h4>Content Title</h4>
        <p>
          Now that the, uh, garbage ball is in space, Doctor, perhaps you can
          help me with my sexual inhibitions? Hello, little man. I will destroy
          you! Bite my shiny metal ass. Yes! In your face, Gandhi!
        </p>
      </article>
      <div className="footer-card" />
      <button type="button" className="card-button">
        Submit
      </button>
    </div>
  );
}

Card.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
  }).isRequired,
};

export default Card;
