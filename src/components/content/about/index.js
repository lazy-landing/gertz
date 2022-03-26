import styles from './styles.module.scss';
import htmlIcon from './icons/HTML5.svg';
import css3Icon from './icons/CSS3.svg';
import jsIcon from './icons/JavaScript.svg';
import gitIcon from './icons/Git.svg';
import nodeJSIcon from './icons/NodeJS.svg';
import reactJSIcon from './icons/ReactJS.svg';
import reduxIcon from './icons/ReduxJS.svg';
import npmIcon from './icons/NPM.svg';
import javaIcon from './icons/Java.svg';
import seleniumIcon from './icons/Selenium.svg';

const About = () => {
	return (
		<div className={styles.main}>
			<div className={styles['title-wrapper']}>
				<p>We are a team specializing in building web apps using modern web technologies:</p>
			</div>
			<div className={styles['media-wrapper']}>
				<div><img alt='HTML5' className={styles.icon} src={htmlIcon} /></div>
				<div><img alt='CSS3' className={styles.icon} src={css3Icon} /></div>
				<div><img alt='JS' className={styles.icon} src={jsIcon} /></div>
				<div><img alt='Git' className={styles.icon} src={gitIcon} /></div>
				<div><img alt='NodeJS' className={styles.icon} src={nodeJSIcon} /></div>
				<div><img alt='ReactJS' className={styles.icon} src={reactJSIcon} /></div>
				<div><img alt='Redux' className={styles.icon} src={reduxIcon} /></div>
				<div><img alt='NPM' className={styles.icon} src={npmIcon} /></div>
			</div>
			<div className={styles['title-wrapper']}>
				<p>Also, we are covering functionality by UI autotests, Unit tests, Integration tests using:</p>
			</div>
			<div className={styles['media-wrapper']}>
				<div><img alt='Java' className={styles.icon} src={javaIcon} /></div>
				<div><img alt='Selenium' className={styles.icon} src={seleniumIcon} /></div>
			</div>
			<div className={styles['text-wrapper']}>
				<p className={styles.text}>
					{'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'}
				</p>
			</div>
		</div>
	);
};

export default About;
