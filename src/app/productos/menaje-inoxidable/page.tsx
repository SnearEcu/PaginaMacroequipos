"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MenajeInoxidable() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("todos");
  const [ordenPrecio, setOrdenPrecio] = useState("menor");

  const productos = [
    // Cocina
    { nombre: "Olla Industrial 50L", categoria: "cocina", precio: 180, descripcion: "Olla de acero inoxidable 316L con tapa", aplicacion: "Restaurantes", imagen: "🍲" },
    { nombre: "Sartén Profesional 40cm", categoria: "cocina", precio: 85, descripcion: "Sartén antiadherente de acero inoxidable", aplicacion: "Cocinas comerciales", imagen: "🍳" },
    { nombre: "Parrilla Industrial", categoria: "cocina", precio: 320, descripcion: "Parrilla de acero inoxidable con quemadores", aplicacion: "Asaderos", imagen: "🔥" },
    { nombre: "Plancha de Cocina", categoria: "cocina", precio: 280, descripcion: "Plancha lisa de acero inoxidable", aplicacion: "Fast food", imagen: "🥞" },
    
    // Servicio
    { nombre: "Bandeja Gastronorm", categoria: "servicio", precio: 25, descripcion: "Bandeja GN 1/1 profundidad 65mm", aplicacion: "Hoteles", imagen: "🍽️" },
    { nombre: "Carro de Servicio", categoria: "servicio", precio: 450, descripcion: "Carro de 3 niveles con ruedas", aplicacion: "Restaurantes", imagen: "🛒" },
    { nombre: "Cafetera Industrial", categoria: "servicio", precio: 1200, descripcion: "Máquina de café de 2 grupos", aplicacion: "Cafeterías", imagen: "☕" },
    { nombre: "Dispensador de Agua", categoria: "servicio", precio: 380, descripcion: "Dispensador de agua fría y caliente", aplicacion: "Oficinas", imagen: "💧" },
    
    // Almacenamiento
    { nombre: "Estantería Modular", categoria: "almacenamiento", precio: 220, descripcion: "Estante de 4 niveles ajustables", aplicacion: "Cocinas", imagen: "📚" },
    { nombre: "Contenedor Hermético 20L", categoria: "almacenamiento", precio: 65, descripcion: "Contenedor con tapa hermética", aplicacion: "Almacenes", imagen: "📦" },
    { nombre: "Mesa de Trabajo 180cm", categoria: "almacenamiento", precio: 340, descripcion: "Mesa con estante inferior", aplicacion: "Cocinas", imagen: "🏪" },
    { nombre: "Armario Refrigerado", categoria: "almacenamiento", precio: 1800, descripcion: "Armario de 2 puertas con refrigeración", aplicacion: "Restaurantes", imagen: "🧊" },
    
    // Limpieza
    { nombre: "Fregadero Industrial", categoria: "limpieza", precio: 420, descripcion: "Fregadero de 2 pozas con escurridor", aplicacion: "Cocinas", imagen: "🚿" },
    { nombre: "Carro de Limpieza", categoria: "limpieza", precio: 180, descripcion: "Carro con compartimentos para productos", aplicacion: "Hoteles", imagen: "🧽" },
    { nombre: "Lavadora de Vajilla", categoria: "limpieza", precio: 2500, descripcion: "Lavavajillas industrial de campana", aplicacion: "Restaurantes", imagen: "🍽️" },
    { nombre: "Secadora de Manos", categoria: "limpieza", precio: 150, descripcion: "Secadora automática de acero inoxidable", aplicacion: "Baños públicos", imagen: "🖐️" }
  ];

  const ventajas = [
    { titulo: "Resistencia a la Corrosión", descripcion: "El acero inoxidable resiste la oxidación y corrosión", icono: "🛡️" },
    { titulo: "Fácil Limpieza", descripcion: "Superficie lisa que facilita la higienización", icono: "✨" },
    { titulo: "Durabilidad", descripcion: "Vida útil prolongada con mantenimiento mínimo", icono: "💪" },
    { titulo: "Seguridad Alimentaria", descripcion: "Material no tóxico y libre de contaminantes", icono: "🥗" },
    { titulo: "Resistencia al Calor", descripcion: "Soporta altas temperaturas sin deformarse", icono: "🔥" },
    { titulo: "Reciclable", descripcion: "100% reciclable y amigable con el ambiente", icono: "♻️" }
  ];

  const categorias = [
    { value: "todos", label: "Todos los productos", count: productos.length },
    { value: "cocina", label: "Cocina", count: productos.filter(p => p.categoria === "cocina").length },
    { value: "servicio", label: "Servicio", count: productos.filter(p => p.categoria === "servicio").length },
    { value: "almacenamiento", label: "Almacenamiento", count: productos.filter(p => p.categoria === "almacenamiento").length },
    { value: "limpieza", label: "Limpieza", count: productos.filter(p => p.categoria === "limpieza").length }
  ];

  const aplicaciones = [
    { sector: "Restaurantes", descripcion: "Equipamiento completo para cocinas comerciales", productos: 45, icono: "🍴" },
    { sector: "Hoteles", descripcion: "Soluciones para servicios de hospitalidad", productos: 32, icono: "🏨" },
    { sector: "Cafeterías", descripcion: "Equipos especializados para café y bebidas", productos: 18, icono: "☕" },
    { sector: "Hospitales", descripcion: "Menaje para servicios de alimentación hospitalaria", productos: 28, icono: "🏥" },
    { sector: "Colegios", descripcion: "Equipamiento para comedores escolares", productos: 22, icono: "🎓" },
    { sector: "Industria", descripcion: "Equipos para comedores industriales", productos: 15, icono: "🏭" }
  ];

  // Filtrar y ordenar productos
  const productosFiltrados = productos
    .filter(producto => categoriaFiltro === "todos" || producto.categoria === categoriaFiltro)
    .sort((a, b) => ordenPrecio === "menor" ? a.precio - b.precio : b.precio - a.precio);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#004A8F] mb-2">Menaje Inoxidable</h1>
              <p className="text-gray-600">Equipamiento profesional para cocinas comerciales</p>
            </div>
            <div className="text-7xl">🍴</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-8">
        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-6 shadow-md mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Categoría:</span>
              {categorias.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategoriaFiltro(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    categoriaFiltro === cat.value
                      ? "bg-[#004A8F] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Ordenar por precio:</span>
              <select
                value={ordenPrecio}
                onChange={(e) => setOrdenPrecio(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004A8F]"
              >
                <option value="menor">Menor a Mayor</option>
                <option value="mayor">Mayor a Menor</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Productos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#004A8F]">
              Productos ({productosFiltrados.length})
            </h2>
            <div className="text-sm text-gray-600">
              Mostrando {productosFiltrados.length} de {productos.length} productos
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-center">
                  <div className="text-5xl mb-2">{producto.imagen}</div>
                  <span className="inline-block bg-[#004A8F] text-white px-2 py-1 rounded-full text-xs">
                    {producto.aplicacion}
                  </span>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-[#004A8F] mb-2">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 mb-3">{producto.descripcion}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">
                      ${producto.precio}
                    </div>
                    <button className="bg-[#004A8F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors">
                      Cotizar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ventajas del Acero Inoxidable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-8 text-center">
            Ventajas del Acero Inoxidable
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{ventaja.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{ventaja.titulo}</h3>
                <p className="text-gray-600 text-sm">{ventaja.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aplicaciones por Sector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#004A8F] mb-8 text-center">
            Aplicaciones por Sector
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aplicaciones.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{app.icono}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#004A8F]">{app.sector}</h3>
                    <span className="text-sm text-green-600 font-medium">{app.productos} productos</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{app.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Necesitas equipamiento personalizado?</h3>
          <p className="text-gray-200 mb-6">
            Fabricamos menaje inoxidable a medida según tus especificaciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#004A8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Cotización Personalizada
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-all">
              Ver Catálogo Completo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 