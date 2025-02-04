// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <div id="root">
      <Navbar />
      <main>
        {/* <Home /> */}
        <RegisterPage />
        {/* <LoginPage /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;