"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const footerSections = [
    {
      title: "Servicios",
      links: [
        { name: "Instalación", href: "/servicios" },
        { name: "Mantenimiento", href: "/servicios" },
        { name: "Repuestos", href: "/servicios" },
        { name: "Soporte Técnico", href: "/servicios" }
      ]
    },
    {
      title: "Productos",
      links: [
        { name: "Equipos de Ordeño", href: "/productos/equipos-ordenio" },
        { name: "Tanques de Enfriamiento", href: "/productos/tanques-enfriamiento" },
        { name: "Industria Agroalimentaria", href: "/productos/industria-agroalimentaria" },
        { name: "Menaje Inoxidable", href: "/productos/menaje-inoxidable" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/nosotros" },
        { name: "Casos de Éxito", href: "/casos-exito" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/contacto" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" }
  ];

  return (
    <footer className="bg-[#004A8F] text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Información de la empresa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Macroequipos</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soluciones industriales de vanguardia para optimizar tu producción y maximizar tu rentabilidad en el sector agropecuario y alimentario.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-[#BFC3C6] transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Secciones de enlaces */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-center md:text-left"
            >
              &copy; {new Date().getFullYear()} Macroequipos. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Términos de Servicio
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 