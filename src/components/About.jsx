import { motion } from 'framer-motion';
import { useState } from 'react';

const ProfessionalAgencyDNA = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Strategic Discovery",
      description: "We conduct comprehensive market analysis and user research to build solutions that address real business challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Precision Development",
      description: "Enterprise-grade engineering with rigorous quality assurance at every stage of the development lifecycle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Seamless Delivery",
      description: "Managed deployment with post-launch support to ensure sustained performance and ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-purple-700">End-to-End Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to measurable results
          </motion.p>
        </div>

        {/* Three Pillar Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-28">
          {/* Vertical Connection Line */}
          <div className="hidden lg:block h-[400px] w-px bg-gradient-to-b from-purple-100 to-purple-300 relative">
            {pillars.map((_, i) => (
              <motion.div
                key={i}
                className={`absolute left-1/2 w-16 h-16 rounded-full flex items-center justify-center -translate-x-1/2 cursor-pointer transition-all ${activePillar === i ? 'bg-purple-700 text-white shadow-lg' : 'bg-white text-purple-700 border border-purple-200'}`}
                style={{ top: `${30 + i * 33}%` }}
                onClick={() => setActivePillar(i)}
                whileHover={{ scale: 1.05 }}
              >
                {pillars[i].icon}
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Connection Line */}
          <div className="lg:hidden w-full h-px bg-gradient-to-r from-purple-100 to-purple-300 relative my-16">
            {pillars.map((_, i) => (
              <motion.div
                key={i}
                className={`absolute top-1/2 w-16 h-16 rounded-full flex items-center justify-center -translate-y-1/2 cursor-pointer transition-all ${activePillar === i ? 'bg-purple-700 text-white shadow-lg' : 'bg-white text-purple-700 border border-purple-200'}`}
                style={{ left: `${15 + i * 35}%` }}
                onClick={() => setActivePillar(i)}
                whileHover={{ scale: 1.05 }}
              >
                {pillars[i].icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <motion.div 
          key={activePillar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-xl p-10 border border-gray-100">
            <div className="flex items-start gap-8">
              <div className={`p-4 rounded-lg bg-purple-100 text-purple-700`}>
                {pillars[activePillar].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pillars[activePillar].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalAgencyDNA;