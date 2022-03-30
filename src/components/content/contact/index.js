import { useState } from 'react';
import emailjs from 'emailjs-com';
import isValidEmail from './isValidEmail';
import styles from './styles.module.scss';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const autoReplayTemplateId = process.env.REACT_APP_AUTO_REPLAY_TEMPLATE_ID;
const notifyTemplateId = process.env.REACT_APP_NOTIFY_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);
	const [showNameWarning, setShowNameWarning] = useState(false);
	const [showEmailWarning, setShowEmailWarning] = useState(false);
	const [showEmailNotValidWarning, setShowEmailNotValidWarning] = useState(false);
	const [showMessageWarning, setShowMessageWarning] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		setEmailSent(false);
		if (!firstName) {
			setShowNameWarning(true);
		}
		if (!email) {
			setShowEmailWarning(true);
		} else if (!isValidEmail(email)) {
			setShowEmailNotValidWarning(true);
		}
		if (!message) {
			setShowMessageWarning(true);
		}
		if (firstName && email && isValidEmail(email) && message) {
			const templateParams = {
				name: firstName,
				email,
				message
			};

			emailjs.send(serviceId, autoReplayTemplateId, templateParams, userId)
				.catch(console.log);
			emailjs.send(serviceId, notifyTemplateId, templateParams, userId)
				.catch(console.log);

			setFirstName('');
			setLastName('');
			setEmail('');
			setMessage('');
			setEmailSent(true);
			setShowNameWarning(false);
			setShowEmailWarning(false);
			setShowMessageWarning(false);
			setShowEmailNotValidWarning(false);

			const id = setTimeout(() => {
				setEmailSent(false);
				clearTimeout(id);
			}, 10000);
		}
	};

	const onFirstNameChange = (e) => {
		setShowNameWarning(false);
		setFirstName(e.target.value);
	};

	const onLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const onEmailChange = (e) => {
		setShowEmailWarning(false);
		setShowEmailNotValidWarning(false);
		setEmail(e.target.value);
	};

	const onMessageChange = (e) => {
		setShowMessageWarning(false);
		setMessage(e.target.value);
	};

	return (
		<div className={styles.main}>
			<form>
				<div className={emailSent ? styles['sent-email'] : styles.hidden}>
					Thank you for your message, we will be in touch!
				</div>
				<span className={showNameWarning ? styles.warning : styles.hidden}>
						* First name is a required field
				</span>
				<div className={styles['user-data']}>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='First name'
						value={firstName}
						onChange={onFirstNameChange}
					/>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Last name'
						value={lastName}
						onChange={onLastNameChange}
					/>
				</div>
				<div className={styles['contact-data']}>
					<span className={showEmailWarning ? styles.warning : styles.hidden}>
						* Email is a required field
					</span>
					<span className={showEmailNotValidWarning ? styles.warning : styles.hidden}>
						Email is not valid
					</span>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Email'
						value={email}
						onChange={onEmailChange}
					/>
					<span className={showMessageWarning ? styles.warning : styles.hidden}>
						* Notes is a required field
					</span>
					<textarea
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Notes'
						value={message}
						onChange={onMessageChange}
					/>
					<button
						className={styles['input-margin']}
						onClick={onSubmit}
					>
						Submit
					</button>
				</div>
			</form>
			<address className={styles.address}>
				<h4>We are located in:</h4>
				<div>Odesa, Ukraine</div>
				<h4>You can contact us directly here:</h4>
				<a href='mailto:gertzservice@gmail.com'>gertzservice@gmail.com</a>
			</address>
		</div>
	);
};

export default Contact;
