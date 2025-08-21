import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { useAuth } from "./useAuth";
import Login from "./Login";
import Landing from "./Landing";
import Header from "./Header";
import Register from "./Register";
import Dashboard from "./Dashboard";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Cargando...</p>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <Landing />
            </PrivateRoute>
          } />
          <Route path="/register" element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}