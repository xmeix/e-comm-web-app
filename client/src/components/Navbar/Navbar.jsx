import "./Navbar.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">BledBay</div>
      <div className="nav-p-items">
        {" "}
        <SearchRoundedIcon className="nav-icon" />
        <PersonRoundedIcon className="nav-icon" />
        <div className="cart-icon-container">
          <ShoppingBasketRoundedIcon className="nav-icon" />
          <span className="cart-item-count">{5}</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
