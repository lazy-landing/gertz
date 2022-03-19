import styles from './styles.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.copyright}>
				{`© ${new Date().getFullYear()}, GERTZ. All rights reserved`}
			</div>
		</div>
	);
};

export default Footer;
