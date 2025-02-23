import React, { useEffect, useState } from "react";

// function to capitalize
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, []);

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
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;