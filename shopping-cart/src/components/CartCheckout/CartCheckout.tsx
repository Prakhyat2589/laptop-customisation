import React, { useState } from "react";
import styles from "../Items/Items.module.css";
import CartItems from "./CartItems";
interface IsecondChildProps {
  cartItems: any[];
  // quantity: number;
}

const CartCheckout: React.FC<IsecondChildProps> = ({ cartItems }) => {
  const [showMessage, setShowMessage] = useState(false);

  const cartTotal = cartItems.reduce(
    (total: number, { price = 0 }) => total + price,
    0
  );

  const totalItems = cartItems.reduce(
    (total: number, { quantity = 0 }) => total + quantity,
    0
  );

  const buyItem = () => {
    setShowMessage(true);
  };

  return (
    <>
      <ul>
        {cartItems.length &&
          cartItems.map((cartItem: any, idx) => {
            return <CartItems key={idx} cartItem={cartItem} />;
          })}
      </ul>
      <div>
        <h3>Total: £{cartTotal}</h3>
      </div>
      <div>
        <h4>Total Items: {totalItems}</h4>
      </div>
      <button className={styles.buyButton} onClick={buyItem}>
        Buy now
      </button>
      {showMessage && (
        <div>
          <p>Items bought. Process completed!</p>
        </div>
      )}
    </>
  );
};

export default CartCheckout;
