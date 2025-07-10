"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TanquesEnfriamiento() {
  const [filtroCapacidad, setFiltroCapacidad] = useState("todos");
  
  const tanques = [
    {
      modelo: "TE-200",
      capacidad: "200L",
      categoria: "pequeño",
      enfriamiento: "2-4°C",
      tiempo: "90 min",
      voltaje: "220V",
      dimensiones: "120x80x95 cm",
      peso: "85 kg",
      precio: "$2,800",
      aplicacion: "Pequeñas lecherías"
    },
    {
      modelo: "TE-500",
      capacidad: "500L",
      categoria: "mediano",
      enfriamiento: "2-4°C",
      tiempo: "120 min",
      voltaje: "220V",
      dimensiones: "150x100x110 cm",
      peso: "140 kg",
      precio: "$4,500",
      aplicacion: "Lecherías medianas"
    },
    {
      modelo: "TE-1000",
      capacidad: "1000L",
      categoria: "mediano",
      enfriamiento: "2-4°C",
      tiempo: "150 min",
      voltaje: "220V/380V",
      dimensiones: "180x120x130 cm",
      peso: "220 kg",
      precio: "$7,200",
      aplicacion: "Lecherías grandes"
    },
    {
      modelo: "TE-2000",
      capacidad: "2000L",
      categoria: "grande",
      enfriamiento: "2-4°C",
      tiempo: "180 min",
      voltaje: "380V",
      dimensiones: "220x140x150 cm",
      peso: "380 kg",
      precio: "$12,500",
      aplicacion: "Plantas industriales"
    },
    {
      modelo: "TE-3000",
      capacidad: "3000L",
      categoria: "grande",
      enfriamiento: "2-4°C",
      tiempo: "210 min",
      voltaje: "380V",
      dimensiones: "250x160x170 cm",
      peso: "520 kg",
      precio: "$18,000",
      aplicacion: "Plantas industriales"
    },
    {
      modelo: "TE-5000",
      capacidad: "5000L",
      categoria: "industrial",
      enfriamiento: "2-4°C",
      tiempo: "240 min",
      voltaje: "380V",
      dimensiones: "280x180x200 cm",
      peso: "750 kg",
      precio: "$28,000",
      aplicacion: "Grandes industrias"
    }
  ];

  const sectores = [
    { nombre: "Lecherías Familiares", descripcion: "200-500L", icono: "🏠" },
    { nombre: "Lecherías Comerciales", descripcion: "1000-2000L", icono: "🏭" },
    { nombre: "Plantas Industriales", descripcion: "3000-5000L+", icono: "🏗️" },
    { nombre: "Cooperativas", descripcion: "Capacidad variable", icono: "🤝" }
  ];

  const tanquesFiltrados = tanques.filter(tanque => 
    filtroCapacidad === "todos" || tanque.categoria === filtroCapacidad
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] text-white py-16">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Tanques de Enfriamiento</h1>
              <p className="text-xl text-gray-200">Conservación óptima de la calidad láctea</p>
            </div>
            <div className="text-8xl">🥛</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-semibold text-gray-800">Filtrar por capacidad:</h3>
            <div className="flex gap-2">
              {[
                { value: "todos", label: "Todos" },
                { value: "pequeño", label: "Pequeño (200-500L)" },
                { value: "mediano", label: "Mediano (1000L)" },
                { value: "grande", label: "Grande (2000-3000L)" },
                { value: "industrial", label: "Industrial (5000L+)" }
              ].map((filtro) => (
                <button
                  key={filtro.value}
                  onClick={() => setFiltroCapacidad(filtro.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filtroCapacidad === filtro.value
                      ? "bg-[#004A8F] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filtro.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabla de Especificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="bg-[#004A8F] text-white p-6">
            <h2 className="text-2xl font-bold">Especificaciones Técnicas</h2>
            <p className="text-gray-200 mt-2">Comparativa completa de modelos disponibles</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacidad</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enfriamiento</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Voltaje</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dimensiones</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peso</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tanquesFiltrados.map((tanque, index) => (
                  <motion.tr
                    key={tanque.modelo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#004A8F]">{tanque.modelo}</div>
                      <div className="text-xs text-gray-500">{tanque.aplicacion}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                      {tanque.capacidad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tanque.enfriamiento}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tanque.tiempo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tanque.voltaje}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tanque.dimensiones}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tanque.peso}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-bold text-green-600">{tanque.precio}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Sectores de Aplicación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-8 text-center">Sectores de Aplicación</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectores.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{sector.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{sector.nombre}</h3>
                <p className="text-gray-600 text-sm">{sector.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Características Técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Características Estándar</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Acero inoxidable AISI 304 de grado alimentario
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Sistema de enfriamiento por expansión directa
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Aislamiento térmico de poliuretano
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Agitador automático para homogeneización
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Panel de control digital con alarmas
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Válvulas de descarga sanitarias
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Opciones Adicionales</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Sistema de limpieza CIP automatizado
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Registro de temperaturas con datalogger
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Conexión IoT para monitoreo remoto
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Compresor de respaldo automático
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Medidor de nivel ultrasónico
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Ruedas para tanques móviles
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Necesitas una cotización personalizada?</h3>
          <p className="text-gray-200 mb-6">
            Nuestros ingenieros pueden diseñar la solución perfecta para tu operación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#004A8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Cotización
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
              Descargar Catálogo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 