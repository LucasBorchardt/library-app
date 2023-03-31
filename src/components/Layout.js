import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
}
