import CartProducts from "../../components/cartProducts/CartProducts";
import "./Cart.css";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1 className="cart-title">My Cart</h1>
        <button className="continue-shopping">
          <ArrowBackRoundedIcon />
          Continue shopping
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty!</div>
      ) : (
        <CartProducts />
      )}
      {/* Shipping and checkout */}
    </div>
  );
};

export default Cart;
