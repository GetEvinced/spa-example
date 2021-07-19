import React from 'react';

import {
	UserIcon,
	EmailIcon,
	PhoneIcon,
	LocationIcon,
	NoteIcon,
	TextMessageIcon
} from '../../components/svg/icons';

import FakeDD from '../../components/fake-dropdown';

import '../../styles/frames.css';

function FramesContent() {


	return (
        <main className='frames__wrapper'>
        <h2>I Have An iFrame Too</h2>
        <div className="icon__links">
<a href="/frames-nested" className="icon__link">
    <UserIcon />
</a>
<a href="/frames-nested" className="icon__link">
    <PhoneIcon />
</a>
<a href="/frames-nested" className="icon__link">
    <EmailIcon />
</a>
<FakeDD type="options" />
        </div>
        <div>
            <iframe className='nesting__frame' src="/frames-nested"> </iframe>
        </div>
        </main>
	);
}

export default FramesContent;
