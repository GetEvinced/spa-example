import React from 'react';

import {
	UserIcon,
	EmailIcon,
	PhoneIcon,
	LocationIcon,
	NoteIcon,
	TextMessageIcon
} from '../components/svg/icons';
import '../styles/contact.css';

const markIfNotEmpty = (e) => {
	const target = e.target;
	target.value !== '' ? target.classList.add('not-empty') : target.classList.remove('not-empty');
};

const Contact = (props) => {
	return (
		<>
			<form id="contact__form">
				<div className="form__row">
					<span className="icon__wrapper" aria-hidden="true">
						<UserIcon />
					</span>
					<div className="text-input__wrapper">
						<input type="text" id="full_name" name="full_name" onBlur={markIfNotEmpty} />
						<label htmlFor="full_name">Full name</label>
					</div>
				</div>

				<div className="form__row">
					<span htmlFor="email" className="icon__wrapper" aria-hidden="true">
						<EmailIcon />
					</span>
					<div className="text-input__wrapper">
						<input type="email" name="email" id="email" onBlur={markIfNotEmpty} />
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="form__row">
					<span className="icon__wrapper" aria-hidden="true">
						<PhoneIcon />
					</span>
					<div className="text-input__wrapper">
						<input type="tel" name="phone" id="phone" onBlur={markIfNotEmpty} />
						<label htmlFor="phone">Phone number</label>
					</div>
				</div>

				<div className="form__row">
					<span className="icon__wrapper" aria-hidden="true">
						<LocationIcon />
					</span>
					<div className="text-input__wrapper">
						<input type="text" name="address" id="address" onBlur={markIfNotEmpty} />
						<label htmlFor="address">Full address</label>
					</div>
				</div>

				<fieldset>
					<legend>How would you like us to contact you?</legend>
					<div className="form__row">
						<div className="radio__item">
							<label htmlFor="contact_phone" className="icon__wrapper" aria-hidden="true">
								<PhoneIcon />
							</label>
							<input
								type="radio"
								id="contact_phone"
								name="contact_ways"
								value="phone"
								className="contact-type"
							/>
						</div>
						<div className="radio__item">
							<label htmlFor="contact_email" className="icon__wrapper">
								<EmailIcon />
							</label>
							<input
								type="radio"
								id="contact_email"
								name="contact_ways"
								value="email"
								className="contact-type"
							/>
						</div>
						<div className="radio__item">
							<label htmlFor="contact_text" className="icon__wrapper" aria-hidden="true">
								<TextMessageIcon />
							</label>
							<input
								type="radio"
								id="contact_text"
								name="contact_ways"
								value="text"
								className="contact-type"
							/>
						</div>
					</div>
				</fieldset>

				<div className="form__row">
					<label htmlFor="contact_message" className="icon__wrapper">
						<NoteIcon />
					</label>
					<textarea
						className="writeus"
						id="contact_message"
						placeholder="Write us something"
					></textarea>
				</div>
				<div className="form__row form--bottom">
					<div>
						<input id="approve" type="checkbox" name="address" />
						<label htmlFor="approve">Send me stuff</label>
					</div>
					<button type="submit">Submit</button>
				</div>
			</form>
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
			</>
	);
};

export default Contact;
