import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2024",
    title: "Prácticas en Codebay Innovation",
    company: "Codebay Innovation",
    description: "Desarrollo de un proyecto propio utilizando Adobe Experience Manager (AEM). Implementación de soluciones empresariales y aprendizaje de tecnologías Adobe.",
    type: "work"
  },
  {
    year: "2023",
    title: "Ingeniería Informática",
    company: "Universidad de La Laguna",
    description: "Estudios en Ingeniería Informática, formándome en fundamentos de programación, bases de datos, redes y desarrollo de software.",
    type: "education"
  },
  {
    year: "2022",
    title: "Transformación Digital en GTC",
    company: "Gran Telescopio de Canarias",
    description: "Desarrollo de una aplicación web para la transformación digital de procesos. Conversión de cálculos del telescopio desde Excel a una plataforma web interactiva.",
    type: "work"
  },
  {
    year: "2021",
    title: "Ciclo Superior en ASIR",
    company: "IES El Médano",
    description: "Graduado con Matrícula de Honor en Administración de Sistemas Informáticos en Red. Especialización en redes, sistemas operativos y seguridad informática.",
    type: "education"
  }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Línea de tiempo y punto */}
      <div className="relative flex items-center justify-center md:w-1/4">
        <div className="absolute h-full w-0.5 bg-purple-500/30" />
        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {item.year}
        </div>
      </div>

      {/* Contenido */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex-1 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-sm ${
            item.type === 'work' 
              ? 'bg-purple-500/20 text-purple-300' 
              : 'bg-pink-500/20 text-pink-300'
          }`}>
            {item.type === 'work' ? 'Experiencia' : 'Educación'}
          </span>
          {item.title.includes("ASIR") && (
            <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-300">
              Matrícula de Honor
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-purple-300 mb-3">{item.company}</p>
        <p className="text-gray-400">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Mi Trayectoria
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Un recorrido por mi experiencia profesional y formación académica,
            mostrando mi evolución y crecimiento en el mundo del desarrollo.
          </p>
        </motion.div>

        <div className="relative space-y-12 md:space-y-24">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Descargar CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 