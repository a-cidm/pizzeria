// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

// Importa los nuevos componentes
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Quita comentarios según el formulario que quieras mostrar */}
      {/* <Home /> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};

export default App;