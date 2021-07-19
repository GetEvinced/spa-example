import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function buildPages(pageType, num) {
	const items = [];
	for (var i = 1; i <= num; i++) {
		items.push(
			<li>
				<a href={'/' + pageType + '/' + pageType + i}>{pageType + '/' + pageType + i}</a>
			</li>
		);
	}
	return items;
}
const DEFAULT_NUM_PAGES = 10;

function Map() {
	let query = useQuery();
	const num_services = query.get('services') ? query.get('services') : DEFAULT_NUM_PAGES;
	const num_projects = query.get('projects') ? query.get('projects') : DEFAULT_NUM_PAGES;

	return (
		<div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px' }}>
			<h1>Site Map</h1>
			<ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About Us</a>
				</li>
				<li>
					<a href="/partners">Partners</a>
				</li>
				<li>
					<a href="/customers">Customers</a>
				</li>
				<li>
					<a href="/careers">Careers</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/services">Services</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				{buildPages('services', num_services)}
				{buildPages('projects', num_projects)}
			</ul>
		</div>
	);
}

export default Map;
