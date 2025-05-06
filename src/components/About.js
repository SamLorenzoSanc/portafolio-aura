import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50">
                <img
                  src="/image.png"
                  alt="Samuel Lorenzo Sánchez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-pulse bg-purple-500/20" />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 text-white"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Sobre Mí
              </h2>
              <p className="text-lg mb-4 text-gray-300">
                Soy un desarrollador apasionado por crear experiencias digitales únicas y memorables.
                Mi enfoque combina diseño creativo con código limpio y eficiente.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Con experiencia en desarrollo web full-stack, me especializo en crear
                aplicaciones modernas y responsivas que no solo funcionan perfectamente,
                sino que también cautivan a los usuarios.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300"
                >
                  Descargar CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full transition-all duration-300"
                  onClick={() => {
                    const section = document.getElementById('contacto');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contactar
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 