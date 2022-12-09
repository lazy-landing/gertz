import Header from './components/header';
import Home from './components/content/home';
import About from './components/content/about';
import Contact from './components/content/contact';
import Footer from './components/footer';
import PartnersLogin from './components/content/partnersLogin';
import styles from './styles.module.scss';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<Home />
				<About />
				<Contact />
				<PartnersLogin />
			</div>
			<Footer />
		</div>
	);
}

export default App;
