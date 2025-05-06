import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una aplicación web moderna construida con React y Node.js',
    image: '/proyecto1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Sistema de gestión de contenido con panel de administración',
    image: '/proyecto2.jpg',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Proyecto 3',
    description: 'Aplicación móvil de seguimiento de fitness',
    image: '/proyecto3.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoLink: '#',
    githubLink: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg transition-colors duration-300"
          >
            Ver Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-center py-2 rounded-lg transition-colors duration-300"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados.
            Cada proyecto representa un desafío único y una oportunidad de aprendizaje.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 