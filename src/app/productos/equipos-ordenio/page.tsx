"use client";
import { motion } from "framer-motion";

export default function EquiposOrdenio() {
  const productos = [
    {
      nombre: "Sistema de Ordeño Rotativo",
      descripcion: "Sistema automatizado para grandes lecherías con capacidad de 50-80 vacas por hora.",
      especificaciones: ["Capacidad: 50-80 vacas/hora", "Acero inoxidable 316L", "Control automático", "Limpieza CIP integrada"],
      precio: "Desde $25,000",
      imagen: "🔄"
    },
    {
      nombre: "Sala de Ordeño Paralela",
      descripcion: "Diseño eficiente para lecherías medianas con máximo confort para los animales.",
      especificaciones: ["16-24 puestos", "Piso antideslizante", "Iluminación LED", "Sistema de identificación"],
      precio: "Desde $18,000",
      imagen: "🏗️"
    },
    {
      nombre: "Ordeñadora Móvil",
      descripcion: "Solución portátil para pequeñas lecherías y sistemas de pastoreo.",
      especificaciones: ["2-4 unidades", "Tanque 40L", "Motor eléctrico", "Ruedas neumáticas"],
      precio: "Desde $3,500",
      imagen: "🚛"
    }
  ];

  const beneficios = [
    "Mayor Eficiencia - Reduce el tiempo de ordeño hasta en un 40%",
    "Calidad Superior - Mantiene la calidad de la leche con sistema cerrado",
    "Bienestar Animal - Diseño ergonómico que reduce el estrés del ganado",
    "ROI Garantizado - Recuperación de inversión en 18-24 meses"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4 px-8">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-[#004A8F]">Inicio</a> / 
            <a href="/productos" className="hover:text-[#004A8F] ml-1">Productos</a> / 
            <span className="text-[#004A8F] ml-1">Equipos de Ordeño</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🐄</div>
                <h1 className="text-2xl font-bold text-[#004A8F]">Equipos de Ordeño</h1>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Beneficios Principales:</h3>
                <ul className="space-y-2">
                  {beneficios.map((beneficio, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#004A8F] text-white py-3 rounded-lg mt-6 font-semibold"
              >
                Descargar Catálogo
              </motion.button>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-[#004A8F] mb-4">
                Sistemas de Ordeño Profesionales
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tecnología de vanguardia para optimizar la productividad de tu lechería. 
                Nuestros equipos están diseñados para diferentes escalas de operación, 
                desde pequeñas lecherías familiares hasta grandes instalaciones industriales.
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {productos.map((producto, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] p-8 text-center">
                    <div className="text-5xl text-white mb-2">{producto.imagen}</div>
                    <div className="text-white font-semibold">{producto.precio}</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#004A8F] mb-3">{producto.nombre}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{producto.descripcion}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-800 text-sm">Especificaciones:</h4>
                      {producto.especificaciones.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center text-xs text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {spec}
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full border-2 border-[#004A8F] text-[#004A8F] py-2 rounded-lg text-sm font-semibold hover:bg-[#004A8F] hover:text-white transition-all"
                    >
                      Más Información
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Información Técnica</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Instalación y Puesta en Marcha</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Estudio previo del sitio de instalación</li>
                    <li>• Capacitación del personal operativo</li>
                    <li>• Pruebas de funcionamiento y calibración</li>
                    <li>• Documentación técnica completa</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Mantenimiento y Soporte</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Servicio técnico 24/7</li>
                    <li>• Repuestos originales disponibles</li>
                    <li>• Planes de mantenimiento preventivo</li>
                    <li>• Soporte remoto especializado</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] rounded-xl p-8 text-white"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💬</div>
                <div>
                  <blockquote className="text-lg italic mb-4">
                    "Desde que instalamos el sistema de ordeño de Macroequipos, hemos aumentado nuestra productividad en un 35% y mejorado significativamente la calidad de nuestra leche."
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-semibold">Carlos Mendoza</p>
                    <p className="text-gray-200">Hacienda San José - 200 vacas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 