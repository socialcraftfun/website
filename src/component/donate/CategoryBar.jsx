import React, { useContext } from "react";
import { CategoryItem } from './CategoryItem';
import { observer } from "mobx-react-lite";

import styles from '../../styles/Donate.module.css';
import { Context } from './Donate';

const CategoryBar = observer(() => {
    const store = useContext(Context);
    const donate = store.donate;
    return (
        <div className={styles.category}>
            {donate.types.map((type) => (
                <CategoryItem
                    item={type}
                    onClick={() => donate.setSelectedCategory(type.id)}
                    active={donate.selectedCategory === type.id}
                    key={type.id}
                />
            ))}
        </div>
    );
});

export default CategoryBar;