import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen bg-white/80 text-center pt-20">
      
      <img src={logo} alt="NextUp Logo" className="h-200 " />
      <p className="text-lg text-gray-600 mb-10">Web & Mobile Applications | Content Creation | Tech Services</p>
      <a href="#services" className="mt-5 text-purple-700 hover:text-purple-900 animate-bounce">
        ↓ Explore Services
      </a>
    </section>
  );
}
