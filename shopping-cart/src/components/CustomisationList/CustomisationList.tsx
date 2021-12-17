import React, { useState, useMemo, useEffect } from "react";
import styles from "./CustomisationList.module.css";
import { Tools } from "../../types";
import Items from "../Items/Items";
import CartCheckout from "../CartCheckout/CartCheckout";
import fetchData from "../../services/DataServices";

const CustomisationList: React.FC = () => {
  const [dataList, setDataList] = useState<Tools[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const getData = async () => {
    const res = await fetchData("/list");
    setDataList(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const toolsList = useMemo(() => dataList || [], [dataList]);

  /* istanbul ignore next */
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
              <div key={idx} data-testid="customisationlist">
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
