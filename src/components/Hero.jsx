import logo from '../assets/logo.png';
import { RocketIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const [typewriterPhrases, setTypewriterPhrases] = useState([
    t('typewriter.phrase1'),
    t('typewriter.phrase2'),
    t('typewriter.phrase3')
  ]);

  // Update phrases when language changes
  useEffect(() => {
    setTypewriterPhrases([
      t('typewriter.phrase1'),
      t('typewriter.phrase2'),
      t('typewriter.phrase3')
    ]);
  }, [t]);

  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100 text-purple-700">

      {/* Decorative Blurred Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>

      {/* Centered Purple Rectangle */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 md:px-20 py-24 z-10">

        <div className="bg-purple-700 text-white rounded-3xl shadow-2xl max-w-4xl w-full p-10 md:p-16 flex flex-col items-center gap-8 animate-fade-up">

          {/* Logo with White Container */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <img 
              src={logo} 
              alt={t('logoAlt')} 
              className="h-auto w-72 sm:w-96 md:w-[24rem] object-contain transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            />
          </div>

          {/* Subtitles with Animations */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center animate-fade-up">
            <Typewriter
              words={typewriterPhrases}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-center tracking-wide text-white animate-fade-up delay-500 drop-shadow-lg">
            {t('heroSubtitle')}
          </h3>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-2">
            <a href="#" className="hover:scale-110 transition-transform" aria-label={t('social.facebook')}>
              <FacebookIcon size={28} />
            </a>
            <a href="https://www.instagram.com/nextup.dz/" className="hover:scale-110 transition-transform" aria-label={t('social.instagram')}>
              <InstagramIcon size={28} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label={t('social.linkedin')}>
              <LinkedinIcon size={28} />
            </a>
          </div>

          {/* Get Started Button */}
          <a 
            href="#services" 
            className="mt-4 px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-purple-700 font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-2xl active:scale-95"
          >
            <RocketIcon size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-base">{t('getStarted')}</span>
          </a>

        </div>
      </div>

      {/* Bottom Explore Button */}
      <div className="z-10 mb-8 px-6 md:px-20 w-full flex justify-center">
        <a 
          href="#about" 
          className="text-purple-700 font-semibold text-lg md:text-xl flex items-center gap-2 animate-bounce cursor-pointer"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {t('explore')}
        </a>
      </div>

    </section>
  );
}