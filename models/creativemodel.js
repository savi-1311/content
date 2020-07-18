const mongoose = require('mongoose');

const creativeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String
    }
  },
);

const creative = mongoose.model("creative", creativeSchema);
module.exports = creative;
