import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  const { token, email, getProfile, logout } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        await getProfile();
      } catch (error) {
        alert("Error al obtener perfil");
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (!token) return <Navigate to="/login" />;
  if (loading) return <p className="container mt-4">Cargando perfil...</p>;

  return (
    <div className="container mt-4">
      <h2>Perfil del Usuario</h2>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default ProfilePage;
