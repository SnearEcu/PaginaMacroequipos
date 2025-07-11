"use client";
import { motion } from "framer-motion";

export default function DisenoFabricacion() {
  const proceso = [
    {
      paso: "01",
      titulo: "Consulta Inicial",
      descripcion: "Análisis de necesidades y especificaciones técnicas del cliente",
      icono: "💬",
      duracion: "1-2 días"
    },
    {
      paso: "02", 
      titulo: "Diseño Conceptual",
      descripcion: "Desarrollo de planos técnicos y modelado 3D del equipo",
      icono: "📐",
      duracion: "3-5 días"
    },
    {
      paso: "03",
      titulo: "Ingeniería Detallada",
      descripcion: "Cálculos estructurales, selección de materiales y componentes",
      icono: "🔬",
      duracion: "5-7 días"
    },
    {
      paso: "04",
      titulo: "Fabricación",
      descripcion: "Manufactura con acero inoxidable y controles de calidad",
      icono: "🏭",
      duracion: "15-30 días"
    },
    {
      paso: "05",
      titulo: "Pruebas y Control",
      descripcion: "Ensayos de funcionamiento y certificación de calidad",
      icono: "✅",
      duracion: "2-3 días"
    },
    {
      paso: "06",
      titulo: "Entrega",
      descripcion: "Empaque especializado y coordinación logística",
      icono: "🚛",
      duracion: "1-2 días"
    }
  ];

  const capacidades = [
    {
      categoria: "Equipos de Proceso",
      items: ["Tanques de almacenamiento", "Reactores y mezcladores", "Intercambiadores de calor", "Sistemas de filtración"],
      icono: "⚙️"
    },
    {
      categoria: "Sistemas de Transporte",
      items: ["Transportadores de banda", "Sistemas neumáticos", "Bombas y tuberías", "Elevadores de cangilones"],
      icono: "🔄"
    },
    {
      categoria: "Equipos de Ordeño",
      items: ["Salas de ordeño", "Sistemas de vacío", "Líneas de leche", "Equipos de limpieza CIP"],
      icono: "🐄"
    },
    {
      categoria: "Menaje Industrial",
      items: ["Mesas de trabajo", "Estanterías modulares", "Contenedores especiales", "Accesorios personalizados"],
      icono: "🍽️"
    }
  ];

  const tecnologias = [
    { nombre: "Soldadura TIG/MIG", descripcion: "Soldadura de precisión para acero inoxidable", icono: "🔥" },
    { nombre: "Corte por Plasma", descripcion: "Corte de alta precisión en espesores diversos", icono: "⚡" },
    { nombre: "Doblado CNC", descripcion: "Conformado automático de láminas y perfiles", icono: "🔧" },
    { nombre: "Pulido Sanitario", descripcion: "Acabados grado alimentario Ra ≤ 0.8 μm", icono: "✨" },
    { nombre: "Modelado 3D", descripcion: "Diseño asistido por computadora CAD/CAM", icono: "💻" },
    { nombre: "Control de Calidad", descripcion: "Inspección dimensional y pruebas de presión", icono: "🔍" }
  ];

  const certificaciones = [
    { nombre: "ASME", descripcion: "Código de recipientes a presión", icono: "🏆" },
    { nombre: "3A Sanitary", descripcion: "Estándares sanitarios", icono: "🥛" },
    { nombre: "ISO 9001", descripcion: "Gestión de calidad", icono: "📋" },
    { nombre: "HACCP", descripcion: "Análisis de peligros", icono: "🛡️" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] text-white py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-7xl mb-6">⚙️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Diseño y Fabricación</h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluciones personalizadas en acero inoxidable desde el concepto hasta la entrega
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center mb-8">
              <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white drop-shadow-lg">300+</div>
                <div className="text-sm text-white drop-shadow-lg">Proyectos</div>
              </div>
              <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white drop-shadow-lg">15+</div>
                <div className="text-sm text-white drop-shadow-lg">Ingenieros</div>
              </div>
              <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white drop-shadow-lg">99%</div>
                <div className="text-sm text-white drop-shadow-lg">Precisión</div>
              </div>
              <div className="bg-[#004A8F] bg-opacity-30 rounded-lg p-4 border border-white border-opacity-50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white drop-shadow-lg">ISO</div>
                <div className="text-sm text-white drop-shadow-lg">Certificación</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#004A8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Cotización
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
                Ver Portafolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Proceso de Diseño */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Nuestro Proceso de Diseño y Fabricación
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proceso.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg relative"
              >
                <div className="absolute -top-4 left-6 bg-[#004A8F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {paso.paso}
                </div>
                <div className="pt-4">
                  <div className="text-4xl mb-4 text-center">{paso.icono}</div>
                  <h3 className="text-xl font-bold text-[#004A8F] mb-3">{paso.titulo}</h3>
                  <p className="text-gray-600 mb-4">{paso.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duración:</span>
                    <span className="text-sm font-semibold text-[#004A8F]">{paso.duracion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capacidades de Fabricación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Capacidades de Fabricación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capacidades.map((capacidad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{capacidad.icono}</span>
                  <h3 className="text-xl font-bold text-[#004A8F]">{capacidad.categoria}</h3>
                </div>
                <ul className="space-y-2">
                  {capacidad.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Tecnologías y Equipamiento
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnologias.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{tech.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{tech.nombre}</h3>
                <p className="text-sm text-gray-600">{tech.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificaciones y CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Certificaciones</h3>
            <div className="grid grid-cols-2 gap-4">
              {certificaciones.map((cert, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">{cert.icono}</div>
                  <h4 className="font-bold text-[#004A8F] text-sm">{cert.nombre}</h4>
                  <p className="text-xs text-gray-600">{cert.descripcion}</p>
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
            <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-200 mb-6">
              Nuestro equipo de ingenieros está listo para convertir tu idea en realidad.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className="text-xl mr-3">📞</span>
                <span>Consulta técnica gratuita</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">📐</span>
                <span>Diseño personalizado</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">⚡</span>
                <span>Entrega en tiempo récord</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-[#004A8F] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Iniciar Proyecto
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 