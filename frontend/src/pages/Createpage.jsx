import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Createpage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/notes/create", {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-black">Create New Note</h2>
        <form onSubmit={createNote} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered bg-slate-200 text-black placeholder:text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="textarea textarea-bordered h-40 font-normal max-h-72 bg-slate-200 text-black placeholder:text-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Createpage;
