import React from "react";

export default function PricingPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {["Starter", "Professional", "Business"].map((plan, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
            <p className="text-3xl font-bold mb-4">${29 + i * 20}/mo</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✔️ Feature 1</li>
              <li>✔️ Feature 2</li>
              <li>✔️ Feature 3</li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Choose {plan}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
