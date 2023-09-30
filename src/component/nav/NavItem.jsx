import React from 'react';

function NavItem(props) {
	return (
		<li className="relative grid rounded-full transition -my-2 px-4 py-2 font-[550] text-zinc-200 hover:bg-zinc-800 hover:text-white">
			{props.element}
		</li>
	)
}

export default NavItem;