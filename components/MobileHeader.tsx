import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-light lowercase serif-font" onClick={() => setIsOpen(false)}>
          psychology lab
        </Link>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 animate-in slide-in-from-top-2">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-light lowercase ${
                      isActive ? 'text-black font-medium' : 'text-gray-500'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};