import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function NewBookForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const books = useSWR("/api/books");
  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);
    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        user: session.user.name,
        userId: session.user.id,
      }),
    });

    if (Response.ok) {
      const book = await response.json();
      books.mutate();
      router.push(`/books/${book._id}`);
    } else {
      console.log(`Error: ${response.status}`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
        <p className="text-white">Add a new book</p>
        <input
          type="text"
          name="title"
          id="title"
          autoComplete="Title"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Title:"
        />
        <input
          type="text"
          name="author"
          id="author"
          autoComplete="Author"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Author:"
        />
        <input
          type="text"
          name="genre"
          id="genre"
          autoComplete="Genre"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Genre:"
        />
        <input
          type="number"
          name="year"
          id="year"
          autoComplete="Year"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Year:"
        />
        <textarea
          id="synopsis"
          name="synopsis"
          rows="3"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:py-1.5 sm:text-sm sm:leading-6 px-2"
          placeholder="Synopsis:"
        />
        <div className="inline-flex w-full justify-between gap-x-1.5 rounded-md sm:py-2">
          <Link
            href={`/userPage/${session.user.id}`}
            type="back"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </Link>

          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
