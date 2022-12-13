import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import styles from './styles.module.scss';
import Header from './components/header';
import Home from './components/content/home';
import About from './components/content/about';
import Contact from './components/content/contact';
import PartnersLogin from './components/content/partnersLogin';
import Footer from './components/footer';

const container = document.getElementById('root');
const root = createRoot(container);

const getMainContent = () => (
	<>
		<Home />
		<About />
		<Contact />
	</>
);

root.render(
	<BrowserRouter>
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path="*" element={getMainContent()} />
					<Route path="/partners" element={<PartnersLogin />} />
				</Routes>
			</div>
			<Footer />
		</div>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
