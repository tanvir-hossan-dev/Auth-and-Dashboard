import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar/Navbar";
import useAuth from "./hooks/useAuth";
import useAuthChecked from "./hooks/useAuthChecked";
import Home from "./pages/Home";
import PrivateRoute from "./specialroutes/PrivateRoute";
import PublicRoute from "./specialroutes/PublicRoute";

function App() {
  const authChecked = useAuthChecked();

  const auth = useAuth();

  return !authChecked ? (
    <h1>Loading...</h1>
  ) : (
    <Router>
      {auth && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/home" element={<PrivateRoute>{/* <Home /> */}</PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
