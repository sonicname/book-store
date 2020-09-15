const mongoose = require("mongoose");

const BookModel = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  author: String,
});

const book = mongoose.model("book", BookModel, "Books");

module.exports = book;
