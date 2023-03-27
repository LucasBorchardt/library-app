import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Layout from "@/components/Layout";
import NewBookForm from "@/components/NewBookForm";
import { useRouter } from "next/router";

export default function UserPage() {
  const { data: session, status } = useSession();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const { id } = router.query;

  useEffect(() => {
    async function getBooks() {
      try {
        const booksData = await fetch("/api/books");
        const books = await booksData.json();

        const filteredBooks = books.filter((book) => {
          if (id === book.userId) {
            return book;
          }
        });
        setBooks(filteredBooks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  if (!books) return <p>No profile data</p>;

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await fetch(`/api/users/${id}`);
        const user = await userData.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [id]);

  if (status === "authenticated" && user){
    return (
      <Layout>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Your Books
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-700 dark:text-white"
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
        <NewBookForm />
      </Layout>
    );
  }
}
