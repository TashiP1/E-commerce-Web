import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addCartItem, cartItems } = useContext(ShopContext);

  const cartItemAount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addCartItem(id)}>
        Add To Cart {cartItemAount > 0 && <> ({cartItemAount})</>}
      </button>
    </div>
  );
};
