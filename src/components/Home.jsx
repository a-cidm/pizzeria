import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas"; // Importamos el array de pizzas

const Home = () => {
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