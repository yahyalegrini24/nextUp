/* eslint-disable no-unused-vars */
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
    <section id="about" className="min-h-screen flex items-center justify-center bg-purple-900 px-6 py-20">
      
      {/* Container */}
      <div className="bg-purple-800/50 border border-white/10 rounded-xl p-8 md:p-12 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Left - Title & Description */}
        <div className="flex flex-col justify-center text-white gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 bg-purple-400 rounded-full"></div>
          <p className="text-base md:text-lg max-w-md">
            {t('about.mission')}
          </p>
        </div>

        {/* Right - Features */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-purple-700/30 border border-white/10 p-4 rounded-lg"
            >
              <span className="text-xl">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-purple-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
