// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
