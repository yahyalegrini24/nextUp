import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen bg-white/80 text-center pt-20">
      
      {/* Logo inside fixed-height container */}
      <div className="h-48 flex justify-center items-center mb-6">
        <img src={logo} alt="NextUp Logo" className="h-200 object-contain" />
      </div>
      
      
 {/* Enhanced subtitle with animated underline effect */}
     
       <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-xl font-sans">
  <span className="text-black font-medium">Empowering Brands with</span> 

  <span className="text-purple-700 font-bold relative group ml-1">
    Innovative Tech Solutions
    <span className="absolute left-0 -bottom-1 h-0.5 bg-purple-700 w-0 group-hover:w-full transition-all duration-500"></span>
  </span> 

  <span className="text-black font-medium"> & </span> 

  <span className="text-purple-700 font-bold relative group ml-1">
    Creative Content
    <span className="absolute left-0 -bottom-1 h-0.5 bg-purple-700 w-0 group-hover:w-full transition-all duration-500"></span>
  </span>
</p>



      
      {/* Explore Link */}
      <a 
        href="#about" 
        className="mt-5 text-purple-700 hover:text-purple-900 animate-bounce text-lg sm:text-xl font-medium"
      >
        ↓ Explore NextUp
      </a>
    </section>
  );
}
