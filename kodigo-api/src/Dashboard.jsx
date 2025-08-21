import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./App.css";

export default function Dashboard() {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bootcamps"));
        const bootcampList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBootcamps(bootcampList);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Error al cargar los bootcamps.");
      } finally {
        setLoading(false);
      }
    };

    fetchBootcamps();
  }, []);

  if (loading) return <p className="loading">Cargando bootcamps...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard">
      <h1 className="title">📊 Dashboard de Bootcamps</h1>
      <div className="bootcamp-list">
        {bootcamps.map((bootcamp) => (
          <div key={bootcamp.id} className="bootcamp-card">
            <h2>{bootcamp.name}</h2>
            <p><strong>Descripción:</strong> {bootcamp.description}</p>
            <p><strong>Duración:</strong> {bootcamp.duration} semanas</p>
            <p><strong>Precio:</strong> ${bootcamp.price}</p>
            <p><strong>Ubicación:</strong> {bootcamp.location}</p>
            <p><strong>Modalidad:</strong> {bootcamp.mode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
