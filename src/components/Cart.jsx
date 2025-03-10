import React from "react";
import { useCart } from "../context/CartContext";
import { pizzas } from "../data/pizzas";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();

  return (
    <div className="container">
      <h2 className="text-center">Carrito de Compras 🛒</h2>
      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <div>
          {cart.map((pizza) => {
            const pizzaData = pizzas.find((p) => p.id === pizza.id);
            return (
              <div key={pizza.id} className="cart-item d-flex align-items-center">
                <img src={pizza.img} alt={pizza.name} className="cart-img" />
                <div className="cart-details">
                  <h5>{pizza.name}</h5>
                  <p>Ingredientes: {pizzaData ? pizzaData.ingredients.join(", ") : "No disponible"}</p>
                  <p>${pizza.price.toLocaleString()}</p>
                </div>
                <div className="cart-actions">
                  <button className="btn btn-outline-danger" onClick={() => decreaseCount(pizza.id)}>-</button>
                  <span>{pizza.count}</span>
                  <button className="btn btn-outline-primary" onClick={() => increaseCount(pizza.id)}>+</button>
                </div>
              </div>
            );
          })}
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-success">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
