import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-slate-600 border-b border-base-content/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          className="text-3xl font-bold text-primary font-mono tracking-tighter"
        >
          Thinkboard
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/create" className="btn btn-primary flex items-center gap-2">
            <PlusIcon className="size-5" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
