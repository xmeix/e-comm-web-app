import "./ProductActions.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const ProductActions = () => {
  return (
    <div className="product-buttons">
      <button className="special-btn">
        <span>Buy</span> <SellRoundedIcon className="icon-btn" />
      </button>
      <button>
        {" "}
        <span> Add to cart</span>{" "}
        <ShoppingCartRoundedIcon className="icon-btn" />
      </button>
      <button>
        <span>Add to wishlist</span>{" "}
        <FavoriteRoundedIcon className="icon-btn" />
      </button>
    </div>
  );
};

export default ProductActions;
