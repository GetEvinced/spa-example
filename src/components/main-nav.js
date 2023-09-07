import React from 'react';

import {
	NavLink
  } from "react-router-dom";


function anchorWithIssues(path, page, name) {
	return (
		<a className={path === page ? 'current top-nav' : 'top-nav'} href={page}>
			{name}
		</a>
	);
}
const A11yMainNav = () => {

	return (
		<nav aria-label="main">
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/about'>About US</NavLink></li>
				<li><NavLink to='/services'>services</NavLink></li>
				<li><NavLink to='/partners'>partners</NavLink></li>
				<li><NavLink to='/customers'>customers</NavLink></li>
				<li><NavLink to='/projects'>projects</NavLink></li>
				<li><NavLink to='/careers'>careers</NavLink></li>
				<li><NavLink to='/contact'>contact</NavLink></li>
			</ul>
		</nav>
	);
};

export default A11yMainNav;
