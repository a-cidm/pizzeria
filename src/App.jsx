// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;
