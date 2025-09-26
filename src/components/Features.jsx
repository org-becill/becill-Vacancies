import React from "react";

export default function Features() {
  const items = [
    { title: "Awesome UI", desc: "Beautiful and responsive UI with modern design." },
    { title: "Easy to Code", desc: "Write clean and maintainable code using React + Tailwind." },
    { title: "Fast Performance", desc: "Optimized for speed, delivering smooth user experiences." }
  ];

  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="shadow-lg rounded-xl p-6 text-center bg-white hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}