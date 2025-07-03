export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-16 relative"
    >
      {/* Background Blur Circles */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="backdrop-blur-xl bg-white/10 border border-purple-500 rounded-3xl p-10 md:p-16 max-w-3xl text-center shadow-2xl animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
          Who We Are
        </h2>
        <p className="text-lg md:text-xl text-black/80 leading-relaxed">
          At <span className="font-semibold text-purple-700">NextUp</span>, we are passionate about building innovative solutions that help businesses and individuals thrive in the digital world. Our team combines creativity, technology, and strategy to deliver exceptional results.
        </p>

        <p className="text-lg md:text-xl text-black/80 leading-relaxed mt-4">
          We believe in pushing boundaries, embracing bold ideas, and crafting user experiences that make an impact.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#services"
            className="px-6 py-3 bg-gradient-to-br from-purple-700 to-purple-500 text-white rounded-full text-lg font-medium hover:scale-110 transition-all duration-300"
          >
            Discover Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
