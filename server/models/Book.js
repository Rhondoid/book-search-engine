const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema({
  description: {
    type: String,
    required: 'You need to leave a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  author:{
    type:[String],
    required: true
 },
  title: {
    type: String,
    required: 'You need to leave a title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  image: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  link: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const Book = model('Book', bookSchema);

module.exports = Book;
