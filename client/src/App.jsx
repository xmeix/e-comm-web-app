import "./App.css";
import { Route, Routes, NavLink, Router } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import { loginGoogle } from "./store/apiCalls/auth";
import axios from "axios";

const Shop = lazy(() => import("./pages/shop/Shop"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const Categories = lazy(() => import("./pages/categories/Categories"));

function App() {
  const { isLoggedIn, loading, error, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getUser() {
      await axios
        .get("http://localhost:3001/user/", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(loginGoogle(res.data));
        });
    }
    if (localStorage.getItem("wait") === "true") {
      localStorage.setItem("wait", "false");
      getUser();
    }
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              {isLoggedIn ? <Categories /> : <LoginPage />}
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              {isLoggedIn ? <Profile /> : <LoginPage />}
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              {isLoggedIn ? <Profile /> : <LoginPage />}
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              {isLoggedIn ? <Profile /> : <LoginPage />}
            </Suspense>
          }
        />
        <Route
          path="/orders"
          element={
            <Suspense fallback={<Loading />}>
              {isLoggedIn ? <Orders /> : <LoginPage />}
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
