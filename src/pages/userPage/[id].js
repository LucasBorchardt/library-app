import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function userPage() {
  const { data: session, status } = useSession();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const booksData = await fetch("/api/books");
        const books = await booksData.json();
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    if (session?.user.id === book.userId) {
      return book;
    }
  });

  if (status === "authenticated") {
    return 
}
}