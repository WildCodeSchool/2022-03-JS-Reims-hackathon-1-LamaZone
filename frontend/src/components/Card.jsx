import React from "react";

export default function Card() {
  return (
    <div className="card">
      <h3 className="title-card">Card Title</h3>
      <img src="./src/assets/macbook.png" alt="mackbook" />
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
