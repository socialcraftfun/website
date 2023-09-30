import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import styles from '../../styles/Donate.module.css';
import preview from '../../styles/Preview.module.css';

import { Context } from './Donate';

const PurchasePanel = observer(() => {

	const store = useContext(Context);

	let id = store.donate.selectedItem;
    const item = store.donate.getItemById(id);
  return (
    <div className={styles.previewItem}>
      {/* preview-title */}
      <div className={preview.header}>
        {/* donate-name */}
        <div>
          <span className="text-sm font-light">Вы выбрали</span>
          <p id="name" className="text-xl font-medium">
              {item.name}
          </p>
        </div>
        {/* donate price */}
        <div className={`${styles.price} text-2xl`}>
          <span id="price">{item.price}</span>
          <span className="text-sky-500" id="currency">
            грн
          </span>
        </div>
      </div>
      {/* preview-details */}
      <div className={`${preview.details} no-scrollbar`}>
        <h3 className="font-semibold text-2xl mb-2">Описание товара</h3>
        <p className="pl-2"
						dangerouslySetInnerHTML={{__html: item.description}}>
        </p>
      </div>
      {/* preview-form */}
      <form className={preview.form} action="">
				<div className="flex h-full items-center justify-end">
					<a className="rounded-button accent" href="/">Подтвердить оплату</a>
				</div>
			</form>
    </div>
  );
});

export default PurchasePanel;
