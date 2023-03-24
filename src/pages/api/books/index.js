import Book from "@/backend/models/Book";
import dbConnect from "@/backend/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const books = await Book.find();
    return response.status(200).json(books);
  }  
}
