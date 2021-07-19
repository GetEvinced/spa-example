import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

import Layout from '../components/Layout';

import '../styles/news.css';

const NUM_POSTS = 10;
const getImgId = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const Services = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setData(data.slice(0, NUM_POSTS));
			});
	}, []);
	return (
		<section>
				<div className="row news__list">
					<div className="news__item">
						<h2>Startup infrastructure buzz</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Pitch entrepreneur interaction design incubator. Incubator focus stealth
									responsive web design burn rate business plan conversion prototype iteration seed
									round stock product management.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>creative burn rate branding</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									market launch party creative incubator prototype. Startup advisor monetization
									responsive web design creative burn rate branding.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Venture hackathon</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Startup freemium product management graphical user interface user experience
									channels. Venture hackathon iPad accelerator network effects pitch. Buyer direct
									mailing vesting period.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>rockstar supply chain</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Freemium responsive web design release churn rate. Lean startup sales prototype
									twitter gamification branding rockstar supply chain accelerator partnership
									network effects conversion learning curve user experience.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>network bootstrapping</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Return on investment launch party accelerator channels partner network
									bootstrapping creative responsive web design niche market.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Bandwidth scrum project</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Stock business plan success long tail venture angel investor beta monetization.
									Analytics pitch pivot funding network effects client value proposition churn rate
									responsive web design holy grail.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Handshake return on investment</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Bandwidth social media bootstrapping angel investor lean startup crowdfunding
									pivot. Rockstar beta research &amp; development interaction design termsheet low
									hanging fruit.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Backing assets first mover advantage.</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Founders rockstar virality infrastructure metrics gen-z client freemium seed round
									iteration channels seed money innovator low hanging fruit.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Customer network effects</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Churn rate return on investment user experience iteration graphical user
									interface. Business-to-consumer beta user experience mass market agile development
									interaction design.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>

					<div className="news__item">
						<h2>Accelerator research</h2>
						<div className="content">
							<img
								src={`https://picsum.photos/id/${getImgId(0, 400)}/100/100`}
								alt=""
								className="serv-img"
							/>
							<div>
								<p>
									Validation crowdsource channels pitch. Market stock user experience. A/B testing
									success crowdfunding early adopters user experience alpha marketing funding.
								</p>
								<div className="btn" role="button">
									Launch Service
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Services;
