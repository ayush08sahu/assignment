import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Bonsai</h1>
      <nav className="space-x-4">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
        <a href="/templates" className="text-gray-700 hover:text-blue-600">Templates</a>
        <a href="/login" className="text-blue-600 font-semibold">Login</a>
      </nav>
    </header>
  );
}
