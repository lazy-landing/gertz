import styles from './styles.module.scss';
import mapIcon from './map.svg';

const Home = () => {
	return (
		<>
			<div className={styles['map-wrapper']}>
				<img className={styles.map} alt='Ukraine map' src={mapIcon}/>
			</div>
			<div className={styles.banner}>
				<h1 className={styles.title}>
				Full Stack Web Development Service to Improve Your Business
				</h1>
			</div>
		</>
	);
};

export default Home;
