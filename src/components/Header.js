import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="mt-6 bg-white text-center">
        <div className="text-6xl font-bold">Library</div>
        <br />
      </div>
      <div className="flex justify-around items-center text-gray-200 px-4 shadow-md sm:py-4 sm:justify-around">
        <Dropdown />
        {/* <Link href="/signUp">
          <button type="button">Sign Up</button>
        </Link> */}
        <Link href="/login">
          <button type="button">Log In</button>
        </Link>
      </div>
    </header>
  );
}
