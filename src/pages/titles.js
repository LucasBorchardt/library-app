import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function TitlePage() {
  const [books, setBooks] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const booksData = await fetch("/api/books/");
        const books = await booksData.json();
        setBooks(books);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!books) return <p>No profile data</p>;

  return (
    <Layout>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Search by Title
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {books.map((a) => (
              <li key={a.title}>
                <Link href={`/books/${a._id}`}>{a.title}</Link>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
