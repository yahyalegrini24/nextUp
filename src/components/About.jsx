/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures([
      { title: t('about.features.innovation.title'), description: t('about.features.innovation.description'), icon: "💡" },
      { title: t('about.features.community.title'), description: t('about.features.community.description'), icon: "🌐" },
      { title: t('about.features.future.title'), description: t('about.features.future.description'), icon: "🚀" },
    ]);
  }, [t]);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 px-6 py-20 overflow-hidden">

      {/* Subtle Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      />

      {/* Glass Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16 max-w-5xl w-full grid md:grid-cols-2 gap-10 relative z-10"
      >

        {/* Left - Title & Description */}
        <div className="flex flex-col justify-center text-white gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <p className="text-lg md:text-xl font-medium max-w-md">
            {t('about.mission')}
          </p>
        </div>

        {/* Right - Features */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-white/5 border border-white/20 backdrop-blur-md p-5 rounded-2xl shadow-lg transition"
            >
              <span className="text-2xl p-3 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg">{feature.icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-purple-100/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
