const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  authors: [String],
  description: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: "",
    unique: true
  },
  title: {
    type: String,
    required: true
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
