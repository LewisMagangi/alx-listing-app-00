import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="font-bold text-xl">Logo</div>
      {/* Navigation */}
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Mansion</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
      </nav>
      {/* Search and Auth */}
      <div className="flex items-center space-x-2">
        <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
        <button className="px-3 py-1 bg-blue-600 text-white rounded">Sign In</button>
        <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
