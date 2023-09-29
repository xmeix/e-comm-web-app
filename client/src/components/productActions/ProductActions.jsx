import "./ProductActions.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addProductToWishlist } from "../../store/slices/wishlistSlice";
const ProductActions = ({ item }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTo = async (where) => {
    console.log("here", item.product);

    if (item.product && item.chosenColor && item.chosenSize) {
      const toastLoading = toast.loading(`adding product to ${where}!`);
      if (where === "cart") {
        // verify if product.option.includes size ==> verify size if empty , same for color
        // for now we need to verify both
        await dispatch(addProductToCart(item));
      } else if (where === "cart" && item.quantity === 0) {
        toast.error("Error, Try later!");
      } else if (where === "wishlist") {
        await dispatch(addProductToWishlist({ product: item.product }));
      }
      await toast.dismiss(toastLoading);
      toast.success(`Product has been added to ${where}!`);
    } else if (item.chosenColor === null) {
      toast.error("You need to choose a color!");
    } else if (item.chosenSize === null) {
      toast.error("You need to choose a size!");
    } else {
      toast.error("Unknown Error!");
    }
  };

  return (
    <div className="product-buttons">
      <button
        className="special-btn"
        disabled={!isLoggedIn || item.product?.stock === 0}
      >
        <span>
          {item.product?.stock === 0
            ? "OUT OF STOCK"
            : !isLoggedIn
            ? " Buy ( you have to login first )"
            : "Buy"}
        </span>
        <SellRoundedIcon className="icon-btn" />
      </button>
      <button
        disabled={item.product?.stock === 0}
        onClick={() => handleAddTo("cart")}
      >
        <span> Add to cart</span>
        <ShoppingCartRoundedIcon className="icon-btn" />
      </button>
      <button
        disabled={item.product?.stock === 0}
        onClick={() => handleAddTo("wishlist")}
      >
        <span>Add to wishlist</span>
        <FavoriteRoundedIcon className="icon-btn" />
      </button>
    </div>
  );
};

export default ProductActions;
