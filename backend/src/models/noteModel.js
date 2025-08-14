const mongoose = require("mongoose");

//creating a Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt,updatedAt
);

// creating  a model for that schema
const noteModel = mongoose.model("Note", noteSchema);

module.exports = noteModel;
