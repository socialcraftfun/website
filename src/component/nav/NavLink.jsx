import React from 'react'

function NavLink(props) {
	return(
		<a href={props.value.link}>{props.value.title}</a> 
	)
}

export default NavLink;