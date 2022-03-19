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
		</div>
	);
};

export default Header;
