import "./CartProducts.css";
import { useSelector } from "react-redux";
import CartProduct from "./cartProduct/CartProduct";

const CartProducts = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <table className="cart-products">
      <th className="cart-table-header">
        <td colSpan={2}>Product</td>
        <td colSpan={2}>Price</td>
        <td colSpan={2}>Qty</td>
        <td colSpan={2}>Total</td>
      </th>
      <tbody>
        {cart.map((product) => (
          <CartProduct product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default CartProducts;
