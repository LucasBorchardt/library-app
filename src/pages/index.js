import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Library App</title>
				<meta key="description" name="description" content="This is my library" />
			</Head>
			<h1>Library</h1>
			<section className="home">
				<Link href="/#">Explore</Link>
				<Link href="/sign-in">Sign in</Link>
				<Link href="/log-in">Log in</Link>
			</section>
			<p>
				Donec ut sem a est imperdiet tempus. Duis euismod viverra eros, sed fringilla urna
				iaculis sed. Donec at dolor non sapien ullamcorper semper. Phasellus vitae urna id
				lectus mattis tincidunt suscipit auctor risus. Integer ullamcorper aliquam elit, vel
				consequat felis fringilla nec. Praesent laoreet scelerisque mauris nec ultricies.
				Duis turpis enim, ullamcorper vel bibendum id, efficitur at turpis. Nunc dictum,
				purus in sagittis scelerisque, mauris augue dignissim sem, nec fermentum ipsum
				lectus ac sapien. Quisque venenatis leo nisi, quis tempor ligula pretium at.
				Vestibulum efficitur lectus id quam dapibus, ut condimentum augue placerat.
				Pellentesque elementum, est ac vestibulum sodales, urna justo sollicitudin purus,
				vitae suscipit felis ante venenatis magna.
			</p>
		</>
	);
}
