import React from 'react';
import Layout from '../components/Layout';

import '../styles/home.css';

const Home = ({ page = 'home', logout }) => {
	return (
		<>
			<section aria-label="company overview">
				<div className="section__banner">
					Low hanging fruit marketing buzz disruptive seed money customer. Agile development stealth
					mass market research &amp; development niche market metrics rockstar.
				</div>
				<p>
					Advisor channels founders partner network social proof branding supply chain twitter
					android value proposition focus partnership niche market. A/B testing infrastructure value
					proposition beta partnership marketing agile development learning curve market first mover
					advantage. Client launch party A/B testing series A financing user experience paradigm
					shift marketing business model canvas backing lean startup business-to-consumer.
					Entrepreneur startup ownership founders twitter accelerator paradigm shift focus analytics
					conversion seed money value proposition. Value proposition growth hacking mass market
					twitter. Market android low hanging fruit beta customer infographic gen-z network effects.
					Scrum project founders influencer supply chain deployment sales.
				</p>
				<p>
					Entrepreneur monetization funding crowdsource niche market business-to-business prototype
					seed money bootstrapping infrastructure hackathon. Android marketing churn rate agile
					development founders investor success mass market facebook holy grail direct mailing
					client buzz. Alpha marketing infographic A/B testing. Advisor learning curve sales
					accelerator long tail funding freemium network effects. Infrastructure deployment
					incubator gamification termsheet paradigm shift handshake ownership.
				</p>
				<p>
					Paradigm shift series A financing assets equity accelerator agile development validation
					infographic technology freemium crowdfunding angel investor. Crowdfunding user experience
					investor scrum project infrastructure research &amp; development holy grail. Partnership
					strategy rockstar A/B testing non-disclosure agreement traction. Holy grail sales
					conversion virality partnership alpha disruptive termsheet. Accelerator beta client churn
					rate lean startup investor gen-z infographic customer value proposition sales return on
					investment network effects business plan.
				</p>
				<div className="section__images row">
					<img
						src="https://picsum.photos/id/158/350/200"
						alt="a description of the visual content"
					/>
					<img src="https://picsum.photos/id/1/350/200" alt="a description of the visual content" />
				</div>
			</section>
			<section aria-label="company overview">
				<h2>our projects</h2>
				<div className="row projects__list">
					<div className="project__item">
						<img src="https://picsum.photos/id/160/350/350" alt="" className="home-proj-img" />
						<h3>monetization</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item">
						<img src="https://picsum.photos/id/174/350/350" className="home-proj-img" />
						<h3>freemium</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/180/350/350" className="home-proj-img" />
						<h3>gen-z network</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/20/350/350" alt="" className="home-proj-img" />
						<h3>infographic</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/2/350/350" alt="" className="home-proj-img" />
						<h3>network effects</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/201/350/350" className="home-proj-img" />
						<h3>market first</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/221/350/350" className="home-proj-img" />
						<h3>creative partner</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/223/350/350" className="home-proj-img" />
						<h3>holy grail incubator</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/274/350/350" alt="" className="home-proj-img" />
						<h3>mailing</h3>
						<a href="/" className="link">
							Read More
						</a>
					</div>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d708354.4353426761!2d-1.7950609599256153!3d53.01159660169579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1608736299535!5m2!1sen!2sil"
					width="600"
					height="300"
					frameBorder="0"
					allowFullScreen=""
					className="frame"
				></iframe>

				<ul className="section__banner">
					<div>✓ Fast</div>
					<div>✓ Safe</div>
					<div>✓ Reliable</div>
				</ul>
			</section>
</>
	);
};

export default Home;
