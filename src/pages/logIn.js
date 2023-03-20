import Head from 'next/head';

import Layout from '../components/Layout';

export default function LogInPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Log In</title>
				<meta key="description" name="description" content="Log in" />
			</Head>
			<h1>Log In</h1>
		</Layout>
	);
}
