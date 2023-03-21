import Head from 'next/head';

import Layout from '../components/Layout';

export default function TitlePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Title</title>
				<meta key="description" name="description" content="Title" />
			</Head>
			<h1>Title</h1>
		</Layout>
	);
}
