import Head from 'next/head';

import Layout from '../components/Layout';

export default function SignInPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Sign Up</title>
				<meta key="description" name="description" content="Sign Up" />
			</Head>
			<h1>Sign Up</h1>
		</Layout>
	);
}
