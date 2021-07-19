import React from 'react';

import Layout from '../components/Layout';
import UserBtns from '../components/userBtns';

import '../styles/user.css';


const UserProfile = (props) => {
    let name = 'user';
    if(typeof window !== 'undefined') {
        const storage = window.localStorage;
        name = storage.getItem('userName');
    }

	return (
		<Layout page={name || 'Please Login'} loginRequiered={true} logout={props.logout}>
	
			<h2 className="section__banner" style={{marginTop: 0}}>{`Welcome ${name}`}</h2>
            
             <UserBtns />
            <p>Prism ethical vice, listicle pour-over mumblecore migas single-origin coffee poutine. Normcore forage squid pok pok, affogato copper mug fanny pack locavore lumbersexual austin offal vaporware vinyl. Fingerstache heirloom listicle, intelligentsia pok pok organic jean shorts. Hammock kickstarter williamsburg sriracha, poke vegan hoodie try-hard forage aesthetic paleo four loko poutine single-origin coffee 3 wolf moon. Hot chicken pork belly taiyaki, tattooed DIY fashion axe sartorial pabst blue bottle truffaut ethical flexitarian farm-to-table microdosing. Chartreuse you probably haven't heard of them vice chia organic pinterest live-edge enamel pin neutra chicharrones ennui jianbing. Knausgaard kinfolk 3 wolf moon succulents master cleanse photo booth.</p>
			<p>Vinyl beard thundercats craft beer. Adaptogen master cleanse tousled next level viral PBR&B, forage mlkshk hella blue bottle af green juice health goth messenger bag. Forage letterpress banjo, four dollar toast fam skateboard coloring book migas master cleanse farm-to-table edison bulb humblebrag chambray lyft gentrify. Bicycle rights schlitz tumblr, kickstarter flannel paleo keytar selfies wayfarers polaroid art party swag narwhal.</p>
            <div className="frame">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d708354.4353426761!2d-1.7950609599256153!3d53.01159660169579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1608736299535!5m2!1sen!2sil"
					width="600"
					height="300"
					frameBorder="0"
					allowFullScreen=""
					className="frame"
				></iframe>
			</div>
		</Layout>
	);
};

export default UserProfile;