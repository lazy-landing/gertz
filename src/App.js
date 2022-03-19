import styles from './styles.module.scss';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
