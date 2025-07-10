"use client";
import { motion } from "framer-motion";

export default function Instalacion() {
  const fases = [
    {
      numero: "01",
      titulo: "Planificación",
      descripcion: "Estudio del sitio, análisis de condiciones y planificación logística",
      actividades: ["Inspección del sitio", "Medición de espacios", "Análisis de accesos", "Cronograma detallado"],
      icono: "📋"
    },
    {
      numero: "02",
      titulo: "Preparación",
      descripcion: "Acondicionamiento del área y preparación de infraestructura",
      actividades: ["Preparación de bases", "Instalaciones eléctricas", "Conexiones hidráulicas", "Sistemas de drenaje"],
      icono: "🔧"
    },
    {
      numero: "03",
      titulo: "Montaje",
      descripcion: "Instalación y ensamblaje de equipos con precisión técnica",
      actividades: ["Posicionamiento de equipos", "Conexiones mecánicas", "Alineación y nivelación", "Soldaduras in-situ"],
      icono: "⚙️"
    },
    {
      numero: "04",
      titulo: "Conexiones",
      descripcion: "Integración de sistemas eléctricos, hidráulicos y de control",
      actividades: ["Cableado eléctrico", "Tuberías y válvulas", "Sistemas de control", "Instrumentación"],
      icono: "🔌"
    },
    {
      numero: "05",
      titulo: "Pruebas",
      descripcion: "Verificación de funcionamiento y ajustes finales",
      actividades: ["Pruebas de presión", "Calibración de equipos", "Verificación de seguridad", "Optimización"],
      icono: "✅"
    },
    {
      numero: "06",
      titulo: "Entrega",
      descripcion: "Capacitación al personal y documentación técnica",
      actividades: ["Manual de operación", "Capacitación técnica", "Certificados de calidad", "Garantía"],
      icono: "🎓"
    }
  ];

  const especialidades = [
    {
      tipo: "Equipos de Ordeño",
      descripcion: "Instalación completa de salas de ordeño y sistemas automatizados",
      servicios: ["Montaje de estructuras", "Instalación de vacío", "Sistemas de limpieza", "Automatización"],
      icono: "🐄",
      tiempo: "5-15 días"
    },
    {
      tipo: "Tanques Industriales",
      descripcion: "Montaje de tanques de gran capacidad y sistemas de enfriamiento",
      servicios: ["Cimentación especializada", "Montaje con grúa", "Conexiones sanitarias", "Aislamiento térmico"],
      icono: "🥛",
      tiempo: "3-10 días"
    },
    {
      tipo: "Líneas de Proceso",
      descripcion: "Instalación de sistemas completos de procesamiento industrial",
      servicios: ["Tuberías sanitarias", "Válvulas automáticas", "Sistemas CIP", "Control de procesos"],
      icono: "🏭",
      tiempo: "10-30 días"
    },
    {
      tipo: "Cocinas Industriales",
      descripcion: "Montaje de equipamiento para cocinas comerciales e industriales",
      servicios: ["Instalación de equipos", "Sistemas de ventilación", "Conexiones de gas", "Certificaciones"],
      icono: "👨‍🍳",
      tiempo: "2-8 días"
    }
  ];

  const equipos = [
    { nombre: "Grúas Telescópicas", capacidad: "Hasta 50 toneladas", uso: "Montaje de equipos pesados", icono: "🏗️" },
    { nombre: "Soldadoras Portátiles", tipo: "TIG/MIG especializadas", uso: "Soldaduras en campo", icono: "🔥" },
    { nombre: "Herramientas Neumáticas", variedad: "Completo set profesional", uso: "Ensamblaje y ajustes", icono: "🔧" },
    { nombre: "Equipos de Medición", precision: "Instrumentos calibrados", uso: "Control dimensional", icono: "📏" },
    { nombre: "Equipos de Seguridad", tipo: "EPP certificados", uso: "Protección del personal", icono: "🦺" },
    { nombre: "Vehículos Especializados", flota: "Camiones y montacargas", uso: "Transporte y logística", icono: "🚛" }
  ];

  const garantias = [
    { tipo: "Instalación", periodo: "12 meses", cobertura: "Defectos de montaje y funcionamiento", icono: "🛡️" },
    { tipo: "Equipos", periodo: "24 meses", cobertura: "Fallas de fabricación y materiales", icono: "⚙️" },
    { tipo: "Soldaduras", periodo: "60 meses", cobertura: "Integridad estructural", icono: "🔥" },
    { tipo: "Soporte", periodo: "Permanente", cobertura: "Asesoría técnica telefónica", icono: "📞" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] text-white py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-7xl mb-6">🔧</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Instalación Profesional</h1>
            <p className="text-xl text-gray-200 mb-8">
              Montaje especializado con técnicos certificados y equipos de última generación
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Instalaciones</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Técnicos Certificados</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm">Satisfacción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Proceso de Instalación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Metodología de Instalación
          </h2>
          
          <div className="space-y-8">
            {fases.map((fase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-[#004A8F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {fase.numero}
                    </div>
                    <div className="text-4xl mb-4">{fase.icono}</div>
                    <h3 className="text-xl font-bold text-[#004A8F]">{fase.titulo}</h3>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <p className="text-gray-700 mb-4 text-lg">{fase.descripcion}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {fase.actividades.map((actividad, actIndex) => (
                        <div key={actIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">{actividad}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Especialidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Especialidades de Instalación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {especialidades.map((esp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{esp.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#004A8F]">{esp.tipo}</h3>
                    <span className="text-sm text-green-600 font-medium">Tiempo: {esp.tiempo}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{esp.descripcion}</p>
                <div className="grid grid-cols-2 gap-2">
                  {esp.servicios.map((servicio, servIndex) => (
                    <div key={servIndex} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-[#004A8F] rounded-full mr-2"></span>
                      {servicio}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipos y Herramientas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Equipos y Herramientas Especializadas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipos.map((equipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <div className="text-3xl mb-3">{equipo.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{equipo.nombre}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Especificación:</strong> {Object.values(equipo)[1]}</p>
                  <p><strong>Uso:</strong> {equipo.uso}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Garantías y CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Garantías */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Garantías y Respaldo</h3>
            <div className="space-y-4">
              {garantias.map((garantia, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-4">{garantia.icono}</span>
                  <div>
                    <h4 className="font-bold text-[#004A8F]">{garantia.tipo}</h4>
                    <p className="text-sm text-green-600 font-medium">{garantia.periodo}</p>
                    <p className="text-sm text-gray-600">{garantia.cobertura}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">¿Necesitas instalación profesional?</h3>
            <p className="text-gray-200 mb-6">
              Nuestro equipo técnico está listo para instalar tu equipo con la máxima calidad y seguridad.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-xl mr-3">🚀</span>
                <span>Instalación rápida y eficiente</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">🛡️</span>
                <span>Garantía extendida incluida</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">👨‍🔧</span>
                <span>Técnicos certificados</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">📞</span>
                <span>Soporte técnico 24/7</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-[#004A8F] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Instalación
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 