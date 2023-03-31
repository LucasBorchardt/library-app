import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserBook from "@/components/UserBook";

export default function UserBookDetailsPage() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const bookData = await fetch(`/api/books/${id}`);
        const book = await bookData.json();
        setBook(book);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [id]);

  async function handleDeleteBook(_id) {
    await fetch(`/api/books/${_id}`, {
      method: "DELETE",
    });
    router.push(`/userPage/${id}`);
  }

  if (isLoading) return <p>Loading...</p>;
  if (!book) return <p>No profile data</p>;
  return (
    <Layout>
      <UserBook
        _id={book._id}
        title={book.title}
        author={book.author}
        genre={book.genre}
        year={book.year}
        synopsis={book.synopsis}
        onDelete={handleDeleteBook}
      />      
    </Layout>
  );
}
