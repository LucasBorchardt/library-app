import Head from "next/head";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Book from "@/components/Book";

export default function BookDetailsPage() {
  const [books, setBooks] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const booksData = await fetch(`/api/books/${id}`);
        const books = await booksData.json();
        setBooks(books);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  if (!books) return <p>No profile data</p>;
  return (
    <Layout>
      <Head>
        <title key="title">Titles</title>
        <meta key="description" name="description" content="Title" />
      </Head>
      <Book
        id={books.id}
        title={books.title}
        author={books.author}
        genre={books.genre}
        year={books.year}
        synopsis={books.synopsis}
      />
    </Layout>
  );
}
