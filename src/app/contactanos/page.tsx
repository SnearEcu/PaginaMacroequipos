"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contactanos() {
  const [sucursalActiva, setSucursalActiva] = useState<keyof typeof sucursales>("ibarra");

  const sucursales = {
    ibarra: {
      nombre: "Ibarra - Matriz",
      direccion: "Av. Teodoro Gómez de la Torre 5-65 y Av. Mariano Acosta",
      ciudad: "Ibarra, Imbabura",
      telefono: "+593 6 295-1234",
      whatsapp: "+593 99 123-4567",
      email: "ibarra@macroequipos.com",
      horario: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM",
      coordenadas: { lat: 0.3516, lng: -78.1239 },
      icono: "🏢"
    },
    riobamba: {
      nombre: "Riobamba - Sucursal",
      direccion: "Av. Daniel León Borja 42-38 y Duchicela",
      ciudad: "Riobamba, Chimborazo",
      telefono: "+593 3 296-5678",
      whatsapp: "+593 99 234-5678",
      email: "riobamba@macroequipos.com",
      horario: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM",
      coordenadas: { lat: -1.6635, lng: -78.6547 },
      icono: "🏪"
    },
    julioAndrade: {
      nombre: "Julio Andrade - Sucursal",
      direccion: "Calle Bolívar 123 y García Moreno",
      ciudad: "Julio Andrade, Carchi",
      telefono: "+593 6 298-9012",
      whatsapp: "+593 99 345-6789",
      email: "julioandrade@macroequipos.com",
      horario: "Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:00 AM - 12:00 PM",
      coordenadas: { lat: 0.7833, lng: -77.7167 },
      icono: "🏬"
    }
  };

  const departamentos = [
    {
      nombre: "Ventas",
      telefono: "+593 99 100-2000",
      email: "ventas@macroequipos.com",
      icono: "💼",
      descripcion: "Cotizaciones y asesoría comercial"
    },
    {
      nombre: "Soporte Técnico",
      telefono: "+593 99 100-3000",
      email: "soporte@macroequipos.com",
      icono: "🔧",
      descripcion: "Asistencia técnica y mantenimiento"
    },
    {
      nombre: "Administración",
      telefono: "+593 99 100-4000",
      email: "admin@macroequipos.com",
      icono: "📋",
      descripcion: "Facturación y trámites administrativos"
    },
    {
      nombre: "Gerencia",
      telefono: "+593 99 100-5000",
      email: "gerencia@macroequipos.com",
      icono: "👔",
      descripcion: "Atención ejecutiva y proyectos especiales"
    }
  ];

  const sucursalSeleccionada = sucursales[sucursalActiva];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] text-white py-16">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl text-gray-200">Estamos aquí para ayudarte en todo Ecuador</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {/* Mapa y Sucursales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Selector de Sucursales */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#004A8F] mb-6">Nuestras Sucursales</h2>
            <div className="space-y-4">
              {(Object.entries(sucursales) as Array<[keyof typeof sucursales, typeof sucursales[keyof typeof sucursales]]>).map(([key, sucursal]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSucursalActiva(key)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    sucursalActiva === key
                      ? "bg-[#004A8F] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{sucursal.icono}</span>
                    <h3 className="font-bold">{sucursal.nombre}</h3>
                  </div>
                  <p className="text-sm opacity-90">{sucursal.ciudad}</p>
                  <p className="text-sm opacity-80">{sucursal.direccion}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mapa y Detalles */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Mapa Simulado */}
              <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🗺️</div>
                  <h3 className="text-xl font-bold text-[#004A8F] mb-2">
                    {sucursalSeleccionada.nombre}
                  </h3>
                  <p className="text-gray-700">{sucursalSeleccionada.ciudad}</p>
                  <div className="mt-4 inline-flex items-center bg-[#004A8F] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0066CC] transition-colors">
                    <span className="mr-2">📍</span>
                    Ver en Google Maps
                  </div>
                </div>
              </div>

              {/* Información de la Sucursal */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#004A8F] mb-3">Información de Contacto</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">📍</span>
                        <span className="text-gray-700">{sucursalSeleccionada.direccion}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">📞</span>
                        <span className="text-gray-700">{sucursalSeleccionada.telefono}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">📱</span>
                        <span className="text-gray-700">{sucursalSeleccionada.whatsapp}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">📧</span>
                        <span className="text-gray-700">{sucursalSeleccionada.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#004A8F] mb-3">Horarios de Atención</h4>
                    <div className="text-sm text-gray-600">
                      <p>{sucursalSeleccionada.horario}</p>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <button className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                        💬 WhatsApp
                      </button>
                      <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                        📞 Llamar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Departamentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-8 text-center">
            Departamentos Especializados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departamentos.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{dept.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{dept.nombre}</h3>
                <p className="text-sm text-gray-600 mb-4">{dept.descripcion}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <span className="text-lg mr-2">📞</span>
                    <span className="font-medium text-gray-700">{dept.telefono}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-lg mr-2">📧</span>
                    <span className="text-xs text-gray-600">{dept.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulario de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#004A8F] mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
                    placeholder="+593 99 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]">
                  <option>Cotización de productos</option>
                  <option>Soporte técnico</option>
                  <option>Información general</option>
                  <option>Servicio de mantenimiento</option>
                  <option>Otros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
                  placeholder="Describe tu consulta o requerimiento..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#004A8F] text-white py-3 rounded-lg font-semibold hover:bg-[#0066CC] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🏆</span>
                <div>
                  <h4 className="font-semibold mb-1">25+ Años de Experiencia</h4>
                  <p className="text-sm text-gray-200">Líderes en el mercado ecuatoriano</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1">Servicio Integral</h4>
                  <p className="text-sm text-gray-200">Desde el diseño hasta el mantenimiento</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🌟</span>
                <div>
                  <h4 className="font-semibold mb-1">Calidad Garantizada</h4>
                  <p className="text-sm text-gray-200">Acero inoxidable grado alimenticio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <h4 className="font-semibold mb-1">Atención 24/7</h4>
                  <p className="text-sm text-gray-200">Soporte técnico cuando lo necesites</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-lg">
              <h4 className="font-semibold mb-2">Línea de Emergencias</h4>
              <p className="text-2xl font-bold">📞 +593 99 911-2233</p>
              <p className="text-sm text-gray-200">Disponible 24 horas para emergencias técnicas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 