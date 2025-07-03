import { useState, useEffect } from "react";
import { Menu, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 px-6 py-3 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/10 rounded-4xl' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="h-12 flex items-center">
        <img src={logo} alt="NextUp Logo" className="h-25 object-contain" />
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4 relative">
        
        {/* Language Button */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <Globe className="text-white" size={20} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-4 bg-white/90 backdrop-blur-xl rounded-xl p-3 space-y-2 w-32 animate-fade-down border border-purple-500">
              <button
                className="block text-black hover:text-purple-700 text-lg font-medium transition w-full text-left"
                onClick={() => setLangOpen(false)}
              >
                English
              </button>
              <button
                className="block text-black hover:text-purple-700 text-lg font-medium transition w-full text-left"
                onClick={() => setLangOpen(false)}
              >
                العربية
              </button>
            </div>
          )}
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <Menu className="text-white" size={24} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-4 bg-white/90 backdrop-blur-xl rounded-xl p-4 space-y-4 w-48 animate-fade-down border border-purple-500">
              <a
                href="#about"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Why NextUp?
              </a>
              <a
                href="#contact"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
