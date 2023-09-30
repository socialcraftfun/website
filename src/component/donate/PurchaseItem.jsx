import React from "react";

import styles from '../../styles/Donate.module.css';

// item - цена и тайтл
export function PurchaseItem({item, currency, onClick, active, ...props}) {
  return (
      <div
	  className={`${active ? `${styles.active}` : ''} ${styles.donateItem}`}
	  onClick={onClick}>
		  {item.name}
		  <div className={styles.price}>
			  <span id="price">{item.price}</span>
			  <span className="text-sky-500" id="currency">
				  {getCurrency(currency)}
              </span>
        	</div>
	  </div>
  );
}

function getCurrency(id) {
	switch (id) {
		case 'RUB':
			return 'руб';
		case 'UAH':
			return 'грн';
		default:
			return id;
	}
}