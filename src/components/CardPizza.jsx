import PropTypes from "prop-types";

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card">
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{capitalize(name)}</h5>
      <p className="ingredients-title">Ingredientes:</p>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{capitalize(ingredient)}</li>
        ))}
      </ul>
      <p className="price">Precio: ${price.toLocaleString()}</p>
      <div className="buttons">
        <button className="btn btn-outline-dark">Ver Más 👀</button>
        <button className="btn btn-dark ms-2">Añadir 🛒</button>
      </div>
    </div>
  </div>
);

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
