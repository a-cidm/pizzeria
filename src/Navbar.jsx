// Navbar.jsx
import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark my-navbar">

      <div className="left-container">
        <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
        <button className="btn btn-outline-light">🏠 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>

      <button className="btn btn-success">🛒 Total: ${total.toLocaleString()}</button>
    </nav>
  );
};

export default Navbar;