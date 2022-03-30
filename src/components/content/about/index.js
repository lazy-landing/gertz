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
				<p>We are a team of software developers, a small but motivated team
					specializing in building web apps using modern web technologies.</p>
				<p>We always keep an eye on the latest trends in the tech world and put our customers’ wishes first.</p>
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
				<p>In addition to software development, we provide full-cycle testing activities:
					test strategy, test plan, test cases design and execution.</p>
				<p>Test activities: web app testing, manual testing, automated testing, functional testing, integration testing.</p>
			</div>
			<div className={styles['media-wrapper']}>
				<div><img alt='Java' className={styles.icon} src={javaIcon} /></div>
				<div><img alt='Selenium' className={styles.icon} src={seleniumIcon} /></div>
			</div>
		</div>
	);
};

export default About;
