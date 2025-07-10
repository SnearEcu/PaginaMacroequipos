"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LineasNegocio() {
  const lineas = [
    {
      icon: "🐄",
      title: "Equipos de Ordeño",
      description: "Sistemas automatizados y accesorios para pequeñas y grandes lecherías con tecnología de punta.",
      href: "/productos/equipos-ordenio"
    },
    {
      icon: "🥛",
      title: "Tanques de Enfriamiento",
      description: "Equipos de almacenamiento y conservación de leche con control térmico y trazabilidad completa.",
      href: "/productos/tanques-enfriamiento"
    },
    {
      icon: "🏭",
      title: "Industria Agroalimentaria",
      description: "Diseño y fabricación de equipos de proceso en acero inoxidable grado alimenticio.",
      href: "/productos/industria-agroalimentaria"
    },
    {
      icon: "🍽️",
      title: "Menaje Inoxidable",
      description: "Ollas, mesas, bandejas y utensilios para cocinas industriales y domésticas de alta gama.",
      href: "/productos/menaje-inoxidable"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#004A8F] mb-4">
            Nuestras Líneas de Negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en acero inoxidable para el sector agropecuario y alimentario
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {lineas.map((linea, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Link href={linea.href} className="block">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl mb-6 group-hover:animate-pulse"
                  >
                    {linea.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#004A8F] mb-4 group-hover:text-[#0066CC] transition-colors">
                    {linea.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {linea.description}
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-[#004A8F] font-semibold group-hover:text-[#0066CC] transition-colors border-b-2 border-transparent group-hover:border-[#0066CC] pb-1"
                  >
                    Ver Productos →
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 