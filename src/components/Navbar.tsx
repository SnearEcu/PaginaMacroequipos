"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [productosOpen, setProductosOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const productosTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const serviciosTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const productos = [
    { nombre: "Equipos de Ordeño", href: "/productos/equipos-ordenio", icono: "🐄" },
    { nombre: "Tanques de Enfriamiento", href: "/productos/tanques-enfriamiento", icono: "🥛" },
    { nombre: "Industria Agroalimentaria", href: "/productos/industria-agroalimentaria", icono: "🏭" },
    { nombre: "Menaje Inoxidable", href: "/productos/menaje-inoxidable", icono: "🍽️" }
  ];

  const servicios = [
    { nombre: "Diseño y Fabricación", href: "/servicios/diseno-fabricacion", icono: "⚙️" },
    { nombre: "Instalación", href: "/servicios/instalacion", icono: "🔧" },
    { nombre: "Mantenimiento", href: "/servicios/mantenimiento", icono: "🛠️" },
    { nombre: "Consultoría Técnica", href: "/servicios/consultoria", icono: "💡" }
  ];

  const handleProductosMouseEnter = () => {
    if (productosTimeoutRef.current) {
      clearTimeout(productosTimeoutRef.current);
    }
    setProductosOpen(true);
  };

  const handleProductosMouseLeave = () => {
    productosTimeoutRef.current = setTimeout(() => {
      setProductosOpen(false);
    }, 150);
  };

  const handleServiciosMouseEnter = () => {
    if (serviciosTimeoutRef.current) {
      clearTimeout(serviciosTimeoutRef.current);
    }
    setServiciosOpen(true);
  };

  const handleServiciosMouseLeave = () => {
    serviciosTimeoutRef.current = setTimeout(() => {
      setServiciosOpen(false);
    }, 150);
  };

  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-[#004A8F] text-white relative z-50">
      <Link href="/" className="font-bold text-xl hover:text-gray-200 transition-colors">
        Macroequipos
      </Link>
      
      <ul className="flex gap-6 items-center">
        <li>
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Inicio
          </Link>
        </li>
        
        <li>
          <Link href="/nosotros" className="hover:text-gray-200 transition-colors">
            Nosotros
          </Link>
        </li>
        
        {/* Menú Productos */}
        <li 
          className="relative"
          onMouseEnter={handleProductosMouseEnter}
          onMouseLeave={handleProductosMouseLeave}
        >
          <span className="hover:text-gray-200 transition-colors flex items-center cursor-default select-none font-semibold">
            Productos
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          
          {productosOpen && (
            <div 
              className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
              onMouseEnter={handleProductosMouseEnter}
              onMouseLeave={handleProductosMouseLeave}
            >
              {productos.map((producto, index) => (
                <Link
                  key={index}
                  href={producto.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#004A8F] transition-colors"
                >
                  <span className="text-2xl mr-3">{producto.icono}</span>
                  <span className="font-medium">{producto.nombre}</span>
                </Link>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  href="/productos"
                  className="flex items-center px-4 py-2 text-[#004A8F] hover:bg-gray-50 transition-colors font-semibold"
                >
                  <span className="text-xl mr-3">📋</span>
                  Ver todos los productos
                </Link>
              </div>
            </div>
          )}
        </li>
        
        {/* Menú Servicios */}
        <li 
          className="relative"
          onMouseEnter={handleServiciosMouseEnter}
          onMouseLeave={handleServiciosMouseLeave}
        >
          <span className="hover:text-gray-200 transition-colors flex items-center cursor-default select-none font-semibold">
            Servicios
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          
          {serviciosOpen && (
            <div 
              className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
              onMouseEnter={handleServiciosMouseEnter}
              onMouseLeave={handleServiciosMouseLeave}
            >
              {servicios.map((servicio, index) => (
                <Link
                  key={index}
                  href={servicio.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#004A8F] transition-colors"
                >
                  <span className="text-2xl mr-3">{servicio.icono}</span>
                  <span className="font-medium">{servicio.nombre}</span>
                </Link>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  href="/servicios"
                  className="flex items-center px-4 py-2 text-[#004A8F] hover:bg-gray-50 transition-colors font-semibold"
                >
                  <span className="text-xl mr-3">🔧</span>
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          )}
        </li>
        
        <li>
          <Link href="/contactanos" className="bg-white text-[#004A8F] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contáctanos
          </Link>
        </li>
      </ul>
    </nav>
  );
} 