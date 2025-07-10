"use client";
import { motion } from "framer-motion";

export default function Consultoria() {
  const areasEspecializacion = [
    {
      area: "Optimización de Procesos",
      descripcion: "Análisis y mejora de procesos productivos para maximizar eficiencia",
      servicios: ["Análisis de flujo", "Identificación de cuellos de botella", "Rediseño de procesos", "Implementación de mejoras"],
      beneficios: ["Hasta 30% más eficiencia", "Reducción de costos", "Mejor calidad", "Menor tiempo de proceso"],
      icono: "📈",
      casos: 45
    },
    {
      area: "Diseño de Plantas",
      descripcion: "Planificación integral de instalaciones industriales desde cero",
      servicios: ["Layout de planta", "Flujo de materiales", "Dimensionamiento", "Normativas y permisos"],
      beneficios: ["Diseño óptimo", "Cumplimiento normativo", "Escalabilidad", "ROI maximizado"],
      icono: "🏭",
      casos: 28
    },
    {
      area: "Automatización Industrial",
      descripcion: "Integración de tecnologías 4.0 para automatizar operaciones",
      servicios: ["Sistemas SCADA", "IoT Industrial", "PLCs avanzados", "Integración de sistemas"],
      beneficios: ["Reducción de errores", "Control en tiempo real", "Trazabilidad completa", "Menor mano de obra"],
      icono: "🤖",
      casos: 32
    },
    {
      area: "Seguridad Alimentaria",
      descripcion: "Implementación de sistemas de gestión de calidad y seguridad",
      servicios: ["HACCP", "ISO 22000", "BPM", "Auditorías de calidad"],
      beneficios: ["Certificaciones", "Calidad garantizada", "Acceso a mercados", "Reducción de riesgos"],
      icono: "🛡️",
      casos: 38
    },
    {
      area: "Eficiencia Energética",
      descripcion: "Optimización del consumo energético y sostenibilidad",
      servicios: ["Auditorías energéticas", "Sistemas eficientes", "Energías renovables", "Monitoreo de consumo"],
      beneficios: ["Hasta 40% ahorro", "Sostenibilidad", "Incentivos fiscales", "Menor huella carbono"],
      icono: "⚡",
      casos: 22
    },
    {
      area: "Análisis de Viabilidad",
      descripcion: "Estudios técnico-económicos para proyectos de inversión",
      servicios: ["Estudios de mercado", "Análisis financiero", "Evaluación técnica", "Plan de negocios"],
      beneficios: ["Decisiones informadas", "Minimizar riesgos", "ROI proyectado", "Financiamiento"],
      icono: "💼",
      casos: 19
    }
  ];

  const metodologia = [
    {
      fase: "Diagnóstico",
      descripcion: "Evaluación integral de la situación actual",
      actividades: ["Visita técnica", "Análisis de datos", "Identificación de oportunidades", "Benchmarking"],
      duracion: "1-2 semanas",
      icono: "🔍"
    },
    {
      fase: "Diseño",
      descripcion: "Desarrollo de soluciones personalizadas",
      actividades: ["Propuesta técnica", "Modelado y simulación", "Análisis de factibilidad", "Plan de implementación"],
      duracion: "2-4 semanas",
      icono: "📐"
    },
    {
      fase: "Implementación",
      descripcion: "Ejecución controlada del proyecto",
      actividades: ["Gestión de proyecto", "Supervisión técnica", "Capacitación", "Pruebas y ajustes"],
      duracion: "4-12 semanas",
      icono: "🚀"
    },
    {
      fase: "Seguimiento",
      descripcion: "Monitoreo de resultados y optimización continua",
      actividades: ["Medición de KPIs", "Reportes de progreso", "Ajustes finos", "Soporte continuo"],
      duracion: "Permanente",
      icono: "📊"
    }
  ];

  const expertos = [
    {
      nombre: "Ing. Carlos Mendoza",
      especialidad: "Procesos Industriales",
      experiencia: "15+ años",
      certificaciones: ["PMP", "Lean Six Sigma", "HACCP"],
      proyectos: 85,
      icono: "👨‍🔬"
    },
    {
      nombre: "Ing. María González",
      especialidad: "Automatización",
      experiencia: "12+ años",
      certificaciones: ["Siemens Certified", "Rockwell", "IoT Specialist"],
      proyectos: 62,
      icono: "👩‍💻"
    },
    {
      nombre: "Ing. Roberto Silva",
      especialidad: "Seguridad Alimentaria",
      experiencia: "18+ años",
      certificaciones: ["HACCP Lead", "ISO 22000", "SQF"],
      proyectos: 94,
      icono: "👨‍🍳"
    },
    {
      nombre: "Ing. Ana Torres",
      especialidad: "Eficiencia Energética",
      experiencia: "10+ años",
      certificaciones: ["CEM", "LEED AP", "ISO 50001"],
      proyectos: 47,
      icono: "👩‍🔬"
    }
  ];

  const casosExito = [
    {
      cliente: "Lácteos del Norte",
      proyecto: "Optimización de Línea de Producción",
      resultado: "35% aumento en productividad",
      ahorro: "$180,000/año",
      tiempo: "3 meses",
      icono: "🥛"
    },
    {
      cliente: "Alimentos Premium SA",
      proyecto: "Implementación HACCP",
      resultado: "Certificación internacional",
      ahorro: "Acceso a mercados EU",
      tiempo: "4 meses",
      icono: "🏆"
    },
    {
      cliente: "Procesadora del Valle",
      proyecto: "Automatización Industrial",
      resultado: "50% reducción de errores",
      ahorro: "$220,000/año",
      tiempo: "6 meses",
      icono: "🤖"
    }
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
            <div className="text-7xl mb-6">💡</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoría Técnica</h1>
            <p className="text-xl text-gray-200 mb-8">
              Expertos en optimización industrial, automatización y mejora continua para maximizar tu competitividad
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Proyectos</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Especialistas</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Éxito</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm">Ahorros Generados</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Áreas de Especialización */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Áreas de Especialización
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasEspecializacion.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{area.icono}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#004A8F]">{area.area}</h3>
                    <span className="text-sm text-green-600">{area.casos} casos exitosos</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{area.descripcion}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Servicios:</h4>
                  <div className="space-y-1">
                    {area.servicios.map((servicio, servIndex) => (
                      <div key={servIndex} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1 h-1 bg-[#004A8F] rounded-full mr-2"></span>
                        {servicio}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Beneficios:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.beneficios.map((beneficio, benIndex) => (
                      <span key={benIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {beneficio}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metodología */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Nuestra Metodología
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metodologia.map((fase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#004A8F] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <div className="pt-4">
                  <div className="text-4xl mb-4">{fase.icono}</div>
                  <h3 className="text-lg font-bold text-[#004A8F] mb-2">{fase.fase}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{fase.descripcion}</p>
                  
                  <div className="mb-4">
                    {fase.actividades.map((actividad, actIndex) => (
                      <div key={actIndex} className="text-xs text-gray-500 mb-1">
                        • {actividad}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-2">
                    <span className="text-xs font-semibold text-[#004A8F]">{fase.duracion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipo de Expertos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Nuestro Equipo de Expertos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertos.map((experto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{experto.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-1">{experto.nombre}</h3>
                <p className="text-sm text-gray-600 mb-2">{experto.especialidad}</p>
                <p className="text-xs text-green-600 font-medium mb-3">{experto.experiencia}</p>
                
                <div className="mb-3">
                  <div className="text-xs text-gray-500 mb-1">Certificaciones:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {experto.certificaciones.map((cert, certIndex) => (
                      <span key={certIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-2">
                  <span className="text-sm font-bold text-[#004A8F]">{experto.proyectos}</span>
                  <span className="text-xs text-gray-500"> proyectos</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Casos de Éxito y CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Casos de Éxito */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Casos de Éxito Recientes</h3>
            <div className="space-y-6">
              {casosExito.map((caso, index) => (
                <div key={index} className="border-l-4 border-[#004A8F] pl-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{caso.icono}</span>
                    <h4 className="font-bold text-[#004A8F]">{caso.cliente}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{caso.proyecto}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Resultado:</span>
                      <div className="font-semibold text-green-600">{caso.resultado}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Beneficio:</span>
                      <div className="font-semibold text-blue-600">{caso.ahorro}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Tiempo: {caso.tiempo}</div>
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
            <h3 className="text-2xl font-bold mb-4">¿Listo para optimizar tu operación?</h3>
            <p className="text-gray-200 mb-6">
              Nuestros consultores especializados están listos para analizar tu operación y proponer mejoras que generen resultados medibles.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-xl mr-3">🎯</span>
                <span>Diagnóstico gratuito inicial</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">📊</span>
                <span>ROI garantizado en proyectos</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">👥</span>
                <span>Equipo multidisciplinario</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">🏆</span>
                <span>Resultados comprobados</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-white text-[#004A8F] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Diagnóstico Gratuito
              </button>
              <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
                Ver Más Casos de Éxito
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 