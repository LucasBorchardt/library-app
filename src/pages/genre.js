import Head from 'next/head';

import Layout from '../components/Layout';

export default function GenrePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Genre</title>
				<meta key="description" name="description" content="Genre" />
			</Head>
			<h1>Genre</h1>
		</Layout>
	);
}
