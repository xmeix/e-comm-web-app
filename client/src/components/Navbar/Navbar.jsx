import "./Navbar.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch, useSelector } from "react-redux";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logout } from "../../store/apiCalls/auth";
import DropMenu from "../dropMenu/DropMenu";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { user, loading, isLoggedIn } = useSelector((state) => state.auth);
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const dispatch = useDispatch();
  const subMenuRef = useRef(null);

  const toggleDropMenu = () => {
    setOpenDropMenu(true);
  };

  const handleOutsideClick = (event) => {
    if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
      setOpenDropMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">BledBay</div>
      <div className="nav-p-items">
        <SearchRoundedIcon className="nav-icon" />

        <PersonRoundedIcon className="nav-icon" onClick={toggleDropMenu} />

        {openDropMenu && <DropMenu reference={subMenuRef} />}
        <div className="cart-icon-container">
          <ShoppingBasketRoundedIcon className="nav-icon" />
          <span className="cart-item-count">{5}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
