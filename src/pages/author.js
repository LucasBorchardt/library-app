import Head from 'next/head';

import Layout from '../components/Layout';

export default function AuthorPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Author</title>
				<meta key="description" name="description" content="Author" />
			</Head>
			<h1>Author</h1>
		</Layout>
	);
}
