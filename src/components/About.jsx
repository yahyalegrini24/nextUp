/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures([
      {
        title: t('about.features.innovation.title'),
        description: t('about.features.innovation.description'),
        icon: "💡"
      },
      {
        title: t('about.features.community.title'),
        description: t('about.features.community.description'),
        icon: "🌐"
      },
      {
        title: t('about.features.future.title'),
        description: t('about.features.future.description'),
        icon: "🚀"
      }
    ]);
  }, [t]);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 overflow-hidden px-6 py-20">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Glass Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16 max-w-6xl w-full grid md:grid-cols-2 gap-10 z-10"
      >

        {/* Left Side - Title & Visual */}
        <div className="flex flex-col justify-center text-white gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-4 mb-6"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl font-medium max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('about.mission')}
          </motion.p>
        </div>

        {/* Right Side - Interactive Features */}
        <div className="flex flex-col justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
              viewport={{ once: true }}
              className={`backdrop-blur-md bg-white/5 border ${hoveredItem === index ? 'border-purple-400/50' : 'border-white/20'} p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.span 
                  className="text-2xl p-3 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20"
                  animate={{
                    scale: hoveredItem === index ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-purple-100/80">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}