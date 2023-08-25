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
          <li className="drop-menu-li">
            <NavLink to={"/profile"}>your profile</NavLink>
          </li>
        )}
        <li className="drop-menu-li">
          <NavLink to={"/cart"}>your cart</NavLink>
        </li>
        {isLoggedIn && (
          <li className="drop-menu-li">
            <NavLink to={"/orders"}>your orders</NavLink>
          </li>
        )}
        <li className="drop-menu-li">
          <NavLink to={"/categories"}>categories</NavLink>
        </li>{" "}
        <li className="drop-menu-li">
          <NavLink to={"/shop"}>articles</NavLink>
        </li>
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
