// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-950 shadow-md backdrop-blur-md filter p-7 fixed top-0 w-full z-50 flex items-center justify-between">
      <ul className="flex gap-10 items-center text-lg font-semibold text-white">
        <li>
          <Link to="/" className="hover:text-yellow-200 hover:font-bold transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/addcampaign" className="hover:text-yellow-200 hover:font-bold transition duration-300 text-nowrap">
            Add Campaign
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-yellow-200 hover:font-bold transition duration-300">
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-lg font-semibold text-white hover:text-yellow-200 hover:font-bold transition duration-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
