import dbConnect from "../../../backend/connect";
import Book from "@/backend/models/Book";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const book = await Book.findById(id);
    if (!book) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(book);
  }
  
}
