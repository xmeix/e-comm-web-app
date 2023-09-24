import "./ProductActions.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const ProductActions = ({ product, quantity }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (product && quantity !== 0) {
      const toastLoading = toast.loading("adding product to cart!");
      await dispatch(addProductToCart({ product, quantity }));
      await toast.dismiss(toastLoading);
      toast.success("Product has been added to cart!");
    } else toast.error("Error, Try later!");
  };

  return (
    <div className="product-buttons">
      <button
        className="special-btn"
        disabled={!isLoggedIn || product?.stock === 0}
      >
        <span>
          {product?.stock === 0
            ? "OUT OF STOCK"
            : !isLoggedIn
            ? " Buy ( you have to login first )"
            : "Buy"}
        </span>
        <SellRoundedIcon className="icon-btn" />
      </button>
      <button disabled={product?.stock === 0} onClick={() => handleAddToCart()}>
        <span> Add to cart</span>
        <ShoppingCartRoundedIcon className="icon-btn" />
      </button>
      <button disabled={product?.stock === 0}>
        <span>Add to wishlist</span>
        <FavoriteRoundedIcon className="icon-btn" />
      </button>
    </div>
  );
};

export default ProductActions;
