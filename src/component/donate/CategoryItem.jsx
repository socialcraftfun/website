import React from "react";

import styles from '../../styles/Donate.module.css';

export function CategoryItem({item, onClick, active, ...props}) {
  return (
      <div
      className={`${active ? `${styles.active}` : ''} ${styles.categoryItem}`}
      onClick={onClick}
      id={item.id_text}>
            {item.name}
      </div>
  );
}
