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

  // ___________REFRESH_IN_ALL_TABS:LOGIN/REGISTER_CASES_________________________________________

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleStorageChange = async (event) => {
    if (event.key === "isLoggedIn") {
      handleRefresh();
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // ____________________________________________________________________
  const publicRoutes = [
    { path: "/", component: Categories },
    { path: "/shop", component: Shop },
    { path: "/categories", component: Categories },
    { path: "/cart", component: Cart },
  ];

  const conditionalRoutes = [
    {
      path: "/login",
      component: isLoggedIn ? Categories : LoginPage,
    },
    {
      path: "/profile",
      component: isLoggedIn ? Profile : LoginPage,
    },
    {
      path: "/orders",
      component: isLoggedIn ? Orders : LoginPage,
    },
  ];

  const routes = [
    ...publicRoutes,
    ...conditionalRoutes,
    { path: "*", component: Categories },
  ];
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
