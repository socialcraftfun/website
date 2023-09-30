import React, {useContext} from "react";

import styles from '../../styles/Donate.module.css';
import PurchaseBar from "./PurchaseBar";
import PurchasePanel from "./PurchasePanel";
import {observer} from "mobx-react-lite";
import {Context} from "./Donate";
import DonatePanel from "./DonatePanel";

const InfoPanel = observer(() => {
    const store = useContext(Context);
    const donate = store.donate;
    const categoryId = donate.getCategoryById(donate.selectedCategory).id_text;

    if (categoryId === "donate") {
        return (
            <div className={`${styles.info} flex justify-center`}>
                <DonatePanel></DonatePanel>
            </div>
        );
    } else if (categoryId === "status") {
        return (
            <div className={styles.info}>
                <PurchaseBar/>
                {/* Right side*/}
                <div className={styles.rightSide}>
                    <PurchasePanel></PurchasePanel>
                </div>
            </div>
        );
    }
});

export default InfoPanel;