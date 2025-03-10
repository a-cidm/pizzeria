import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { usePizzas } from "../context/PizzaContext";

// function to capitalize
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Pizza = () => {
  const { pizza, fetchPizzaById } = usePizzas();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchPizzaById("p001");
  }, [fetchPizzaById]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-3">
      <h2 className="text-center">{toTitleCase(pizza.name)}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Precio: ${pizza.price.toLocaleString()}</h3>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{pizza.desc}</p>
          <button className="btn btn-dark" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;