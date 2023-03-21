import mongoose from 'mongoose';

const {Schema} = mongoose;

const bookSchema = new Schema({
	title: {type: String, required: true},
	author: {type: String, required: true},
	genre: {type: String},
	year: {type: String},
	synopsis: {type: String, required: true},
});

const Book = mongoose.models.Books || mongoose.model('Books', bookSchema);

export default Book;
