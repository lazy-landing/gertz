import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PartnersLogin = () => {
	const ref = useRef(null);
	const { pathname } = useLocation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (pathname === '/partners') {
			ref?.current?.scrollIntoView();
		}
	}, [pathname]);

	const onChange = (e) => {
		const { target: { type, value } } = e;
		if (type === 'email') {
			setEmail(value);
		}
		if (type === 'password') {
			setPassword(value);
		}
	};

	const isDisabled = () => {
		return !email || !password;
	};

	return (
		<div ref={ref} className={styles.contact}>
			<form className={styles.form}>
				<input
					type='email'
					className={`${styles.input} ${styles['input-margin']}`}
					placeholder='Your email'
					value={email}
					onChange={onChange}
				/>
				<input
					type='password'
					className={`${styles.input} ${styles['input-margin']}`}
					placeholder='Password'
					value={password}
					onChange={onChange}
				/>
				<button
					disabled={isDisabled()}
					className={`${styles.button} ${styles['input-margin']}`}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default PartnersLogin;
