import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown';

export default function Header() {
	return (
		// <header>
		// 	<h1>Library</h1>
		// 	<Dropdown/> 
		// 	<Link href="/signIn">
		// 		<button type="button">Sign in</button>
		// 	</Link>
		// 	<Link href="/logIn">
		// 		<button type="button">Log in</button>
		// 	</Link>
		// </header>
		<header className="bg-gray-900 shadow-md">
<div className="bg-white text-center">
	<div className="text-6xl font-bold">
		Library
	</div>	<br></br>
</div>
<div className="flex justify-between items-center text-gray-200 px-4 shadow-md sm:py-4 sm:justify-around">
		
	<Dropdown/> 
			<Link href="/signIn">
				<button type="button">Sign in</button>
			</Link>
			<Link href="/logIn">
				<button type="button">Log in</button>
			</Link>
	
</div>
</header>
	);
}

