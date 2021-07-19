import React from 'react';

import '../../styles/frames.css';

function Frames() {


	return (
        <main className='frames__wrapper'>
        <h1>GuyFrames</h1>
        <div>
            <iframe title="Evinced Demos" tabindex="-1" src="https://demo.evinced.com"></iframe>
            <iframe src="/frames-content"> </iframe>
        </div>
        </main>
	);
}

export default Frames;
