import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";

function App() {
  const { isLoggedIn, loading, error, user } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="app">
      {isLoggedIn && <Navbar />}
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && "Home!!!"}
    </div>
  );
}

export default App;
