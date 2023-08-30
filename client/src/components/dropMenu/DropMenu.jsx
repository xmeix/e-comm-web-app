import { useDispatch, useSelector } from "react-redux";
import "./DropMenu.css";
import { logout } from "../../store/apiCalls/auth";
import { NavLink, useNavigate } from "react-router-dom";
const DropMenu = ({ reference }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
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
        {isLoggedIn && (
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
        </NavLink>{" "}
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
