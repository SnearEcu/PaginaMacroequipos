"use client";
import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    {
      icon: "🔧",
      title: "Instalación",
      description: "Instalación profesional de equipos con garantía y certificación de funcionamiento."
    },
    {
      icon: "⚙️",
      title: "Mantenimiento",
      description: "Servicio técnico 24/7 con planes de mantenimiento preventivo y correctivo."
    },
    {
      icon: "🔩",
      title: "Repuestos",
      description: "Repuestos originales y compatibles para todos nuestros equipos."
    },
    {
      icon: "🎧",
      title: "Soporte Técnico",
      description: "Asesoría técnica especializada y capacitación para el uso de equipos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Servicios especializados para mantener tus equipos en óptimas condiciones
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="text-5xl mb-6"
              >
                {servicio.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#BFC3C6] transition-colors">
                {servicio.title}
              </h3>
              
              <p className="text-gray-100 leading-relaxed">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 