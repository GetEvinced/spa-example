import React from 'react';

import FakeDD from '../../components/fake-dropdown';
import '../../styles/frames.css';

function FramesNested() {


	return (
        <main className='frames__wrapper'>
        <h3>I Am A Nested iFrame</h3>
        <div>
            <FakeDD />
            <div role="banana">🍌</div>
            <div className="btn">Fake Button</div>
            <a href="/frames-content" className="icon__link">
                Load My Parent
            </a>
        </div>
        <iframe
        style={{margin: '30px auto 0'}}
            srcdoc="<button class='btn'>Click me</button>"
            tabindex="-1"
            title="My frame is an iframe"
        ></iframe>
        </main>
	);
}

export default FramesNested;
