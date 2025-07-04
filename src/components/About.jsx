export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 overflow-hidden px-6 py-20">

      {/* Decorative Blurred Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass Container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-20 max-w-6xl w-full grid md:grid-cols-2 gap-10 z-10">

        {/* Left Side - Title & Visual */}
        <div className="flex flex-col justify-center text-white gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-up">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-md animate-fade-up delay-300">
            At NextUp, we empower bold thinkers to bring their ideas to life and shape the future together.
          </p>
        </div>

        {/* Right Side - Text & Icons */}
        <div className="flex flex-col justify-center gap-8 text-white">
          
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl animate-fade-up delay-500">
            <h3 className="text-2xl font-semibold mb-4">Why NextUp?</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                We turn bold ideas into reality
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                Community-driven innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                Future-focused solutions
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}
