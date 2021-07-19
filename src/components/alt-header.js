import React, {useContext} from 'react';
import { Link  } from "react-router-dom";

import Logo from './svg/logo';
import {
    NavLink
  } from "react-router-dom";
import {
	UserIcon
} from '../components/svg/icons';
import '../styles/components/header.css';

import {UserContext} from '../App'

const UserBtn = (props) => {
	console.log('logouteee', props.logout);
	if(props.isLoggedIn) {
		let userName;
		if(typeof window !== 'undefined') {
			userName = window.localStorage.userName;
		}
		return (
			<div className="user">
				<button className="login__btn" onClick={props.logout}>Log Out</button>
				<a href="/user">
					<span className="icon__wrapper" aria-hidden="true">
						<UserIcon />
					</span>
					{userName}
				</a>
			</div>
		);
	} else {
		return (
			<Link className="login__btn" to="/login"> LogIn</Link>
		);
	}
}

const AltHeader = (props) => {
	const isLoggedIn = useContext(UserContext).isLoggedIn

	return (
		<header className="row">
			<div className="row header__top">
				<a href="/" className="logo__link">
					<Logo /> DEMO
				</a>

				<UserBtn isLoggedIn={isLoggedIn} logout={props.logout} toggleModal={props.toggleModal}/>
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
			<nav aria-label="main">
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/about">About US</NavLink></li>
				<li><NavLink to="/services">services</NavLink></li>
				<li><NavLink to="/partners">partners</NavLink></li>
				<li><NavLink to="/customers">customers</NavLink></li>
				<li><NavLink to="/projects">projects</NavLink></li>
				<li><NavLink to="/careers">careers</NavLink></li>
				<li><NavLink to="/contact">contact</NavLink></li>
			</ul>
		</nav>
			<h1>
				<span>{props.page}</span>
			</h1>
		</header>
	);
};

export default AltHeader;
