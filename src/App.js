import React from 'react';

import {
	Route,
	NavLink,
	HashRouter
  } from "react-router-dom";
import Logo from './components/svg/logo';
import Layout from './components/Layout';

import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Services from './pages/services';

import './styles/_base.css';

function App() {
	

	return (
		<HashRouter>
			<Layout page="contact us">
			
			<Route path="/contact" component={Contact} />
			<Route path="/projects" component={Projects}/>
			<Route path="/services" component={Services}/>
			<Route path="/careers" component={Home}/>
			<Route path="/customers" component={Home}/>
			<Route path="/partners" component={Home}/>
			<Route path="/about" component={Home}/>
			<Route exact path="/" component={Home}/>
			</Layout>
		</HashRouter>
	);
}

export default App;
