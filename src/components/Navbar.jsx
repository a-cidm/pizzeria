import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Sesión cerrada con éxito");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark my-navbar fixed-top">
      <div className="left-container">
        <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
        <Link to="/" className="btn btn-outline-light">🏠 Home</Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
            <button className="btn btn-outline-light" onClick={handleLogout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
          </>
        )}
      </div>
      <Link to="/cart" className="btn btn-success">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
};

export default Navbar;
