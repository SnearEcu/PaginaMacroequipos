"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#004A8F] via-[#0066CC] to-[#BFC3C6] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido del Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Soluciones Industriales de Vanguardia
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed"
            >
              Especialistas en maquinaria industrial, automatización y servicios de ingeniería para optimizar tu producción en el sector agropecuario y alimentario.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="/productos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-[#004A8F] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nuestros Productos
              </motion.a>
              
              <motion.a
                href="/contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#004A8F] transition-all duration-300"
              >
                Contáctanos
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Imagen/Placeholder del Hero */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-8xl border-4 border-white/30"
            >
              🏭
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full"
      ></motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full"
      ></motion.div>
    </section>
  );
} 