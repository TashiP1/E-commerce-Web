import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addCartItem, removeCartItem, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeCartItem(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addCartItem(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
