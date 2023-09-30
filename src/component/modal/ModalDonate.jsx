import React from "react"
import {Dialog} from "@headlessui/react"
import './modal.css'
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as BuyIcon } from "../../assets/icons/buy.svg";

import styles from './Modal.module.css';

const ModalDonate = ({open, close, onSubmit, paysystem, setPaysystem}) => {
    const handeChange = (id) => {
        setPaysystem(id);
    }

    let user = {
        client_country: 'UA'
    };
    const psVisible = paysystems.filter(p => !p.filter || p.filter.test(user))


    return (
        <Dialog
            open={open}
            onClose={close}
        >
            <div className="fixed inset-0 transition bg-zinc-800/75 backdrop-blur opacity-100"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center">
                <Dialog.Panel
                    className={styles.panel}>
                    <div className={styles.title}>
                        <Dialog.Title className="font-manrope font-semibold">Выберите способ оплаты</Dialog.Title>
                        <button
                            onClick={close}>
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <ul className={styles.listGroup}>
                        {psVisible.map(e => {
                            return <PaysystemListElement
                                key={e.id}
                                paysystem={e}
                                checked={paysystem === e.id}
                                onChange={() => setPaysystem(e.id)}
                            />
                        })}
                    </ul>
                    <button
                        form="donate-form"
                        onClick={onSubmit}
                        className="form_button min-w-[50%] m-auto"
                        >
                        <BuyIcon/>
                        Перейти к оплате
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    )

}

const ThemedPaysystemImage = ({ img, ...props }) => {

    return <img src={`/assets/image/paysystem/${img}`} alt={props.alt} className="h-8" />
}

// eslint-disable-next-line no-unused-vars
const logos = {
    visa: <ThemedPaysystemImage img="Visa_Brandmark_Blue_RGB_2021.png" />,
    mastercard: <ThemedPaysystemImage img="mastercard-securecode.png" />,
    googlepay: <ThemedPaysystemImage img="google-pay.svg" />,
    iomoney: <ThemedPaysystemImage img="iomoney.svg" />,
    mir: <ThemedPaysystemImage img="mir.svg" />,
}

const paysystems = [
    {
        id: 'diaka',
        description: '(Visa / Mastercard)',
        img: <ThemedPaysystemImage img="logo_diaka.svg" alt="Diaka.ua"/>,
        logos: ['visa', 'mastercard'],
        filter: {
            test: user => !['RU', 'BY'].includes(user.client_country),
            message: 'Недоступно в РФ и Беларуси',
        },
    },
    // {
    //     id: 'da',
    //     description: '(Visa / Mastercard / МИР, Криптовалюты)',
    //     img: <ThemedPaysystemImage img="icon_DA.svg" alt="DonationAlerts"/>,
    //     logos: ['visa', 'mastercard'],
    //     filter: {
    //         test: user => !['RU', 'BY'].includes(user.client_country),
    //         message: 'Для РФ и Беларуси',
    //     },
    // },
    {
        id: 'payok',
        description: 'Для РФ и Беларуси',
        img: <ThemedPaysystemImage img="logo_payok_dark.svg" alt="paypalych"/>,
        logos: ['visa', 'mastercard'],
        filter: {
            test: user => !['RU', 'BY'].includes(user.client_country),
            message: 'Для РФ и Беларуси',
        },
    }
]

// TODO передалть на headlessui
const PaysystemListElement = ({paysystem, checked, onChange}) => {

    return (
    <li className={styles.listGroupItem}>
        <div className={styles.formCheck}>
            <input
                type="radio"
                id={paysystem.id}
                name={paysystem.id}
                checked={checked}
                onChange={onChange}
            />
            <label className="w-full" htmlFor={paysystem.id}>
                <div className="">
                    {paysystem.img}
                </div>
                <p>{paysystem.description}</p>
            </label>
        </div>
    </li>
    )
}

export default ModalDonate;