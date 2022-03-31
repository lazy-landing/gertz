import styles from './styles.module.scss';
import mapIcon from './map.svg';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

	const ref = useRef(null);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === '/') {
			ref?.current?.scrollIntoView();
		}
	}, [pathname]);

	return (
		<div ref={ref} className={styles.home}>
			<div className={styles['map-wrapper']}>
				<img className={styles.map} alt='Ukraine map' src={mapIcon}/>
			</div>
			<div className={styles.banner}>
				<h1 className={styles.title}>
					Full Stack Web Development Service to Improve Your Business
				</h1>
			</div>
		</div>
	);
};

export default Home;
