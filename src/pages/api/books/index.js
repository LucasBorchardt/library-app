import Book from "@/backend/models/Book";
import dbConnect from "@/backend/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const books = await Book.find();
    return response.status(200).json(books);
  }
  if (request.method === "POST") {
    try {
        const booksData = request.body;
        console.log(request.body)
        const book = new Book(bookData);
        const createdBook = await book.save();
        return response.status(201).json(createdBook);
    } catch (error) {
        console.error(error);
        return response.status(400).json({error: error.message});
    }
}
}
