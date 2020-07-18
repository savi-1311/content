const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String
    },
  content: {
    type: String
    }
  },
);

const bookreview = mongoose.model("bookreview", bookSchema);
module.exports = bookreview;
