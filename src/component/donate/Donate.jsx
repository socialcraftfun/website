import React, { createContext } from 'react'


import styles from '../../styles/Donate.module.css';
import DonateStore from '../../store/DonateStore';
import CategoryBar from "./CategoryBar";
import InfoPanel from "./InfoPanel";

export const Context = createContext(null);

export function Donate() {

	return(
		<section className='pt-24 pb-36 bg-zinc-900'>
			<div className="container px-6 mx-auto flex flex-col gap-5">
				<h2 className={styles.title}>
					Задонатить
				</h2>

				{/* Компонент туду */}
				<Context.Provider value={{
					donate: new DonateStore()
				}}>
					<div className={styles.donate}>
						{/* Categories TODO */}
						<CategoryBar></CategoryBar>

						{/* Info */}
						<InfoPanel></InfoPanel>
					</div>
				</Context.Provider>
			</div>
		</section>
	);
}