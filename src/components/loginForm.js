import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";


import '../styles/user.css';

import {UserContext} from '../App';

const LoginForm = (props) => {
    const history = useHistory();
    let isUserLoggedIn = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const isLoggedIn = isUserLoggedIn.isLoggedIn;
    if(isLoggedIn) {
        history.push('/user');
    }

    const markIfNotEmpty = (e) => {
        const target = e.target;
        target.value !== '' ? target.classList.add('not-empty') : target.classList.remove('not-empty');
    };

    function handleChange(e) {
        console.log('e', );
        if(e.target.name === 'full_name') {
            setUserName(e.target.value)
        } else {
            setPassword(e.target.value)
        }
      }

	return (
            <form id="contact__form">
                <div className="form__row">
                    <div className="text-input__wrapper">
                        <input type="text" id="full_name" onChange={handleChange} value={userName} name="full_name" onBlur={markIfNotEmpty} key={'name'} />
                        <label htmlFor="full_name">Name</label>
                    </div>
                </div>

                <div className="form__row">
                    <div className="text-input__wrapper">
                        <input type="password" name="password" id="password" value={password} onChange={handleChange} onBlur={markIfNotEmpty} key={'pass'} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
        
                <div className="form__row form--bottom">
                        <button disabled={!userName || !password}type="submit" onClick={(e) => { e.preventDefault(); props.login(userName, password)}}>Submit</button>
                </div>
            </form>
	);
};

export default LoginForm;