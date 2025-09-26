import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto py-6 bg-gray-800 text-gray-300 text-center">
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}