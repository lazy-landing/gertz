import styles from './styles.module.scss';
import logo from './logo.png';

const Header = () => {
	return (
		<div className={styles.header}>
			<img
				alt='GERTZ'
				src={logo}
				className={styles.logo}
			/>
			<div className={styles.buttons}>
				<button className={styles.button}>Contact</button>
				<button className={styles.button}>About</button>
			</div>
		</div>
	);
};

export default Header;
