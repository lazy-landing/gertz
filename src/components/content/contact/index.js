import styles from './styles.module.scss';

const Contact = () => {
	return (
		<div className={styles.main}>
			<form>
				<div className={styles['not-required-area']}>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='First name'
					/>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='First name'
					/>
				</div>
				<div className={styles['required-area']}>
					<input
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Email' type='email' required
					/>
					<textarea
						className={`${styles.input} ${styles['input-margin']}`}
						placeholder='Notes'
					/>
					<button className={styles['input-margin']}>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
