import { useState, useEffect } from "react";
import { Menu, Globe } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    // For RTL languages like Arabic
    if (lng === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };

  // Determine if current language is RTL
  const isRTL = i18n.language === 'ar';

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
            aria-label={t('changeLanguage')}
          >
            <Globe className="text-white" size={20} />
          </button>

          {langOpen && (
            <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-4 bg-white/90 backdrop-blur-xl rounded-xl p-3 space-y-2 w-32 animate-fade-down border border-purple-500`}>
              <button
                className="block text-black hover:text-purple-700 text-lg font-medium transition w-full text-left"
                onClick={() => changeLanguage('en')}
              >
                English
              </button>
              <button
                className="block text-black hover:text-purple-700 text-lg font-medium transition w-full text-left"
                onClick={() => changeLanguage('ar')}
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
            aria-label={t('menu')}
          >
            <Menu className="text-white" size={24} />
          </button>

          {menuOpen && (
            <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-4 bg-white/90 backdrop-blur-xl rounded-xl p-4 space-y-4 w-48 animate-fade-down border border-purple-500`}>
              <a
                href="#about"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('about')}
              </a>
              <a
                href="#services"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('servicesMenu')}
              </a>
              <a
                href="#portfolio"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('whyNextUp')}
              </a>
              <a
                href="#contact"
                className="block text-black hover:text-purple-700 text-lg font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('contact')}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}