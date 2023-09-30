import "./CartShippingCheckout.css";
const CartShoppingCheckout = () => {
  return (
    <div className="cart-shipping-checkout">
      <div className="cart-shipping">
        <h5>Choose shipping mode: </h5>
        <div className="radio-container">
          <input type="radio" id="store" name="shipping" />
          <label htmlFor="store">Store pickup</label>
        </div>
        <div className="radio-container">
          <input type="radio" id="home" name="shipping" />
          <label htmlFor="home">Delivery at home</label>
        </div>

        <div className="radio-container">
          <input type="radio" id="ondeliv" name="shipping" />
          <label htmlFor="ondeliv">payement on delivery</label>
        </div>
      </div>
      <div className="cart-checkout">
        
      </div>
    </div>
  );
};

export default CartShoppingCheckout;
