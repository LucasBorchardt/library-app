import Footer from './Footer';
import Header from './Header/Header';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
