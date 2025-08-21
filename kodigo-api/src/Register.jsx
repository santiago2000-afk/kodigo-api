import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [firebaseError, setFirebaseError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    setFirebaseError("");
    setSuccess("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      setSuccess(`Usuario ${data.email} registrado ✅`);
      reset();
    } catch (err) {
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Registro de Usuario</h2>

        {firebaseError && <p className="error">{firebaseError}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="email"
            placeholder="Correo"
            className="input"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Correo inválido"
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            className="input"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres"
              }
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="input"
            {...register("confirmPassword", {
              required: "Debes confirmar la contraseña",
              validate: (value) => value === password || "Las contraseñas no coinciden"
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

          <button type="submit" className="btn register-btn" disabled={loading}>
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
  );
}