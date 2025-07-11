"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Diseño y Fabricación",
      descripcion: "Soluciones personalizadas en acero inoxidable desde el concepto hasta la entrega final",
      caracteristicas: ["Diseño CAD 3D", "Fabricación especializada", "Control de calidad", "Certificaciones"],
      icono: "⚙️",
      enlace: "/servicios/diseno-fabricacion",
      color: "from-blue-500 to-blue-700"
    },
    {
      titulo: "Instalación Profesional",
      descripcion: "Montaje especializado con técnicos certificados y equipos de última generación",
      caracteristicas: ["Técnicos certificados", "Equipos especializados", "Garantía extendida", "Soporte 24/7"],
      icono: "🔧",
      enlace: "/servicios/instalacion",
      color: "from-green-500 to-green-700"
    },
    {
      titulo: "Mantenimiento Integral",
      descripcion: "Servicios completos de mantenimiento preventivo, correctivo y predictivo",
      caracteristicas: ["Mantenimiento preventivo", "Respuesta rápida", "Repuestos originales", "Planes flexibles"],
      icono: "🛠️",
      enlace: "/servicios/mantenimiento",
      color: "from-orange-500 to-orange-700"
    },
    {
      titulo: "Consultoría Técnica",
      descripcion: "Asesoría especializada en optimización de procesos y mejora continua",
      caracteristicas: ["Análisis de procesos", "Optimización", "Automatización", "Capacitación"],
      icono: "💡",
      enlace: "/servicios/consultoria",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const ventajas = [
    {
      titulo: "Experiencia Comprobada",
      descripcion: "Más de 15 años brindando soluciones integrales",
      icono: "🏆",
      estadistica: "500+ proyectos"
    },
    {
      titulo: "Equipo Especializado",
      descripcion: "Técnicos e ingenieros altamente capacitados",
      icono: "👥",
      estadistica: "25+ especialistas"
    },
    {
      titulo: "Cobertura Nacional",
      descripcion: "Servicio en todo el territorio ecuatoriano",
      icono: "🇪🇨",
      estadistica: "3 sucursales"
    },
    {
      titulo: "Garantía Total",
      descripcion: "Respaldamos todos nuestros trabajos",
      icono: "🛡️",
      estadistica: "Hasta 5 años"
    }
  ];

  const procesos = [
    {
      paso: "01",
      titulo: "Consulta Inicial",
      descripcion: "Evaluamos tus necesidades específicas",
      icono: "📞"
    },
    {
      paso: "02",
      titulo: "Propuesta Técnica",
      descripcion: "Desarrollamos la solución ideal",
      icono: "📋"
    },
    {
      paso: "03",
      titulo: "Ejecución",
      descripcion: "Implementamos con los más altos estándares",
      icono: "🚀"
    },
    {
      paso: "04",
      titulo: "Seguimiento",
      descripcion: "Garantizamos tu satisfacción total",
      icono: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] text-white py-20">
        <div className="container mx-auto px-8">
                  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios Integrales
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluciones completas para el sector agropecuario e industrial con tecnología de vanguardia
            </p>
                         <div className="grid md:grid-cols-4 gap-4 text-center">
               <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                 <CountUp target={4} className="text-2xl font-bold text-white drop-shadow-lg" />
                 <div className="text-sm text-white drop-shadow-lg">Áreas de Servicio</div>
               </div>
               <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                 <CountUp target={500} suffix="+" className="text-2xl font-bold text-white drop-shadow-lg" />
                 <div className="text-sm text-white drop-shadow-lg">Proyectos Exitosos</div>
               </div>
               <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                 <div className="text-2xl font-bold text-white drop-shadow-lg">24/7</div>
                 <div className="text-sm text-white drop-shadow-lg">Soporte Técnico</div>
               </div>
               <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                 <CountUp target={15} suffix="+" className="text-2xl font-bold text-white drop-shadow-lg" />
                 <div className="text-sm text-white drop-shadow-lg">Años de Experiencia</div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Nuestros Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Nuestros Servicios
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={servicio.enlace}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${servicio.color} rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                      {servicio.icono}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#004A8F] mb-4 text-center">
                      {servicio.titulo}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-center">
                      {servicio.descripcion}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {servicio.caracteristicas.map((caracteristica, carIndex) => (
                        <div key={carIndex} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <span className="text-[#004A8F] font-semibold group-hover:text-[#0066CC] transition-colors">
                        Ver Detalles →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Por qué elegirnos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            ¿Por qué elegir Macroequipos?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{ventaja.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{ventaja.titulo}</h3>
                <p className="text-gray-600 mb-4 text-sm">{ventaja.descripcion}</p>
                <div className="bg-gray-100 rounded-lg p-3">
                  <span className="text-lg font-bold text-[#004A8F]">{ventaja.estadistica}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proceso de Trabajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Nuestro Proceso de Trabajo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {procesos.map((proceso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg text-center relative z-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#004A8F] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {proceso.paso}
                  </div>
                  
                  <div className="pt-4">
                    <div className="text-4xl mb-4">{proceso.icono}</div>
                    <h3 className="text-lg font-bold text-[#004A8F] mb-3">{proceso.titulo}</h3>
                    <p className="text-gray-600 text-sm">{proceso.descripcion}</p>
                  </div>
                </div>
                
                {/* Flecha conectora mejorada */}
                {index < procesos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      {/* Línea de la flecha */}
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#004A8F] to-[#0066CC]"></div>
                      {/* Punta de la flecha */}
                      <div className="w-0 h-0 border-l-[6px] border-l-[#0066CC] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    </motion.div>
                  </div>
                )}
                
                {/* Flecha vertical para móvil */}
                {index < procesos.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      {/* Línea vertical */}
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#004A8F] to-[#0066CC]"></div>
                      {/* Punta de la flecha */}
                      <div className="w-0 h-0 border-t-[6px] border-t-[#0066CC] border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu operación?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contáctanos hoy y descubre cómo nuestros servicios pueden transformar tu negocio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactanos">
              <button className="bg-white text-[#004A8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Cotización
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
              Agendar Consulta
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 