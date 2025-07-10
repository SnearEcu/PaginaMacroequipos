"use client";
import { motion } from "framer-motion";

export default function Mantenimiento() {
  const tiposMantenimiento = [
    {
      tipo: "Preventivo",
      descripcion: "Inspecciones programadas para prevenir fallas y extender vida útil",
      beneficios: ["Reduce paradas imprevistas", "Extiende vida útil", "Mantiene garantías", "Optimiza rendimiento"],
      frecuencia: "Mensual/Trimestral",
      icono: "🔍",
      color: "bg-green-100 text-green-800"
    },
    {
      tipo: "Correctivo",
      descripcion: "Reparación inmediata de fallas y averías para restaurar funcionamiento",
      beneficios: ["Respuesta rápida", "Diagnóstico preciso", "Reparación efectiva", "Repuestos originales"],
      frecuencia: "Según necesidad",
      icono: "🔧",
      color: "bg-blue-100 text-blue-800"
    },
    {
      tipo: "Predictivo",
      descripcion: "Monitoreo continuo con tecnología IoT para predecir fallas",
      beneficios: ["Anticipa problemas", "Reduce costos", "Maximiza uptime", "Data analytics"],
      frecuencia: "Continuo",
      icono: "📊",
      color: "bg-purple-100 text-purple-800"
    },
    {
      tipo: "Overhaul",
      descripcion: "Renovación completa de equipos para restaurar condiciones originales",
      beneficios: ["Como nuevo", "Garantía extendida", "Actualización tech", "Certificación"],
      frecuencia: "Anual/Bianual",
      icono: "🔄",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const planes = [
    {
      nombre: "Plan Básico",
      precio: "$299",
      periodo: "mensual",
      descripcion: "Mantenimiento preventivo esencial para equipos pequeños",
      servicios: [
        "2 visitas técnicas al mes",
        "Inspección visual completa",
        "Lubricación y ajustes",
        "Reporte técnico básico",
        "Soporte telefónico"
      ],
      recomendado: false,
      icono: "🥉"
    },
    {
      nombre: "Plan Profesional",
      precio: "$599",
      periodo: "mensual",
      descripcion: "Mantenimiento integral para operaciones medianas",
      servicios: [
        "4 visitas técnicas al mes",
        "Mantenimiento preventivo completo",
        "Calibración de instrumentos",
        "Análisis de rendimiento",
        "Repuestos básicos incluidos",
        "Soporte prioritario 24/7"
      ],
      recomendado: true,
      icono: "🥈"
    },
    {
      nombre: "Plan Enterprise",
      precio: "$1,299",
      periodo: "mensual",
      descripcion: "Solución completa para grandes instalaciones industriales",
      servicios: [
        "Visitas ilimitadas",
        "Monitoreo IoT en tiempo real",
        "Mantenimiento predictivo",
        "Técnico dedicado",
        "Todos los repuestos incluidos",
        "Garantía extendida",
        "Actualizaciones tecnológicas"
      ],
      recomendado: false,
      icono: "🥇"
    }
  ];

  const serviciosEspecializados = [
    {
      servicio: "Sistemas de Ordeño",
      descripcion: "Mantenimiento especializado para equipos de ordeño automatizados",
      actividades: ["Calibración de vacío", "Limpieza de sistemas CIP", "Revisión de pulsadores", "Mantenimiento de bombas"],
      equipos: ["Sistemas rotatorios", "Salas paralelas", "Ordeñadoras móviles"],
      icono: "🐄"
    },
    {
      servicio: "Tanques de Enfriamiento",
      descripcion: "Mantenimiento de sistemas de refrigeración y conservación",
      actividades: ["Limpieza de evaporadores", "Revisión de compresores", "Calibración de termostatos", "Pruebas de hermeticidad"],
      equipos: ["Tanques verticales", "Tanques horizontales", "Sistemas de enfriamiento"],
      icono: "❄️"
    },
    {
      servicio: "Equipos de Proceso",
      descripcion: "Mantenimiento de maquinaria industrial de procesamiento",
      actividades: ["Inspección de soldaduras", "Calibración de válvulas", "Limpieza profunda", "Pruebas de presión"],
      equipos: ["Pasteurizadores", "Homogeneizadores", "Mezcladores industriales"],
      icono: "⚙️"
    },
    {
      servicio: "Sistemas Eléctricos",
      descripcion: "Mantenimiento de componentes eléctricos y automatización",
      actividades: ["Revisión de tableros", "Calibración de sensores", "Actualización de software", "Pruebas de seguridad"],
      equipos: ["PLCs", "Variadores", "Sistemas de control"],
      icono: "⚡"
    }
  ];

  const repuestos = [
    { categoria: "Componentes Mecánicos", items: ["Rodamientos", "Sellos", "Válvulas", "Bombas"], disponibilidad: "Inmediata", icono: "🔩" },
    { categoria: "Elementos Eléctricos", items: ["Motores", "Sensores", "Contactores", "PLCs"], disponibilidad: "24-48h", icono: "⚡" },
    { categoria: "Sistemas de Vacío", items: ["Bombas de vacío", "Reguladores", "Pulsadores", "Mangueras"], disponibilidad: "Inmediata", icono: "🌪️" },
    { categoria: "Refrigeración", items: ["Compresores", "Evaporadores", "Termostatos", "Gas refrigerante"], disponibilidad: "48-72h", icono: "❄️" }
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
            <div className="text-7xl mb-6">🛠️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mantenimiento Especializado</h1>
            <p className="text-xl text-gray-200 mb-8">
              Servicios integrales de mantenimiento para maximizar la vida útil y rendimiento de tus equipos
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Disponibilidad</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Uptime Garantizado</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">2h</div>
                <div className="text-sm">Tiempo Respuesta</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Equipos Atendidos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Tipos de Mantenimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Tipos de Mantenimiento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiposMantenimiento.map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{tipo.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#004A8F]">{tipo.tipo}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tipo.color}`}>
                      {tipo.frecuencia}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                <div className="grid grid-cols-2 gap-2">
                  {tipo.beneficios.map((beneficio, benIndex) => (
                    <div key={benIndex} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {beneficio}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Planes de Mantenimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Planes de Mantenimiento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {planes.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg relative ${
                  plan.recomendado ? "ring-2 ring-[#004A8F] scale-105" : ""
                }`}
              >
                {plan.recomendado && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#004A8F] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.icono}</div>
                  <h3 className="text-xl font-bold text-[#004A8F] mb-2">{plan.nombre}</h3>
                  <div className="text-3xl font-bold text-gray-800">
                    {plan.precio}
                    <span className="text-sm text-gray-500">/{plan.periodo}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{plan.descripcion}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.servicios.map((servicio, servIndex) => (
                    <li key={servIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {servicio}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.recomendado
                    ? "bg-[#004A8F] text-white hover:bg-[#0066CC]"
                    : "border-2 border-[#004A8F] text-[#004A8F] hover:bg-[#004A8F] hover:text-white"
                }`}>
                  Seleccionar Plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Servicios Especializados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-12 text-center">
            Servicios Especializados por Equipo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviciosEspecializados.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{servicio.icono}</span>
                  <h3 className="text-xl font-bold text-[#004A8F]">{servicio.servicio}</h3>
                </div>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Actividades:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {servicio.actividades.map((actividad, actIndex) => (
                      <div key={actIndex} className="text-sm text-gray-600">
                        • {actividad}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Equipos atendidos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {servicio.equipos.map((equipo, eqIndex) => (
                      <span key={eqIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {equipo}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Repuestos y CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Repuestos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Repuestos Originales</h3>
            <div className="space-y-4">
              {repuestos.map((categoria, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{categoria.icono}</span>
                    <div>
                      <h4 className="font-bold text-[#004A8F]">{categoria.categoria}</h4>
                      <span className="text-sm text-green-600">Disponibilidad: {categoria.disponibilidad}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categoria.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {item}
                      </span>
                    ))}
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
            <h3 className="text-2xl font-bold mb-4">¿Necesitas mantenimiento urgente?</h3>
            <p className="text-gray-200 mb-6">
              Nuestro equipo de técnicos especializados está disponible 24/7 para atender cualquier emergencia.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-xl mr-3">🚨</span>
                <span>Respuesta en menos de 2 horas</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">🔧</span>
                <span>Técnicos certificados en sitio</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">📦</span>
                <span>Repuestos originales garantizados</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-3">💰</span>
                <span>Presupuesto sin compromiso</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                🚨 Emergencia 24/7
              </button>
              <button className="w-full bg-white text-[#004A8F] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📞 Programar Mantenimiento
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 