"use client";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

export default function Nosotros() {
  const estadisticas = [
    {
      numero: 15,
      sufijo: "+",
      texto: "Años de Experiencia",
      icono: "📅"
    },
    {
      numero: 500,
      sufijo: "+",
      texto: "Proyectos Completados",
      icono: "🏗️"
    },
    {
      numero: 100,
      sufijo: "%",
      texto: "Clientes Satisfechos",
      icono: "😊"
    },
    {
      numero: 50,
      sufijo: "+",
      texto: "Profesionales Expertos",
      icono: "👥"
    }
  ];

  const valores = [
    {
      titulo: "Calidad",
      descripcion: "Comprometidos con la excelencia en cada proyecto y producto que entregamos",
      icono: "⭐"
    },
    {
      titulo: "Innovación",
      descripcion: "Implementamos tecnologías de vanguardia para ofrecer soluciones avanzadas",
      icono: "💡"
    },
    {
      titulo: "Confiabilidad",
      descripcion: "Construimos relaciones duraderas basadas en la confianza y el cumplimiento",
      icono: "🤝"
    },
    {
      titulo: "Sostenibilidad",
      descripcion: "Promovemos prácticas responsables con el medio ambiente y la comunidad",
      icono: "🌱"
    }
  ];

  const equipo = [
    {
      nombre: "Ing. Carlos Mendoza",
      cargo: "Gerente General",
      experiencia: "20+ años",
      especialidad: "Ingeniería Industrial",
      descripcion: "Líder visionario con amplia experiencia en gestión de proyectos industriales",
      icono: "👨‍💼"
    },
    {
      nombre: "Ing. María González",
      cargo: "Directora Técnica",
      experiencia: "15+ años",
      especialidad: "Ingeniería Mecánica",
      descripcion: "Experta en diseño y fabricación de equipos industriales",
      icono: "👩‍🔬"
    },
    {
      nombre: "Ing. Roberto Silva",
      cargo: "Jefe de Producción",
      experiencia: "18+ años",
      especialidad: "Manufactura",
      descripcion: "Especialista en procesos de fabricación y control de calidad",
      icono: "👨‍🏭"
    },
    {
      nombre: "Ing. Ana Rodríguez",
      cargo: "Gerente Comercial",
      experiencia: "12+ años",
      especialidad: "Ventas Técnicas",
      descripcion: "Experta en soluciones comerciales y atención al cliente",
      icono: "👩‍💼"
    }
  ];

  const certificaciones = [
    {
      nombre: "ISO 9001:2015",
      descripcion: "Sistema de Gestión de Calidad",
      año: "2020",
      icono: "🏆"
    },
    {
      nombre: "ISO 14001:2015",
      descripcion: "Sistema de Gestión Ambiental",
      año: "2021",
      icono: "🌍"
    },
    {
      nombre: "OHSAS 18001",
      descripcion: "Seguridad y Salud Ocupacional",
      año: "2019",
      icono: "🛡️"
    },
    {
      nombre: "FDA Compliance",
      descripcion: "Cumplimiento Normativo Alimentario",
      año: "2022",
      icono: "✅"
    }
  ];

  const hitos = [
    {
      año: "2009",
      titulo: "Fundación de Macroequipos",
      descripcion: "Inicio de operaciones con enfoque en equipos de ordeño"
    },
    {
      año: "2012",
      titulo: "Expansión de Servicios",
      descripcion: "Incorporación de tanques de enfriamiento y servicios de instalación"
    },
    {
      año: "2015",
      titulo: "Certificación ISO 9001",
      descripcion: "Implementación de sistema de gestión de calidad"
    },
    {
      año: "2018",
      titulo: "Diversificación de Productos",
      descripcion: "Ampliación hacia industria agroalimentaria y menaje inoxidable"
    },
    {
      año: "2020",
      titulo: "Expansión Regional",
      descripcion: "Apertura de sucursales en Riobamba y Julio Andrade"
    },
    {
      año: "2023",
      titulo: "Innovación Tecnológica",
      descripcion: "Implementación de tecnologías 4.0 y automatización avanzada"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-8">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-[#004A8F]">Inicio</a> / 
            <span className="text-[#004A8F] ml-1">Nosotros</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#004A8F] to-[#0066CC] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Más de 15 años liderando la innovación en soluciones industriales para el sector agropecuario y alimentario en Ecuador
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {estadisticas.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{stat.icono}</div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-bold text-[#004A8F] mb-2"
                >
                  <CountUp 
                    target={stat.numero} 
                    suffix={stat.sufijo}
                    duration={2000 + index * 200}
                    className="text-4xl font-bold text-[#004A8F]"
                  />
                </motion.div>
                <p className="text-gray-600 font-medium">
                  {stat.texto}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#004A8F] mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Macroequipos nació en 2009 con la visión de revolucionar el sector agropecuario ecuatoriano 
                  mediante soluciones tecnológicas innovadoras. Fundada por un grupo de ingenieros especializados, 
                  la empresa comenzó enfocándose en equipos de ordeño para pequeñas y medianas lecherías.
                </p>
                <p>
                  A lo largo de más de 15 años, hemos evolucionado hasta convertirnos en líderes del mercado, 
                  expandiendo nuestro portafolio hacia tanques de enfriamiento, equipos para la industria 
                  agroalimentaria y menaje inoxidable de alta calidad.
                </p>
                <p>
                  Hoy, con presencia en Ibarra, Riobamba y Julio Andrade, seguimos comprometidos con la 
                  excelencia técnica y la satisfacción total de nuestros clientes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-96 h-96 bg-gradient-to-br from-[#004A8F] to-[#0066CC] rounded-2xl flex items-center justify-center text-white shadow-2xl"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-9xl"
                >
                  🏭
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#004A8F] mb-4">
              Misión, Visión y Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra identidad corporativa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#004A8F] to-[#0066CC] text-white p-8 rounded-xl"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="leading-relaxed">
                Proporcionar soluciones industriales innovadoras y de alta calidad en acero inoxidable 
                que optimicen los procesos productivos de nuestros clientes en el sector agropecuario 
                y alimentario, contribuyendo al desarrollo sostenible del Ecuador.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-[#004A8F]">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la empresa líder en soluciones industriales para el sector agropecuario y alimentario 
                en Ecuador, reconocida por nuestra innovación tecnológica, calidad excepcional y compromiso 
                con el desarrollo sostenible.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{valor.icono}</div>
                <h4 className="text-xl font-bold text-[#004A8F] mb-3">{valor.titulo}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.descripcion}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#004A8F] mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los hitos más importantes en la evolución de Macroequipos
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#004A8F] opacity-20"></div>
            
            <div className="space-y-12">
              {hitos.map((hito, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-[#004A8F] font-bold text-lg mb-2">{hito.año}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{hito.titulo}</h3>
                      <p className="text-gray-600">{hito.descripcion}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-[#004A8F] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#004A8F] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente capacitados comprometidos con la excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{miembro.icono}</div>
                <h3 className="text-xl font-bold text-[#004A8F] mb-2">{miembro.nombre}</h3>
                <div className="text-gray-600 font-semibold mb-2">{miembro.cargo}</div>
                <div className="text-sm text-gray-500 mb-3">{miembro.especialidad} • {miembro.experiencia}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{miembro.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#004A8F] mb-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro compromiso con la calidad respaldado por certificaciones internacionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cert.icono}</div>
                <h3 className="text-lg font-bold text-[#004A8F] mb-2">{cert.nombre}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.descripcion}</p>
                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                  Certificado {cert.año}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#004A8F] to-[#0066CC] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a más de 500 clientes satisfechos que han confiado en nuestras soluciones industriales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contactanos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#004A8F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contáctanos Ahora
              </motion.a>
              <motion.a
                href="/productos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#004A8F] transition-colors"
              >
                Ver Nuestros Productos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 