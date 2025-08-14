import React from "react";
import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.jsx";
import Createpage from "./pages/Createpage.jsx";
import Notesdetailpage from "./pages/Notesdetailpage.jsx";

const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<Notesdetailpage />} />
      </Routes>
    </div>
  );
};

export default App;
