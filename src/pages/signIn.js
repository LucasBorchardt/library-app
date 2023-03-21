import Head from 'next/head';

import Layout from '../components/Layout';

export default function SignInPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Sign In</title>
				<meta key="description" name="description" content="Sign in" />
			</Head>
			<h1>Sign In</h1>
		</Layout>
	);
}
