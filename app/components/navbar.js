import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-5xl font-bold">
          RIPPLE.ai
        </a>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Stories
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Submissions
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Updates
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
