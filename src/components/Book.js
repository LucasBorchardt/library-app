import Link from "next/link";

export default function Book({
  _id,
  title,
  author,
  genre,
  year,
  synopsis,
  session,
  userId,
  onDelete,
  thisBook,
}) { console.log("111111111", thisBook)
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-900 dark:text-white">{author}</p>
      <p className="mb-3 font-normal text-gray-900 dark:text-white">{genre}</p>
      <p className="mb-3 font-normal text-gray-900 dark:text-white">{year}</p>
      <p className="mb-3 font-normal text-gray-900 dark:text-white">
        {synopsis}
      </p>
      <div className="flex justify-around">
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        {session?.user.id === userId ? (
          <>
            <Link
              href={`/books/edit/${_id}`}
              type="edit"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </Link>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={onDelete}>
              Delete
            </button>
          </>
        ) : null}{" "}
      </div>
    </div>
  );
}
