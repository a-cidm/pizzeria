import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-3">
        <h2 className="text-center">Menú de Pizzas 🍕</h2>
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;