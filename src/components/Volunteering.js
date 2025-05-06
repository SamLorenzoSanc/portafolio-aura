import React from 'react';
import { motion } from 'framer-motion';

const volunteering = [
  {
    org: "Congreso de Estudiantes de Ingeniería Informática ULL",
    logo: "/cesinf.png", // Cambia el nombre del archivo si tienes el logo
    role: "Organizador en el Área de Ponencias y Presentador",
    date: "Oct 2022 - Presente · 2 años 8 meses",
    area: "Ciencia y Tecnología",
    skills: [
      "Organización de eventos",
      "Comunicación pública",
      "Gestión de ponentes",
      "Trabajo en equipo"
    ]
  },
  {
    org: "Universidad de La Laguna",
    logo: "/ull.png", // Cambia el nombre del archivo si tienes el logo
    role: "Vocal del Consejo de Estudiantes",
    date: "Mar 2023 - Presente · 2 años 3 meses",
    area: "Representación estudiantil",
    skills: [
      "Negociación",
      "Liderazgo",
      "Resolución de conflictos"
    ]
  },
  {
    org: "RITSI",
    logo: "/ritsi.png", // Cambia el nombre del archivo si tienes el logo
    role: "Representante de la Universidad de La Laguna",
    date: "",
    area: "Reunión de Estudiantes de Ingenierías Técnicas y Superiores en Informática",
    skills: [
      "Coordinación nacional",
      "Networking",
      "Defensa de intereses estudiantiles"
    ]
  },
  {
    org: "Jornadas Técnicas de Ingeniería",
    logo: "/jti.png", // Cambia el nombre del archivo si tienes el logo
    role: "Organizador en el Área de Empresas y Patrocinios",
    date: "Sep 2022 - Feb 2024 · 1 año 6 meses",
    area: "Empresas y Patrocinios",
    skills: [
      "Gestión de patrocinios",
      "Relaciones con empresas",
      "Organización logística"
    ]
  }
];

const Volunteering = () => {
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
            Voluntariado
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experiencias de voluntariado que han potenciado mis habilidades personales y profesionales.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((item, idx) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 flex gap-6 items-center"
            >
              <div className="flex-shrink-0">
                <img src={item.logo} alt={item.org} className="w-16 h-16 object-contain rounded-full bg-white/10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.org}</h3>
                <p className="text-purple-300 mb-1">{item.role}</p>
                {item.date && <p className="text-gray-400 text-sm mb-1">{item.date}</p>}
                <p className="text-gray-400 text-sm mb-2">{item.area}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering; 