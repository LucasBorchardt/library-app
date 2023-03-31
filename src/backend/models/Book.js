import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  year: { type: String },
  synopsis: { type: String, required: true },
  user: { type: String },
  userId: { type: String },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
