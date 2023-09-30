import React, {useState} from "react";

import styles from '../../styles/Donate.module.css';
import ModalDonate from "../modal/ModalDonate";
import fetchApi from "../../lib/api";

const DonatePanel = () =>{
    let [showModalDonate, setShowModalDonate] = useState(false);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [paysystem, setPaysystem] = useState('');
    const [currency, setCurrency] = useState('UAH');

    const onSubmit = e => {
        console.log('Sent form')
    };

    const handleConfirmClick = (e) => {
        setShowModalDonate(true)
    }

    const handlePaysystemChange = (id) => {
        setPaysystem(id);

        if (id === 'diaka') {
            setCurrency('UAH');
        } else if (id === 'payok') {
            setCurrency('RUB');
        }
    }
    //  я хочу все переписать пхп
    return (
        <div className={`${styles.item} p-5`}>
            <div></div>
            <form id='donate-form' action="/payment/transaction.php"
                className="flex flex-col gap-4">
                <div className="flex flex-row gap-8">
                    <input
                        type="hidden"
                        name="currency"
                        value={currency}/>
                    <input
                        type="hidden"
                        name="method"
                        value={paysystem}/>
                    <input
                        className={`${styles.formControl} w-3/4`}
                        type="text"
                        name="name"
                        placeholder="Ваш ник"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required/>
                    <input
                        className={`${styles.formControl} w-1/4`}
                        type="number"
                        name="amount"
                        placeholder="Сума"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        min="1"
                        step="1"
                        required/>
                </div>
                <textarea
                    className={styles.formControl}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    name="message"
                    placeholder="Сообщение"/>
                <button
                    type="button"
                    className="form_button"
                    onClick={handleConfirmClick}>
                    Поддержать сервер
                </button>
            </form>

            <ModalDonate
                open={showModalDonate}
                close={() => setShowModalDonate(false)}
                onSubmit={onSubmit}
                paysystem={paysystem}
                setPaysystem={handlePaysystemChange}
            />

        </div>
    );
}

export default DonatePanel;