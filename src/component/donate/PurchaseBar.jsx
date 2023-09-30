import React, { useContext } from "react";
import { PurchaseItem } from './PurchaseItem';
import { observer } from "mobx-react-lite";

import styles from '../../styles/Donate.module.css';
import { Context } from './Donate';

const PurchaseBar = observer(() => {
	const store = useContext(Context);

  return (
    <div className={`${styles.leftSide} no-scrollbar`}>
      {store.donate.items.map((item) => (
        <PurchaseItem
						item={item}
						currency={store.donate.currency}
						onClick={() => store.donate.setSelectedItem(item.id)}
						active={store.donate.selectedItem === item.id ? true: false}
						key={item.id}
						/>
      ))}
    </div>
  );
});

export default PurchaseBar;