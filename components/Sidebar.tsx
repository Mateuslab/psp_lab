import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Github, Twitter, Mail, MapPin } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 lg:w-80 h-screen fixed left-0 top-0 bg-gray-50/50 border-r border-gray-100 p-8 z-10 overflow-y-auto">
      {/* Header Section */}
      <div className="mb-12">
        <Link to="/" className="block">
          <h1 className="text-3xl lg:text-4xl text-gray-800 font-light tracking-tight mb-4 lowercase serif-font">
            psychology lab
          </h1>
        </Link>
        <h2 className="text-sm text-gray-500 font-light leading-relaxed">
          National University of Loja
          <br />
          <span className="italic opacity-80">investigating the human cognitive toolkit</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-light transition-colors duration-200 lowercase ${
                    isActive ? 'text-gray-900 font-normal translate-x-1' : 'text-gray-500 hover:text-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / Socials */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex space-x-4 mb-4 text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors" title="Github"><Github size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors" title="Twitter"><Twitter size={20} /></a>
          <a href="#" className="hover:text-red-400 transition-colors" title="Email"><Mail size={20} /></a>
          <Link to="/contact" className="hover:text-green-600 transition-colors" title="Location"><MapPin size={20} /></Link>
        </div>
        <p className="text-xs text-gray-400 font-light">
          &copy; {new Date().getFullYear()} Psychology Lab<br />
          National University of Loja
        </p>
      </div>
    </aside>
  );
};