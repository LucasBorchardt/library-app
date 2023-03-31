import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditForm({
  _id,
  title,
  author,
  genre,
  year,
  synopsis,
}) {
  const [book, setBook] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const bookData = await fetch(`/api/books/${id}`);
        const book = await bookData.json();
        setBook(book);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [id]);

  async function handleEdit(event) {
    event.preventDefault();    
    const response = await fetch(`/api/books/${_id}`, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form onSubmit={handleEdit}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
        <p className="text-white">Edit your Book</p>
        <input
          onChange={(e) => setBook({ book, title: e.target.value })}
          defaultValue={title}
          type="text"
          name="title"
          id="title"
          autoComplete="Title"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Title:"
        />
        <input
          onChange={(e) => setBook({ book, author: e.target.value })}
          defaultValue={author}
          type="text"
          name="author"
          id="author"
          autoComplete="Author"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Author:"
        />
        <input
          onChange={(e) => setBook({ book, genre: e.target.value })}
          defaultValue={genre}
          type="text"
          name="genre"
          id="genre"
          autoComplete="Genre"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Genre:"
        />
        <input
          onChange={(e) => setBook({ book, year: e.target.value })}
          defaultValue={year}
          type="number"
          name="year"
          id="year"
          autoComplete="Year"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Year:"
        />
        <textarea
          onChange={(e) => setBook({ book, synopsis: e.target.value })}
          defaultValue={synopsis}
          id="synopsis"
          name="synopsis"
          rows="3"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Synopsis:"
        />
        <div className="inline-flex w-full justify-between gap-x-1.5 rounded-md sm:py-2">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
