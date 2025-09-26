import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h2 className="text-4xl font-bold mb-4">Welcome to MyApp</h2>
      <p className="max-w-2xl mb-6 text-lg">
        Build modern and scalable web applications with ease. This is a
        sample homepage built with React and TailwindCSS.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
        Get Started
      </button>
    </section>
  );
}