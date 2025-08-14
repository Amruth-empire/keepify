const express = require("express");
const {
  getAllnotes,
  getnoteById,
  createNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/notesController.js");

const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getnoteById);
router.post("/create", createNotes);
router.put("/update/:id", updateNotes); // http://localhost:5001/api/notes/12
router.delete("/delete/:id", deleteNotes);

module.exports = router;
