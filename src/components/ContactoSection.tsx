"use client";
import { motion } from "framer-motion";

export default function ContactoSection() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Dirección",
      content: "Av. Industrial 123, Zona Industrial\nCiudad, País"
    },
    {
      icon: "📞",
      title: "Teléfono",
      content: "+1 (555) 123-4567"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@macroequipos.com"
    },
    {
      icon: "🕒",
      title: "Horarios",
      content: "Lunes - Viernes: 8:00 AM - 6:00 PM\nSábado: 9:00 AM - 1:00 PM"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#004A8F] mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con tus necesidades industriales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl">{info.icon}</div>
                <div>
                  <h4 className="font-bold text-[#004A8F] mb-2">{info.title}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] p-8 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#BFC3C6] focus:outline-none"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#BFC3C6] focus:outline-none"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#BFC3C6] focus:outline-none"
                />
              </div>
              
              <div>
                <select
                  name="servicio"
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#BFC3C6] focus:outline-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="equipos-ordenio">Equipos de Ordeño</option>
                  <option value="tanques-enfriamiento">Tanques de Enfriamiento</option>
                  <option value="industria-agroalimentaria">Industria Agroalimentaria</option>
                  <option value="menaje-inoxidable">Menaje Inoxidable</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#BFC3C6] focus:outline-none resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-[#004A8F] font-bold py-4 px-6 rounded-lg hover:bg-[#BFC3C6] transition-colors duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 