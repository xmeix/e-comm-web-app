import "./CartProducts.css";
import { useSelector } from "react-redux";
import CartProduct from "./cartProduct/CartProduct";

const CartProducts = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <table className="cart-products">
      <thead className="cart-table-header">
        <th>Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
        <th></th>
      </thead>
      <tbody className="cart-table-body">
        {cart.map((product, i) => (
          <CartProduct key={i} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default CartProducts;
