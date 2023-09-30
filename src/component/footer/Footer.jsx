import React from 'react'

import { Logo } from '../Logo';

export function Footer() {
	return(
		<footer className='bg-zinc-900 border-t-2 border-gray-800 mt-7 py-6'>
			<div className="container px-6 mx-auto flex items-center">
				<Logo></Logo>
				<div className='lg:flex w-full'>
					{/* Дескришен */}
					<div className='mr-auto'></div>
					{/* Links */}
					<div className='text-gray-200 text-sm ml-auto sm:ml-4 sm:py-2 sm:mt-0 mt-4 lg:text-right'>
						<ul>
							<li className='hover:text-blue-600 transition' >
								<a href="/contacts">Контакты</a>
							</li>
							<li className='hover:text-blue-600 transition'>
								<a href="/terms-of-service">Пользовательское соглашения</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}