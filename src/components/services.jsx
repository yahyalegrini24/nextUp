/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

export default function ServiceCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Initialize services with translations
  useEffect(() => {
    setServices([
      {
        category: t('services.development.category'),
        title: t('services.development.title'),
        description: t('services.development.description'),
        icon: <Layers size={24} />,
        subservices: [
          { icon: <Code size={18} />, name: t('services.development.subservices.web') },
          { icon: <Smartphone size={18} />, name: t('services.development.subservices.mobile') },
          { icon: <Figma size={18} />, name: t('services.development.subservices.design') }
        ],
        color: "bg-purple-600",
        gradient: "from-purple-600 to-indigo-600"
      },
      {
        category: t('services.content.category'),
        title: t('services.content.title'),
        description: t('services.content.description'),
        icon: <Camera size={24} />,
        subservices: [
          { icon: <Camera size={18} />, name: t('services.content.subservices.media') },
          { icon: <Mic2 size={18} />, name: t('services.content.subservices.voice') },
          { icon: <Palette size={18} />, name: t('services.content.subservices.editing') }
        ],
        color: "bg-blue-600",
        gradient: "from-blue-600 to-cyan-600"
      },
      {
        category: t('services.design.category'),
        title: t('services.design.title'),
        description: t('services.design.description'),
        icon: <Palette size={24} />,
        subservices: [
          { icon: <Palette size={18} />, name: t('services.design.subservices.graphic') },
          { icon: <Figma size={18} />, name: t('services.design.subservices.brand') },
          { icon: <Layers size={18} />, name: t('services.design.subservices.print') }
        ],
        color: "bg-pink-600",
        gradient: "from-pink-600 to-rose-600"
      }
    ]);
  }, [t]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight"
          >
            <span className="text-purple-700">{t('services.title')}</span> <span className="font-extrabold">{t('services.highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('services.subtitle.part1')} <span className="font-medium text-gray-800">{t('services.subtitle.part2')}</span> {t('services.subtitle.part3')}
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Background gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="p-8 flex-1">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md transition-transform group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.subservices.map((sub, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-10 h-10 ${service.color} bg-opacity-10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-opacity-20`}>
                          {sub.icon}
                        </div>
                        <span className="font-medium text-gray-700 tracking-tight">
                          {sub.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - Enhanced */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 mx-4 relative overflow-hidden"
            >
              {/* Mobile card gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${services[currentIndex]?.gradient} opacity-5 pointer-events-none`}></div>
              
              <div className={`w-12 h-12 ${services[currentIndex]?.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md mx-auto`}>
                {services[currentIndex]?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight text-center">
                {services[currentIndex]?.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                {services[currentIndex]?.description}
              </p>
              <div className="space-y-2">
                {services[currentIndex]?.subservices.map((sub, i) => (
                  <motion.div 
                    key={i}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                  >
                    <div className={`w-8 h-8 ${services[currentIndex]?.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                      {sub.icon}
                    </div>
                    <span className="font-medium text-gray-700 text-sm tracking-tight">
                      {sub.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Enhanced */}
          <button 
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors active:scale-95"
            aria-label={t('navigation.previous')}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors active:scale-95"
            aria-label={t('navigation.next')}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? `${service.color} w-6 opacity-100` : 'bg-gray-300 opacity-70'}`}
                aria-label={t('navigation.goTo') + (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}