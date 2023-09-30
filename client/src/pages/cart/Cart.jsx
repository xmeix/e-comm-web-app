import CartProducts from "../../components/cartProducts/CartProducts";
import "./Cart.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CartShoppingCheckout from "./cartShippingCheckout/CartShippingCheckout";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1 className="cart-title">My Cart</h1>
        <NavLink to={"/shop"} className="continue-shopping navlink">
          <ArrowBackRoundedIcon />
          Continue shopping
        </NavLink>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty!</div>
      ) : (
        <CartProducts />
      )}
      {/* Shipping and checkout */}
      <CartShoppingCheckout />
    </div>
  );
};

export default Cart;
