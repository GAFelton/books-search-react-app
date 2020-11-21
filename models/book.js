const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  bookId: {
    type: String,
    unique: true
  },
  selfLink: {
    type: String,
    default: "",
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ""
  },
  authors: [String],
  description: {
    type: String,
    default: ""
  },
  publisher: {
    type: String,
    default: ""
  },
  publishedDate: {
    type: String,
    default: ""
  },
  previewLink: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
