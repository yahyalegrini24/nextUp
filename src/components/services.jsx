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
        color: "bg-purple-600"
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
        color: "bg-blue-600"
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
        color: "bg-pink-600"
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
    <section className="py-12 md:py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('services.title')} <span className="text-purple-700 font-extrabold">{t('services.highlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle.part1')} <span className="font-medium text-gray-800">{t('services.subtitle.part2')}</span> {t('services.subtitle.part3')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 h-full">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
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
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${service.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                        {sub.icon}
                      </div>
                      <span className="font-medium text-gray-700 tracking-tight">
                        {sub.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
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
              <div className={`w-12 h-12 ${services[currentIndex]?.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md`}>
                {services[currentIndex]?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                {services[currentIndex]?.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {services[currentIndex]?.description}
              </p>
              <div className="space-y-2">
                {services[currentIndex]?.subservices.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${services[currentIndex]?.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                      {sub.icon}
                    </div>
                    <span className="font-medium text-gray-700 text-sm tracking-tight">
                      {sub.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            aria-label={t('navigation.previous')}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            aria-label={t('navigation.next')}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-6 gap-1.5">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? `${services[currentIndex]?.color} w-4` : 'bg-gray-300'}`}
                aria-label={t('navigation.goTo') + (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}