import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import isValidEmail from './isValidEmail';
import styles from './styles.module.scss';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const autoReplayTemplateId = process.env.REACT_APP_AUTO_REPLAY_TEMPLATE_ID;
const notifyTemplateId = process.env.REACT_APP_NOTIFY_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

const Contact = () => {
	const ref = useRef(null);
	const { pathname } = useLocation();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);
	const [showEmailNotSentWarning, setShowEmailNotSentWarning] = useState(false);
	const [showNameWarning, setShowNameWarning] = useState(false);
	const [showEmailWarning, setShowEmailWarning] = useState(false);
	const [showEmailNotValidWarning, setShowEmailNotValidWarning] = useState(false);
	const [showMessageWarning, setShowMessageWarning] = useState(false);

	useEffect(() => {
		if (pathname === '/contact') {
			ref?.current?.scrollIntoView();
		}
	}, [pathname]);

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
		if (!serviceId || !autoReplayTemplateId || !userId) {
			setShowEmailNotSentWarning(true);
			const id = setTimeout(() => {
				setShowEmailNotSentWarning(false);
				clearTimeout(id);
			}, 10000);
			return;
		}
		if (firstName && email && isValidEmail(email) && message) {
			const templateParams = {
				name: firstName,
				email,
				message
			};

			emailjs.send(serviceId, autoReplayTemplateId, templateParams, userId)
				.then(() => {
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
				})
				.catch((err) => {
					setShowEmailNotSentWarning(true);
					const id = setTimeout(() => {
						setShowEmailNotSentWarning(false);
						clearTimeout(id);
					}, 10000);
					console.error(err);
				});
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
		<div ref={ref} className={styles.contact}>
			<address className={styles.address}>
				<div className={styles['address-section']}>
					<h4>We are located in:</h4>
					<div>Odesa, Ukraine</div>
				</div>
				<div className={styles['address-section']}>
					<h4>You can contact us directly here:</h4>
					<a href='mailto:gertzservice@gmail.com'>gertzservice@gmail.com</a>
				</div>
			</address>
			<form>
				<div className={emailSent ? styles['sent-email'] : styles.hidden}>
					Thank you for your message, we will be in touch!
				</div>
				<div className={showEmailNotSentWarning ? styles['not-sent-email-error'] : styles.hidden}>
					Something went wrong! Please try again later or contact us directly via email.
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
						* Your email is a required field
					</span>
					<span className={showEmailNotValidWarning ? styles.warning : styles.hidden}>
						Email is not valid
					</span>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Your email'
						value={email}
						onChange={onEmailChange}
					/>
					<span className={showMessageWarning ? styles.warning : styles.hidden}>
						* Message is a required field
					</span>
					<textarea
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Message'
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
		</div>
	);
};

export default Contact;
