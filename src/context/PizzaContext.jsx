import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const PizzaContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  const fetchPizzaById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizza:", error);
    }
  };

  return (
    <PizzaContext.Provider value={{ pizzas, pizza, fetchPizzaById }}>
      {children}
    </PizzaContext.Provider>
  );
};

PizzaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};