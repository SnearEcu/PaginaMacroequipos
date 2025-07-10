"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function IndustriaAgroalimentaria() {
  const [categoriaActiva, setCategoriaActiva] = useState<keyof typeof equipos>("proceso");

  const equipos = {
    proceso: [
      {
        nombre: "Mezcladores Industriales",
        descripcion: "Equipos de mezcla para productos viscosos y sólidos",
        capacidad: "100-5000L",
        aplicaciones: ["Salsas", "Mermeladas", "Emulsiones"],
        precio: "Desde $8,500"
      },
      {
        nombre: "Pasteurizadores",
        descripcion: "Sistemas de pasteurización HTST y LTLT",
        capacidad: "500-10000L/h",
        aplicaciones: ["Lácteos", "Jugos", "Cerveza"],
        precio: "Desde $25,000"
      },
      {
        nombre: "Homogeneizadores",
        descripcion: "Equipos de alta presión para emulsiones estables",
        capacidad: "100-5000L/h",
        aplicaciones: ["Leche", "Cremas", "Mayonesa"],
        precio: "Desde $15,000"
      }
    ],
    almacenamiento: [
      {
        nombre: "Silos de Almacenamiento",
        descripcion: "Contenedores para materias primas y productos terminados",
        capacidad: "1000-50000L",
        aplicaciones: ["Granos", "Harinas", "Líquidos"],
        precio: "Desde $12,000"
      },
      {
        nombre: "Tanques de Proceso",
        descripcion: "Recipientes para fermentación y maduración",
        capacidad: "500-20000L",
        aplicaciones: ["Vinos", "Cervezas", "Yogurt"],
        precio: "Desde $6,500"
      },
      {
        nombre: "Sistemas de Dosificación",
        descripcion: "Equipos automáticos para ingredientes",
        capacidad: "Variable",
        aplicaciones: ["Aditivos", "Colorantes", "Conservantes"],
        precio: "Desde $4,200"
      }
    ],
    limpieza: [
      {
        nombre: "Sistemas CIP",
        descripcion: "Limpieza automática sin desmontaje",
        capacidad: "Personalizable",
        aplicaciones: ["Tuberías", "Tanques", "Intercambiadores"],
        precio: "Desde $18,000"
      },
      {
        nombre: "Lavadoras de Envases",
        descripcion: "Equipos para higienización de contenedores",
        capacidad: "100-2000 env/h",
        aplicaciones: ["Botellas", "Latas", "Bidones"],
        precio: "Desde $22,000"
      },
      {
        nombre: "Sistemas de Vapor",
        descripcion: "Generadores de vapor para esterilización",
        capacidad: "100-1000 kg/h",
        aplicaciones: ["Esterilización", "Calentamiento", "Limpieza"],
        precio: "Desde $14,000"
      }
    ]
  };

  const certificaciones = [
    { nombre: "HACCP", descripcion: "Análisis de Peligros y Puntos Críticos", icono: "🔍" },
    { nombre: "FDA", descripcion: "Administración de Alimentos y Medicamentos", icono: "🇺🇸" },
    { nombre: "ISO 22000", descripcion: "Gestión de Seguridad Alimentaria", icono: "📋" },
    { nombre: "CE", descripcion: "Conformidad Europea", icono: "🇪🇺" },
    { nombre: "3A Sanitary", descripcion: "Estándares Sanitarios", icono: "✅" },
    { nombre: "ASME", descripcion: "Código de Recipientes a Presión", icono: "⚙️" }
  ];

  const sectores = [
    { nombre: "Lácteos", productos: ["Leche", "Quesos", "Yogurt", "Mantequilla"], color: "bg-blue-100 text-blue-800" },
    { nombre: "Bebidas", productos: ["Jugos", "Cervezas", "Vinos", "Refrescos"], color: "bg-green-100 text-green-800" },
    { nombre: "Cárnicos", productos: ["Embutidos", "Conservas", "Marinados"], color: "bg-red-100 text-red-800" },
    { nombre: "Panadería", productos: ["Masas", "Rellenos", "Coberturas"], color: "bg-yellow-100 text-yellow-800" },
    { nombre: "Conservas", productos: ["Mermeladas", "Salsas", "Encurtidos"], color: "bg-purple-100 text-purple-800" },
    { nombre: "Aceites", productos: ["Refinación", "Extracción", "Filtrado"], color: "bg-orange-100 text-orange-800" }
  ];

  const procesos = [
    { etapa: "Recepción", descripcion: "Control de calidad de materias primas", icono: "📥" },
    { etapa: "Procesamiento", descripcion: "Transformación según especificaciones", icono: "⚙️" },
    { etapa: "Tratamiento", descripcion: "Pasteurización y esterilización", icono: "🔥" },
    { etapa: "Envasado", descripcion: "Empaque en condiciones asépticas", icono: "📦" },
    { etapa: "Almacenamiento", descripcion: "Conservación a temperatura controlada", icono: "🏭" },
    { etapa: "Distribución", descripcion: "Logística y cadena de frío", icono: "🚛" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Dashboard */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#004A8F]">Industria Agroalimentaria</h1>
              <p className="text-gray-600 mt-1">Soluciones integrales para procesamiento de alimentos</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-[#004A8F]">150+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#004A8F]">25+</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
              <div className="text-6xl">🏭</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-8">
        {/* Proceso de Producción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#004A8F] mb-6">Proceso de Producción</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {procesos.map((proceso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md text-center relative"
              >
                <div className="text-3xl mb-2">{proceso.icono}</div>
                <h3 className="font-semibold text-[#004A8F] text-sm mb-1">{proceso.etapa}</h3>
                <p className="text-xs text-gray-600">{proceso.descripcion}</p>
                {index < procesos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#004A8F] text-xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipos por Categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#004A8F] mb-6">Equipos por Categoría</h2>
          
          {/* Tabs */}
                     <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
             {(Object.keys(equipos) as Array<keyof typeof equipos>).map((categoria) => (
               <button
                 key={categoria}
                 onClick={() => setCategoriaActiva(categoria)}
                 className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                   categoriaActiva === categoria
                     ? "bg-[#004A8F] text-white shadow-md"
                     : "text-gray-600 hover:text-[#004A8F]"
                 }`}
               >
                 {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
               </button>
             ))}
           </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipos[categoriaActiva].map((equipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-[#004A8F]">{equipo.nombre}</h3>
                  <span className="text-sm font-semibold text-green-600">{equipo.precio}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{equipo.descripcion}</p>
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500">CAPACIDAD:</span>
                  <span className="text-sm font-semibold text-[#004A8F] ml-2">{equipo.capacidad}</span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 block mb-2">APLICACIONES:</span>
                  <div className="flex flex-wrap gap-1">
                    {equipo.aplicaciones.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-[#004A8F] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors">
                  Ver Detalles
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificaciones y Sectores */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-[#004A8F] mb-4">Certificaciones</h3>
            <div className="grid grid-cols-2 gap-4">
              {certificaciones.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{cert.icono}</div>
                  <div>
                    <div className="font-semibold text-[#004A8F] text-sm">{cert.nombre}</div>
                    <div className="text-xs text-gray-600">{cert.descripcion}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sectores */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-[#004A8F] mb-4">Sectores de Aplicación</h3>
            <div className="space-y-3">
              {sectores.map((sector, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-[#004A8F]">{sector.nombre}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${sector.color}`}>
                      {sector.productos.length} productos
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {sector.productos.map((producto, prodIndex) => (
                      <span
                        key={prodIndex}
                        className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-700"
                      >
                        {producto}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Listo para optimizar tu planta?</h3>
          <p className="text-gray-200 mb-6">
            Nuestros ingenieros especializados diseñarán la solución perfecta para tu proceso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#004A8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Consulta Técnica
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
              Descargar Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 