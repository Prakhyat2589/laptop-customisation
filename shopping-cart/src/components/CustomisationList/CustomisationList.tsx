import { useState, useMemo } from "react";
import styles from "./CustomisationList.module.css";
import { Tools } from "../../types";
import Items from "../Items/Items";
import CartCheckout from "../CartCheckout/CartCheckout";
import { useFetchData } from "../../services/DataServices";

const CustomisationList = () => {
  const { data } = useFetchData<Tools[]>("/list");

  const toolsList = useMemo(() => data || [], [data]);

  const [cartItems, setCartItems] = useState<any[]>([]);

  const selectedItemPrice = (itemSelected: any) => {
    setCartItems((currentCart) => [...currentCart, itemSelected]);
  };

  return (
    <div className={styles.wrapper}>
      {toolsList && toolsList.length ? (
        <div className={styles.choices}>
          <h2>Customisation Choices</h2>
          {toolsList.map((tools, idx) => {
            return (
              <div key={idx}>
                <Items tools={tools} selectedItemPrice={selectedItemPrice} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h3>No records found. Please try again later</h3>
        </div>
      )}
      {cartItems && cartItems.length ? (
        <div className={styles.choices}>
          <h2>Summary</h2>
          <CartCheckout cartItems={cartItems} />
        </div>
      ) : null}
    </div>
  );
};

export default CustomisationList;
