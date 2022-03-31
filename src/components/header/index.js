import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from './logo.png';

const getActiveButtonStyle = (path) => {
	return path === window.location.pathname ? styles.active : '';
};

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.header}>
			<div
				className={styles['logo-container']}
				onClick={() => navigate('/')}
			>
				<img
					alt='GERTZ'
					src={logo}
					className={styles.logo}
				/>
			</div>
			<div className={styles.buttons}>
				<button
					className={`${styles.button} ${getActiveButtonStyle('/about')}`}
					onClick={() => navigate('/about')}
				>
					About Us
				</button>
				<button
					className={`${styles.button} ${getActiveButtonStyle('/contact')}`}
					onClick={() => navigate('/contact')}
				>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Header;
