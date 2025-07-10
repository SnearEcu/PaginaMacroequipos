# Macroequipos Website – Estructura y Arquitectura

## Resumen
Este proyecto es una web profesional y escalable para **Macroequipos**, una empresa ecuatoriana especializada en soluciones de ingeniería y acero inoxidable para el sector agropecuario y alimentario.

---

## Estructura de Carpetas y Archivos

```
src/
  app/
    layout.tsx                # Layout general (Navbar, Footer, estilos globales)
    page.tsx                  # Página de Inicio
    nosotros/
      page.tsx                # Sección "Sobre Nosotros"
    productos/
      page.tsx                # Landing de productos
      equipos-ordenio/
        page.tsx              # Equipos de Ordeño
      tanques-enfriamiento/
        page.tsx              # Tanques de Enfriamiento
      industria-agroalimentaria/
        page.tsx              # Industria Agroalimentaria
      menaje-inoxidable/
        page.tsx              # Menaje Inoxidable
    servicios/
      page.tsx                # Servicios (Instalación, Mantenimiento, Repuestos)
    casos-exito/
      page.tsx                # Casos de Éxito
    blog/
      page.tsx                # Blog / Novedades
    contacto/
      page.tsx                # Contacto (formulario, datos, mapa)
    components/
      Navbar.tsx              # Barra de navegación
      Footer.tsx              # Pie de página
      Hero.tsx                # Sección principal de bienvenida
      LineasNegocio.tsx       # Iconos y resumen de líneas de negocio
      Estadisticas.tsx        # Estadísticas clave
      CTA.tsx                 # Llamado a la acción
      ...otros componentes reutilizables
  public/
    images/                   # Imágenes de productos, equipo, etc.

```

---

## Propósito de Cada Sección

- **Inicio:**
  - Hero banner (imagen, claim breve)
  - Cuatro íconos de líneas de negocio
  - Estadísticas clave
  - CTA "Solicita una cotización"

- **Nosotros:**
  - Historia, fotos de planta y equipo
  - Certificaciones y alianzas

- **Productos:**
  - Galería, ficha técnica, beneficios, aplicaciones, testimonios
  - Subsecciones para cada línea de producto

- **Servicios:**
  - Alcance de instalación y mantenimiento
  - Planes de servicio preventivo
  - Botón de agendar visita técnica

- **Casos de Éxito:**
  - Mini-historias, fotos antes/después, métricas de impacto

- **Blog / Novedades:**
  - Artículos, videos, webinars

- **Contacto:**
  - Formulario, datos de contacto, WhatsApp, mapa

---

## Lineamientos de Diseño
- **Paleta:** Azul corporativo (#004A8F), gris acero (#BFC3C6), blanco
- **Tipografía:** Inter o Poppins
- **Estilo:** Fotografía de equipos, texturas metálicas, iconos limpios
- **Voice & Tone:** Técnico, confiable, cercano

---

## SEO & Accesibilidad
- Keywords: equipos de ordeño Ecuador, tanques de enfriamiento leche, menaje acero inoxidable
- Meta titles <= 60 caracteres, meta descriptions <= 155
- Etiquetas ALT descriptivas
- Contraste AA y navegación por teclado

---

## Roadmap de Desarrollo
1. Wireframes y moodboard
2. Diseño UI en Figma
3. Desarrollo Front-end (React/Next)
4. Integración CMS / Formularios
5. Pruebas QA & SEO
6. Lanzamiento y monitoreo

---

> **Este README debe consultarse siempre para mantener la coherencia y escalabilidad del proyecto.**
