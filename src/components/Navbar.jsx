import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
      <div className="space-x-4">
        <button className="hover:text-blue-600">Home</button>
        <button className="hover:text-blue-600">About</button>
        <button className="hover:text-blue-600">Contact</button>
      </div>
    </nav>
  );
}
