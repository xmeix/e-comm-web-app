import "./Navbar.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch, useSelector } from "react-redux";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logout } from "../../store/apiCalls/auth";

const Navbar = () => {
  const { user, loading, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar">
      <div className="nav-logo">BledBay</div>
      <div className="nav-p-items">
        <SearchRoundedIcon className="nav-icon" />
        {isLoggedIn && <PersonRoundedIcon className="nav-icon" />}
        <div className="cart-icon-container">
          <ShoppingBasketRoundedIcon className="nav-icon" />
          <span className="cart-item-count">{5}</span>
        </div>
        {isLoggedIn && (
          <button className="form-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
