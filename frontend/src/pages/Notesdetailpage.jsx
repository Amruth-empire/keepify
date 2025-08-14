import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Components/Navbar.jsx";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Notesdetailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNote = useCallback(async () => {
    try {
      const res = await axios.get(`https://keepify-backend.onrender.com/api/notes/${id}`);
      setNote(res.data.note);
      setTitle(res.data.note.title);
      setContent(res.data.note.content);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  }, [id]);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://keepify-backend.onrender.com/api/notes/update/${id}`, {
        title,
        content,
      });
      setEditing(false);
      fetchNote();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  if (!note) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">Loading...</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-xl mx-auto p-6">
        {editing ? (
          <form
            onSubmit={updateNote}
            className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
          >
            <input
              type="text"
              className="p-3 rounded-lg border text-black border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              required
            />
            <textarea
              className="p-3 rounded-lg border text-black border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              required
            />
            <div className="flex gap-3">
              <button className="btn btn-primary flex-1">Update</button>
              <button
                type="button"
                className="btn btn-ghost flex-1 text-black"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">
              {note.title}
            </h2>
            <p className="mb-6 text-gray-700 whitespace-pre-line">
              {note.content}
            </p>
            <div className="flex gap-3">
              <button
                className="btn btn-warning flex-1"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-secondary flex-1"
                onClick={() => navigate("/")}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notesdetailpage;
