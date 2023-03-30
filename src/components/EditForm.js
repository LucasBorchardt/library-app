import { useRouter } from "next/router";
import { useState } from "react";

export default function EditForm({id, title, author, genre, year, synopsis }) {
  const router = useRouter();
  const [editBook, setEditBook] = useState({
    id,
    title,
    author,
    genre,
    year,
    synopsis,
  });
  
  async function handleEdit(event){
    event.preventDefault()
    console.log("11111111111", editBook);
    const response = await fetch(`/api/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({ editBook }),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    if (response.ok) {
      await response.json();
      router.push(`/books/${book._id}`);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <form onSubmit={handleEdit}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
        <p className="text-white">Edit your Book</p>
        <input
          onChange={(e) => setEditBook({ editBook, title: e.target.value })}
          value={editBook.title}
          type="text"
          name="title"
          id="title"
          autoComplete="Title"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Title:"
        />
        <input
          onChange={(e) => setEditBook({ editBook, author: e.target.value })}
          value={editBook.author}
          type="text"
          name="author"
          id="author"
          autoComplete="Author"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Author:"
        />
        <input
          onChange={(e) => setEditBook({ editBook, genre: e.target.value })}
          value={editBook.genre}
          type="text"
          name="genre"
          id="genre"
          autoComplete="Genre"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Genre:"
        />
        <input
          onChange={(e) => setEditBook({ editBook, year: e.target.value })}
          value={editBook.year}
          type="number"
          name="year"
          id="year"
          autoComplete="Year"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Year:"
        />
        <textarea
          onChange={(e) => setEditBook({ editBook, synopsis: e.target.value })}
          value={editBook.synopsis}
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
