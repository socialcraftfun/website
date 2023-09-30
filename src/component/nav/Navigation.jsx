import React from "react";
import NavItem from './NavItem';
import Socials from './Socials';
import Link from './NavLink';

import Logo from '../../assets/image/logo.png';


export function Navigation() {

	return (
		<nav className="fixed z-50 flex h-16 w-full select-none items-center border-b-0 border-transparent backdrop-filter backdrop-blur-lg opacity-90 bg-gradient-to-b from-neutral-900">
			<div className="container px-6 mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6">
				<div className="flex items-center justify-start">
					<a className="block" href="/" aria-label="На главную страницу">
						<img className="max-h-10" src={Logo} alt="SC" />
					</a>
				</div>
				
				<ul className="lg:flex place-items-center gap-3.5 lg:text-sm xl:text-base sm:flex mt-16 sm:mt-0"
				>
					<NavItem element={<Link value={{title: "Главная", link: "/"}}/>}/>
					<NavItem element={<Link value={{title: "Форум", link: "/forum"}}/>}/>
					<NavItem element={<Link value={{title: "Правила", link: "/forum/rules"}}/>}/>
					{/*<NavItem element={<Link value={{title: "О сервере", link: "about"}}/>}/>*/}
					{/*<NavItem element={<Link value={{title: "Карта", link: "map"}}/>}/>*/}
					<NavItem element={<Socials/>}/>
				</ul>
			</div>
		</nav>
	)
}