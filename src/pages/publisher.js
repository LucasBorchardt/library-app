import Head from 'next/head';

import Layout from '../components/Layout';

export default function PublisherPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Publisher</title>
				<meta key="description" name="description" content="Publisher" />
			</Head>
			<h1>Publisher</h1>
		</Layout>
	);
}
