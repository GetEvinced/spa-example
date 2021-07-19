import React from 'react';

import Layout from '../components/Layout';
import UserBtns from '../components/userBtns';

import '../styles/user.css';


const UserArticles = (props) => {
    let name = 'user';
    let password = null;
    if(typeof window !== 'undefined') {
        const storage = window.localStorage;
        name = storage.getItem('userName');
        password = storage.getItem('password');
    }

    const getImgId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
	return (
		<Layout page={name || 'Please Login'} loginRequiered={true} logout={props.logout}>
            <UserBtns />
	<div className="row news__list">
                
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
									Read
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
									Read
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
									Read
								</div>
							</div>
						</div>
					</div>
				</div>
		</Layout>
	);
};

export default UserArticles;