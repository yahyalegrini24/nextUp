import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Camera, 
  Mic2, 
  Palette,
  Layers,
  Figma,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    category: "Development",
    title: "Web & Mobile Apps",
    description: "Pixel-perfect applications with stunning UI/UX. We build responsive websites and cross-platform mobile apps.",
    icon: <Layers size={24} />,
    subservices: [
      { icon: <Code size={18} />, name: "Web Development" },
      { icon: <Smartphone size={18} />, name: "Mobile Apps" },
      { icon: <Figma size={18} />, name: "UI/UX Design" }
    ],
    color: "bg-purple-600"
  },
  {
    category: "Content Creation",
    title: "Media Production",
    description: "Professional photography, videography and voiceovers that tell your brand's story effectively.",
    icon: <Camera size={24} />,
    subservices: [
      { icon: <Camera size={18} />, name: "Photo/Videography" },
      { icon: <Mic2 size={18} />, name: "Voice Overs" },
      { icon: <Palette size={18} />, name: "Editing" }
    ],
    color: "bg-blue-600"
  },
  {
    category: "Design",
    title: "Visual Identity",
    description: "Complete branding solutions including logos, style guides, and marketing materials.",
    icon: <Palette size={24} />,
    subservices: [
      { icon: <Palette size={18} />, name: "Graphic Design" },
      { icon: <Figma size={18} />, name: "Brand Identity" },
      { icon: <Layers size={18} />, name: "Print Materials" }
    ],
    color: "bg-pink-600"
  }
];

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-purple-700">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions for your business
          </p>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8 h-full">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.subservices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${service.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                        {sub.icon}
                      </div>
                      <span className="font-medium text-gray-700">{sub.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel (visible on mobile) */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 mx-4"
            >
              <div className={`w-12 h-12 ${services[currentIndex].color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {services[currentIndex].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{services[currentIndex].title}</h3>
              <p className="text-gray-600 mb-4">{services[currentIndex].description}</p>
              <div className="space-y-2">
                {services[currentIndex].subservices.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${services[currentIndex].color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                      {sub.icon}
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{sub.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? `${services[currentIndex].color}` : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}