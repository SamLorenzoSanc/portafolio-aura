import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Instala emailjs-com: npm install emailjs-com
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_0ktj6ms'; // Cambia por tu Service ID de EmailJS
const TEMPLATE_ID = 'template_ymgqy96'; // Cambia por tu Template ID de EmailJS
const USER_ID = 'B4URr8moS5zBaZvxe'; // Cambia por tu User ID de EmailJS

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setSent(true);
        setLoading(false);
      }, (err) => {
        setError('Error al enviar el mensaje. Inténtalo de nuevo.');
        setLoading(false);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            ¿Quieres ponerte en contacto conmigo? Rellena el formulario y te responderé lo antes posible.
          </p>
        </motion.div>
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-purple-500/20 flex flex-col gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500 outline-none transition-all"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo electrónico"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500 outline-none transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            required
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-purple-500 outline-none transition-all"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-60"
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
          {sent && <p className="text-green-400 text-center">¡Mensaje enviado correctamente!</p>}
          {error && <p className="text-red-400 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 