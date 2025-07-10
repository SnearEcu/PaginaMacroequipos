"use client";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function SobreNosotros() {
  const estadisticas = [
    {
      numero: 15,
      sufijo: "+",
      texto: "Años de Experiencia"
    },
    {
      numero: 500,
      sufijo: "+",
      texto: "Proyectos Completados"
    },
    {
      numero: 100,
      sufijo: "%",
      texto: "Clientes Satisfechos"
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#004A8F] mb-6">
              Sobre Nosotros
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Somos una empresa líder en soluciones industriales con más de 15 años de experiencia en el sector. 
                Nuestro equipo de ingenieros especializados está comprometido con la innovación y la excelencia técnica.
              </p>
              
              <p>
                Nos dedicamos a proporcionar soluciones integrales que ayudan a nuestros clientes a optimizar sus 
                procesos productivos, reducir costos operativos y mejorar la calidad de sus productos.
              </p>
            </div>

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {estadisticas.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl md:text-4xl font-bold text-[#004A8F] mb-2"
                  >
                    <CountUp 
                      target={stat.numero} 
                      suffix={stat.sufijo}
                      duration={2000 + index * 200}
                      className="text-3xl md:text-4xl font-bold text-[#004A8F]"
                    />
                  </motion.div>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.texto}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagen/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-80 h-80 bg-gradient-to-br from-[#004A8F] to-[#0066CC] rounded-2xl flex items-center justify-center text-white shadow-2xl"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-8xl"
              >
                👥
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 