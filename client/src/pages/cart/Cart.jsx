import CartProducts from "../../components/cartProducts/CartProducts";
import "./Cart.css";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-title">My Cart</div>
        <button className="continue-shopping"><ArrowBackRoundedIcon/>Continue shopping</button>
      </div>
      <CartProducts />
      {/* Shipping and checkout */}
    </div>
  );
};

export default Cart;
