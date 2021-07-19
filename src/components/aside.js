import React from 'react';

import '../styles/components/aside.css';

const Aside = () => {
	return (
		<aside>
			<div className="aside__content">
				<div className="aside__section" role="main">
					<nav aria-label="services">
						<ul>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about QUI EST ESSE');
									}}
								>
									A/B testing
								</div>
							</li>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about NESCIUNT QUAS ODIO');
									}}
								>
									product management
								</div>
							</li>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about VOLUPTATEM ELIGENDI OPTIO');
									}}
								>
									Creative beta
								</div>
							</li>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about EVENIET QUOD TEMPORIBUS');
									}}
								>
									long tail strategy
								</div>
							</li>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about EVENIET QUOD TEMPORIBUS');
									}}
								>
									guerrilla marketing
								</div>
							</li>
							<li>
								<div
									tabIndex="0"
									className="sidenav"
									onClick={() => {
										alert('Contact us for more information about EVENIET QUOD TEMPORIBUS');
									}}
								>
									upstream selling
								</div>
							</li>
						</ul>
					</nav>
				</div>
				<div className="aside__section" role="contentinfo">
					<header className="aside-heading">News</header>
					<div>
						<img src="http://placeimg.com/350/350/tech" alt="" />
					</div>
					<footer id="section-footer">
						<a href="/services" className="whatsnew">
							What's new?
						</a>
					</footer>
				</div>
			</div>
		</aside>
	);
};

export default Aside;
