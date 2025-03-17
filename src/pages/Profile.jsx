import React from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { token, logout } = useUser();

  if (!token) {
    return <Navigate to="/register" />;
  }

  return (
    <div className="container mt-4">
      <h2>Perfil de Usuario</h2>
      <p>Email: usuario@example.com</p>
      <button className="btn btn-primary" onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
