import React from 'react'

import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'; 
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import {toast} from "sonner";

export function Header() {

	const copy = () => {
		navigator.clipboard.writeText("play.socialcraft.fun").then(
			() => {
				toast.success("IP сервера скопирован");
			},
			() => {
				prompt('Скопируйте IP', 'play.socialcraft.fun')
			}
		);
	}

	return(
		<header className='bg-gray-900 flex justify-center'>
			<div className='header '>
				<h1 className='mb-8 font-manrope font-extrabold md:text-6xl'>Social<span className='text-blue-700'>Craft</span></h1>
				<p className='mb-8 max-w-xl text-center leading-relaxed'>От маленьких шагов в игре - к большим в жизни</p>
				<div className='mb-8 flex md:gap-6'>
					<a className='rounded-button' href="#donate" >
						<CartIcon className='h-5 w-5'/>
						Поддержать сервер донатом
					</a>
					<button
						onClick={copy}
						className='rounded-button accent bg-shine animate-shine' >
						<CopyIcon className='h-5 w-5'/>
						Скопировать IP
					</button>
				</div>
				<div className='flex items-center gap-2 text-sm' aria-label='Сервер работает на версии Minecraft: Java Edition 1.20 или Bedrock. Лицензия необязательна для игры на сервере.'>
					1.20.1<span>·</span>Minecraft: Java Edition<span>·</span>Bedrock
				</div>
			</div>
		</header>
	);
}