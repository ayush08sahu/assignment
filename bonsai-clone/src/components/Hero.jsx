import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Freelance with Confidence
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Contracts, proposals, invoicing & payments—everything in one place.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="p-4 rounded-md w-full sm:w-auto flex-grow text-gray-800"
          />
          <button className="bg-white text-blue-600 px-6 py-4 rounded-md font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}
