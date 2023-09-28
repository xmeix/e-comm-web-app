import "./CartProduct.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const CartProduct = ({ product }) => {
  return (
    <tr className="cart-product">
      <td>
        <img src={product.images[0]} className="product-image"></img>
        <div className="cart-product-details">
          <div className="cart-product-title">{product.title}</div>
          <div className="cart-product-id">#{product.id}</div>
          <div className="cart-product-options">
            <div className="cart-product-option">{product?.chosenColor}</div>
            <div className="cart-product-option">{product?.chosenSize}</div>
          </div>
        </div>
      </td>
      <td className="cart-product-price">
        {product?.price.toFixed()}
        DA
      </td>
      <td className="cart-product-qty">{product?.quantity}</td>
      <td className="cart-product-total">{product?.total}</td>
      <td className="cart-product-total">
        <CloseRoundedIcon />
      </td>
    </tr>
  );
};

export default CartProduct;
