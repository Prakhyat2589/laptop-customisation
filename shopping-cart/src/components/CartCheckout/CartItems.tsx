import React from "react";
import styles from "../Items/Items.module.css";

interface CartItemsProps {
  cartItem: any;
}

const CartItems: React.FC<CartItemsProps> = ({ cartItem }) => {
  return (
    <>
      <li
        className={styles.componentOptions}
        data-price={cartItem.item}
        data-item={cartItem.price}
      >
        <span>{cartItem.item}</span>
      </li>
    </>
  );
};

export default CartItems;
