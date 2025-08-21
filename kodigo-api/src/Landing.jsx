import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./App.css";

export default function Landing() {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBootcamps = async () => {
      setLoading(true);
      setError("");

      try {
        const bootcampsCol = collection(db, "bootcamps");
        const bootcampsSnapshot = await getDocs(bootcampsCol);
        const bootcampsList = bootcampsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBootcamps(bootcampsList);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los bootcamps.");
      } finally {
        setLoading(false);
      }
    };

    fetchBootcamps();
  }, []);

  if (loading) return <p>Cargando bootcamps...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="landing-container">
      <h2>Bootcamps disponibles</h2>
      <div className="bootcamps-grid">
        {bootcamps.map((bootcamp) => (
          <div key={bootcamp.id} className="bootcamp-card">
            <h3>{bootcamp.name}</h3>
            <p>{bootcamp.description}</p>
            <p><strong>Duración:</strong> {bootcamp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
