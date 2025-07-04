import logo from '../assets/logo.png';
import { RocketIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100">

      {/* Decorative Blurred Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-700 opacity-25 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-grow px-6 md:px-20 py-24 gap-16 z-10">

        {/* Logo Left with Hover Animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-up">
          <img 
            src={logo} 
            alt="NextUp Logo" 
            className="h-auto w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] object-contain transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          />
        </div>

        {/* Description with Soft Purple Container */}
        <div className="max-w-xl w-full animate-fade-up bg-purple-700/90 text-white rounded-3xl p-10 md:p-16 shadow-2xl backdrop-blur-sm">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Who We Are
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            At <span className="font-semibold text-white">NextUp</span>, we build innovative solutions empowering businesses and individuals to thrive in the digital era.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-8">
            We push boundaries, embrace bold ideas, and craft experiences that make an impact.
          </p>

          <a 
            href="#services" 
            className="px-8 py-4 bg-gradient-to-r from-white/80 to-white text-purple-700 font-semibold rounded-full hover:from-white hover:to-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-2xl active:scale-95"
          >
            <RocketIcon size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-base">Get Started</span>
          </a>

        </div>

      </div>

      {/* Bottom Explore Button with Margin */}
      <div className="z-10 mt-[-2rem] mb-8 px-6 md:px-20 w-full flex justify-center">
        <a 
          href="#about" 
          className="text-purple-700 font-semibold text-lg md:text-xl flex items-center gap-2 animate-bounce cursor-pointer"
        >
          {/* Downward Arrow Icon */}
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>

          Explore NextUp
        </a>
      </div>

    </section>
  );
}
