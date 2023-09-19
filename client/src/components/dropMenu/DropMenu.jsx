import { useDispatch, useSelector } from "react-redux";
import "./DropMenu.css";
import { logout } from "../../store/apiCalls/auth";
import { NavLink, useNavigate } from "react-router-dom";
const DropMenu = ({ reference }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const menuItems = [
    {
      title: "Your Profile",
      path: "/profile",
      ifloggedIn: true,
    },
    {
      title: "Your Cart",
      path: "/cart",
      ifloggedIn: false,
    },
    {
      title: "Your Orders",
      path: "/orders",
      ifloggedIn: true,
    },
    {
      title: "Home",
      path: "/",
      ifloggedIn: false,
    },
    {
      title: "Shop",
      path: "/categories",
      ifloggedIn: false,
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div ref={reference} className="drop-menu">
      <ul className="drop-menu-ul">
        {isLoggedIn &&
          menuItems
            .filter((e) => e.ifloggedIn === true)
            .map((e) => (
              <NavLink className="drop-menu-li" to={e.path}>
                {e.title}
              </NavLink>
            ))}
        {menuItems
          .filter((e) => e.ifloggedIn !== true)
          .map((e) => (
            <NavLink className="drop-menu-li" to={e.path}>
              {e.title}
            </NavLink>
          ))}
        {/* {isLoggedIn && (
          <NavLink className="drop-menu-li" to={"/profile"}>
            your profile
          </NavLink>
        )}
        <NavLink to={"/cart"} className="drop-menu-li">
          your cart
        </NavLink>
        {isLoggedIn && (
          <NavLink to={"/orders"} className="drop-menu-li">
            your orders
          </NavLink>
        )}{" "}
        <NavLink to={"/"} className="drop-menu-li">
          home
        </NavLink>
        <NavLink to={"/categories"} className="drop-menu-li">
          categories
        </NavLink>{" "} */}
      </ul>

      <div className="hr" />
      <button
        className="drop-menu-btn"
        onClick={isLoggedIn ? handleLogout : handleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default DropMenu;
