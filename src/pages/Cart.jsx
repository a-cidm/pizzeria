import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { pizzas } from "../data/pizzas";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();
  const { token } = useUser();
  const [successMessage, setSuccessMessage] = useState("");

  if (!token) return <Navigate to="/login" />;

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) throw new Error("Error al realizar la compra");

      setSuccessMessage("¡Compra realizada con éxito!");
    } catch (error) {
      alert("Error al enviar el carrito");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => {
            const pizzaData = pizzas.find((p) => p.id === pizza.id);
            return (
              <div key={pizza.id} className="cart-item d-flex align-items-center">
                <img src={pizza.img} alt={pizza.name} className="cart-img" />
                <div className="cart-details">
                  <h5>{pizza.name}</h5>
                  <p>
                    Ingredientes:{" "}
                    {pizzaData ? pizzaData.ingredients.join(", ") : "No disponible"}
                  </p>
                  <p>${pizza.price.toLocaleString()}</p>
                </div>
                <div className="cart-actions">
                  <button className="btn btn-outline-danger" onClick={() => decreaseCount(pizza.id)}>
                    -
                  </button>
                  <span className="mx-2">{pizza.count}</span>
                  <button className="btn btn-outline-primary" onClick={() => increaseCount(pizza.id)}>
                    +
                  </button>
                </div>
              </div>
            );
          })}

          <h3>Total: ${total.toLocaleString()}</h3>

          <button className="btn btn-success" onClick={handleCheckout}>
            Pagar
          </button>

          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
