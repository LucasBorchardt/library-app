import Head from 'next/head';

import Layout from '../components/Layout';

export default function YearPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Year</title>
				<meta key="description" name="description" content="Year" />
			</Head>
			<h1>Year</h1>
		</Layout>
	);
}
