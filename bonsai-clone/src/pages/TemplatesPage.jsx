import React from "react";

const templates = [
  { title: "Contract Template", desc: "Use for secure agreements." },
  { title: "Invoice Template", desc: "Bill clients professionally." },
  { title: "Proposal Template", desc: "Pitch with clarity." },
];

export default function TemplatesPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Templates</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {templates.map((tpl, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{tpl.title}</h3>
            <p className="text-gray-600 mb-4">{tpl.desc}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              View Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
