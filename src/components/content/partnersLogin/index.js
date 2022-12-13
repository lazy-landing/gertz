import styles from './styles.module.scss';
import { useRef, useState } from 'react';

const PartnersLogin = () => {
	const ref = useRef(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailWarning, setEmailWarning] = useState(false);
	const [passwordWarning, setPasswordWarning] = useState(false);
	const [userWarning, setUserWarning] = useState(false);

	const onChange = (e) => {
		const { target: { type, value } } = e;

		setUserWarning(false);
		setEmailWarning(false);
		setPasswordWarning(false);

		if (type === 'email') {
			setEmail(value);
		}
		if (type === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setEmailWarning(Boolean(!email));
		setPasswordWarning(Boolean(!password));

		if (email && password) {
			setUserWarning(true);
		}
	};

	return (
		<div ref={ref} className={styles.contact}>
			<div className={userWarning ? styles['error-container'] : styles.hidden}>
				<span className={styles['user-warning']}>
					Looks like you are not our partner yet
				</span>
			</div>
			<form className={styles.form}>
				<span className={emailWarning ? styles.warning : styles.hidden}>
						* Email is a required field
				</span>
				<input
					type='email'
					className={`${styles.input} ${styles['input-margin']}`}
					placeholder='Your email'
					value={email}
					onChange={onChange}
				/>
				<span className={passwordWarning ? styles.warning : styles.hidden}>
						* Password is a required field
				</span>
				<input
					type='password'
					className={`${styles.input} ${styles['input-margin']}`}
					placeholder='Password'
					value={password}
					onChange={onChange}
				/>
				<button
					className={`${styles.button} ${styles['input-margin']}`}
					onClick={onSubmit}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default PartnersLogin;
