import React, {useState} from 'react';

import '../styles/components/fake-dropdown.css';

const wordsList = ["weekend", "cycling", "break", "peanuts","beer"];
const optionsList = ["Option One", "Option Two", "Option Three", "Option Foure","Option Five"];

function FakeDD({type}) {
    const [buttonState, setButtonState] = useState('Choose One Option');
    const [listState, setListState] = useState(false);

    function updateDDBtn(e) {
        const newBtnText = e.target.innerText; 
        setButtonState(newBtnText);
    }

    function updateDDListState() {
        setListState(!listState);
    }

    const listItems = type === 'options'? optionsList : wordsList;

	return (
        <div className="dd__wrapper">
            <button onBlur={updateDDListState} onClick={updateDDListState} className='dd__btn'>{buttonState}</button>
            <ul className={`dd__list ${listState ? 'expanded' : ''}`}>
                {
                    listItems.map(item => <li onClick={updateDDBtn}>{item}</li>)
                }
            </ul>
        </div>
	);
}

export default FakeDD;
