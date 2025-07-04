import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { CodeIcon, SmartphoneIcon, CpuIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "Web Development",
    description: "Sites that load at lightspeed with immersive interactions",
    icon: <CodeIcon className="w-8 h-8" />,
    glow: "purple"
  },
  {
    title: "Mobile Apps",
    description: "Pixel-perfect iOS & Android experiences users crave",
    icon: <SmartphoneIcon className="w-8 h-8" />,
    glow: "blue"
  },
  {
    title: "AI Solutions",
    description: "Machine learning models that evolve with your business",
    icon: <CpuIcon className="w-8 h-8" />,
    glow: "pink"
  }
];

const ServiceStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
      animate(x, [0, 50, 0], { duration: 1.5 });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Matching hero decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Digital Arsenal</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-purple-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tools crafted to future-proof your business
        </motion.p>

        {/* Holographic card stack */}
        <div className="relative h-96 md:h-[32rem] perspective-1000">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const zIndex = services.length - index;
            const scale = 1 - (index * 0.1);
            const yOffset = index * 30;
            const opacity = isActive ? 1 : 0.7 - (index * 0.2);
            
            return (
              <motion.div
                key={index}
                className={`absolute inset-0 mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg border border-purple-100 p-8 cursor-pointer transition-all duration-500 ${isActive ? '' : 'pointer-events-none'}`}
                style={{
                  zIndex,
                  scale,
                  y: yOffset,
                  opacity,
                  x: isActive ? x : 0,
                  filter: isActive ? 
                    `drop-shadow(0 10px 30px rgba(168, 85, 247, 0.3))` : 
                    `drop-shadow(0 5px 15px rgba(168, 85, 247, 0.1))`
                }}
                whileHover={isActive ? { y: -10 } : {}}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`absolute inset-0 rounded-2xl overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-white to-${service.glow}-50 opacity-80`} />
                  <div className={`absolute inset-0 bg-gradient-to-r from-${service.glow}-500/5 to-${service.glow}-400/5 border border-${service.glow}-100/30 rounded-2xl`} />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-${service.glow}-100 flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-3">{service.title}</h3>
                  <p className="text-purple-600">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-purple-600 w-6' : 'bg-purple-200'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStack;