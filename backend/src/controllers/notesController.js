const mongoose = require("mongoose");
const noteModel = require("../models/noteModel.js");

// GET all notes
const getAllnotes = async (req, res) => {
  try {
    const notes = await noteModel.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET note by ID
const getnoteById = async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note fetched successfully",
      note,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST create a new note
const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = await noteModel.create({ title, content });

    res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT update a note
const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedNote = await noteModel.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // return updated document
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE a note
const deleteNotes = async (req, res) => {
  try {

    const deletedNote = await noteModel.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      note: deletedNote,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllnotes,
  getnoteById,
  createNotes,
  updateNotes,
  deleteNotes,
};
