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
  if (request.method === 'PUT') {
		// const book = await Book.findByIdAndUpdate(id,  request.body);
    console.log("llllllllll", request.body)

		return response.status(200).json({status: 'Book updated', book});
	}
  if (request.method === 'DELETE') {
		const book = await Book.findByIdAndDelete(id);
		return response.status(200).json(book);
	}
}
