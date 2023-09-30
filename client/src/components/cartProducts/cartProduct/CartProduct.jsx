import "./CartProduct.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart } from "../../../store/slices/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCart = () => {
    dispatch(
      deleteProductFromCart({
        productId: product.id,
        chosenColor: product.chosenColor,
        chosenSize: product.chosenSize,
      })
    );
  };

  return (
    <tr className="cart-product">
      <td className="cart-product-info">
        <div className="cart-product-image">
          <img src={product.images[0]}></img>
        </div>
        <div className="cart-product-details">
          <div className="cart-product-title">{product.title}</div>
          <div className="cart-product-id">#{product.id}</div>
          <div className="cart-product-options">
            <div
              className="cart-product-color"
              style={{ backgroundColor: product.chosenColor }}
            ></div>
            <div className="cart-product-size">{product?.chosenSize}</div>
          </div>
        </div>
      </td>
      <td className="cart-product-price">
        {product?.price.toFixed()}
        DA
      </td>
      <td className="cart-product-qty">x{product?.quantity}</td>
      <td className="cart-product-total">{product?.total}DA</td>
      <td>
        <CloseRoundedIcon
          className="cart-icon-btn"
          onClick={() => handleDeleteFromCart()}
        />
      </td>
    </tr>
  );
};

export default CartProduct;
