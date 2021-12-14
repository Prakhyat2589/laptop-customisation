import React from "react";
import styles from "./Items.module.css";

interface IfirstChildProps {
  tools: any;
  selectedItemPrice: (arg: {}) => void;
}

const Items: React.FC<IfirstChildProps> = ({ tools, selectedItemPrice }) => {
  const buyItem = (e: any) => {
    let price = e.target.dataset.price;

    let itemSelected;

    if (price !== undefined) {
      itemSelected = {
        item: e.target.dataset.item,
        price: parseInt(e.target.dataset.price),
        quantity: parseInt(e.target.dataset.quantity),
      };
    } else {
      itemSelected = {
        item: e.target.parentElement.dataset.item,
        price: parseInt(e.target.parentElement.dataset.price),
        quantity: parseInt(e.target.parentElement.dataset.quantity),
      };
    }
    selectedItemPrice(itemSelected);
  };

  return (
    <>
      <h4>{tools.component_title}</h4>
      <ul className={styles.listStyle}>
        {tools.component_list &&
          tools.component_list.map((list: any, index: number) => {
            return (
              <li
                key={index}
                className={styles.componentOptions}
                data-price={list.component_price}
                data-item={list.component_name}
                data-quantity={list.quantity}
                data-screen-id={index}
                onClick={buyItem}
              >
                <span>{list.component_name}</span>
                <span>£{list.component_price}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Items;
