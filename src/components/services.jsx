export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
        
        <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-600">Modern, responsive websites that elevate your brand online.</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Mobile Applications</h3>
          <p className="text-gray-600">iOS & Android apps crafted to engage your audience.</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Digital Solutions</h3>
          <p className="text-gray-600">Tailor-made digital tools to solve business challenges.</p>
        </div>

      </div>
    </section>
  );
}
