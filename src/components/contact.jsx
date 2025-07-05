/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 bg-white relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-4 leading-tight tracking-tight">
          {t('contact.title')}
        </h2>

        <p className="text-gray-500 mb-12 text-xl max-w-xl mx-auto font-medium">
          {t('contact.subtitle')}
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          <div className="relative">
            <input
              type="text"
              required
              className="peer p-5 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-base placeholder-transparent"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm font-medium peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 transition-all">
              {t('contact.form.name')}
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              className="peer p-5 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-base placeholder-transparent"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm font-medium peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 transition-all">
              {t('contact.form.email')}
            </label>
          </div>

          <div className="relative md:col-span-2">
            <textarea
              required
              className="peer p-5 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent h-40 text-base placeholder-transparent"
              placeholder=" "
            ></textarea>
            <label className="absolute left-4 top-4 text-gray-400 text-sm font-medium peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 transition-all">
              {t('contact.form.message')}
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-gradient-to-br from-purple-700 to-purple-500 text-white font-semibold text-lg py-4 px-8 rounded-2xl shadow-md hover:shadow-lg transition md:col-span-2"
          >
            {t('contact.form.submit')}
          </motion.button>
        </form>

        <p className="text-xl text-purple-700 mt-10 font-semibold">
          {t('contact.footer')}
        </p>
      </motion.div>
    </section>
  );
}
