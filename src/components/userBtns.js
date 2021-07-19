import React from 'react';
import { Link  } from "react-router-dom";
import { useHistory } from "react-router-dom";

import '../styles/user.css';


const UserBtns = () => {
    const history = useHistory();
    
    function showDetails() {
        history.push('/user-details')
    }

    function showArticles() {
        history.push('/user-articles')
    }


	return (
        <div className="btns__list">
        <div className="fake__btn" onClick={showDetails}>User Details</div>
        <div className="fake__btn" onClick={showArticles}>Saved Articles</div>
        <Link className="fake__btn" to={'/user-articles'}>Articles Link</Link>
        <Link className="fake__btn" to={'/user-details'}>Details Link</Link>
    </div>
	);
};

export default UserBtns;