import React, {useContext} from 'react';
import { Link  } from "react-router-dom";

import Logo from './svg/logo';
import MainNav from './main-nav';
import {
	UserIcon
} from '../components/svg/icons';
import '../styles/components/header.css';



const Header = (props) => {

	return (
		<header className="row">
			<div className="row header__top">
				<a href="/" className="logo__link">
					<Logo /> SPA DEMO
				</a>
				<form role="search" className="search__widget">
					<input
						type="search"
						id="search__input"
						placeholder="Search"
						aria-label="search"
						className="searchbox"
					/>
					<button aria-label="search">Go</button>
				</form>
				
			</div>
			<MainNav />
			<h1>
				<span>{props.page}</span>
			</h1>
		</header>
	);
};

export default Header;
