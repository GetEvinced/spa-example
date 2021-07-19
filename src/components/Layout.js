import React from 'react';

import Header from './header';
import Aside from './aside';
import Footer from './footer';

import '../styles/_base.css';


const Layout = ({ children, page, logout }) => {
	

	
	return (
		<div id="top__wrapper">
			

			<Header page={page} />
			<div className="page__content row">
				<Aside />
				<main>
				{children}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
