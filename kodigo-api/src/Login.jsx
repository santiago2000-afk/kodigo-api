import { useForm } from "react-hook-form";
import { registerUser, loginUser } from "./auth";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onRegister = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("Usuario registrado ✅");
      navigate("/"); // Redirige a Landing
    } catch (error) {
      alert(error.message);
    }
  };

  const onLogin = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Sesión iniciada ✅");
      navigate("/"); // Redirige a Landing
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Iniciar sesión</h2>

        {/* Formulario */}
        <form className="login-form">
          <input
            type="email"
            placeholder="Correo"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Correo inválido",
              },
            })}
            className="input"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            })}
            className="input"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <div className="btn-group">
            <button
              type="button"
              className="btn register-btn"
              disabled={isSubmitting}
              onClick={handleSubmit(onRegister)}
            >
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
            <button
              type="button"
              className="btn login-btn"
              disabled={isSubmitting}
              onClick={handleSubmit(onLogin)}
            >
              {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}