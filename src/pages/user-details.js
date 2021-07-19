import React from 'react';

import Layout from '../components/Layout';
import UserBtns from '../components/userBtns';

import {
	UserIcon
} from '../components/svg/icons';

import '../styles/user.css';


const UserDetails = (props) => {
    let name = 'user';
    let password = null;
    if(typeof window !== 'undefined') {
        const storage = window.localStorage;
        name = storage.getItem('userName') || 'user';
        password = storage.getItem('password');
    }

	return (
		<Layout page={name || 'Please Login'} loginRequiered={true} logout={props.logout}>
	<UserBtns />
    <div style={{display: 'flex', alignItems: 'center', fontSize: '1.6rem'}}>
			<div style={{width: '10rem'}}><UserIcon /></div> 
            <div>
                <div>
                    <span style={{color: '#00615a'}}>Name:</span> {name}
                </div>
                <div><span style={{color: '#00615a'}}>Email:</span> {`${name.replace(/\s+/g, '-').toLowerCase()}@example.com`}</div>
            </div>
    </div>
		</Layout>
	);
};

export default UserDetails;