import React, {useRef, useEffect, useState} from 'react';

import '../styles/modal.css';
import '../styles/contact.css';

const Modal = ({ isOpen, toggleModal, login }) => {
    const markIfNotEmpty = (e) => {
        const target = e.target;
        target.value !== '' ? target.classList.add('not-empty') : target.classList.remove('not-empty');
    };

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);





	return (
        <div className="screener" style={{display: isOpen ? 'block' : 'none'}}>
            <div role="dialog"
                 aria-labelledby="dialog1_label"
                 aria-modal="true"
                 >

                <button aria-label="Close" className="close-modal" onClick={toggleModal}>X</button>
                <h2 id="dialog1_label" className="dialog_label">Login</h2>
                <div className="dialog_form">
                    <form id="contact__form">
				        <div className="form__row">
                            <div className="text-input__wrapper">
                                <input type="text" id="full_name" onChange={(e) => setUserName(e.target.value)} name="full_name" onBlur={markIfNotEmpty} />
                                <label htmlFor="full_name">Name</label>
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="text-input__wrapper">
                                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} onBlur={markIfNotEmpty} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
				
				        <div className="form__row form--bottom">
					        <button disabled={!userName || !password}type="submit" onClick={(e) => { e.preventDefault(); login(userName, password)}}>Submit</button>
				        </div>
			        </form>
                </div>
            </div>
        </div>
	)
};

export default Modal;
