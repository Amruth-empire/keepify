import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/notes");
      setNotes(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axios.delete(`http://localhost:5001/api/notes/delete/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-black">All Notes</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : notes.length === 0 ? (
          <p className="text-center text-black">No notes found. Create one!</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note._id}
                className="card shadow-md bg-slate-100 p-4 border border-base-content/10"
              >
                <h3 className="text-lg font-semibold text-black">{note.title}</h3>
                <p className="text-sm mt-1 line-clamp-3 text-black">{note.content}</p>
                <div className="mt-3 flex gap-2">
                  <Link
                    to={`/note/${note._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
