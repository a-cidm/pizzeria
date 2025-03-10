// Home.jsx
import React from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useCart } from "../context/CartContext";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = usePizzas();
  const { addToCart } = useCart();

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
                onAddToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;