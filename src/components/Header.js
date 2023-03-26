import Dropdown from "./Dropdown";
import Login from "./Login";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="mt-6 bg-white text-center">
        <div className="text-6xl font-bold">Library</div>
        <br />
      </div>
      <div className="flex justify-around items-center text-gray-200 px-4 shadow-md sm:py-4 sm:justify-around">
        <Dropdown />
        <Login />
      </div>
    </header>
  );
}
