// CardPizza.jsx
import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card">
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="ingredients-title">Ingredientes:</p>
      <p className="ingredients-list">🍕 {ingredients.join(", ")}</p>
      <p className="price ">Precio: ${price.toLocaleString()}</p>
      <div className="buttons">
        <button className="btn btn-outline-dark">Ver Más 👀</button>
        <button className="btn btn-dark ms-2">Añadir 🛒</button>
      </div>
    </div>
  </div>
);

export default CardPizza;
