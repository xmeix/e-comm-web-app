import "./ProductActions.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useSelector } from "react-redux";

const ProductActions = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="product-buttons">
      <button className="special-btn" disabled={!isLoggedIn}>
        <span>Buy {!isLoggedIn && "(you have to login first)"}</span>
        <SellRoundedIcon className="icon-btn" />
      </button>
      <button>
        <span> Add to cart</span>
        <ShoppingCartRoundedIcon className="icon-btn" />
      </button>
      <button>
        <span>Add to wishlist</span>
        <FavoriteRoundedIcon className="icon-btn" />
      </button>
    </div>
  );
};

export default ProductActions;
