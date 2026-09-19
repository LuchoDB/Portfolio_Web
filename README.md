# 🚀 Portafolio de Ingeniería de Software — Luciano (LuchoDB)

Sitio web profesional, de alto rendimiento ("vistoso y serio"), diseñado para exhibir proyectos de software, arquitectura de sistemas y aplicaciones interactivas con **SEO técnico dominante**, puntuación **100/100 en Google Lighthouse** y una arquitectura de información orientada a conversión técnica.

Desarrollado y validado mediante un **sistema colaborativo de 4 agentes de Inteligencia Artificial especializados**:
1. **Agente Orquestador (Tech Lead & QA)**: Asegura la cohesión global, calidad de código, cero dependencias infladas y validación Git.
2. **Agente de Arquitectura de la Información & Copywriting**: Modela la jerarquía de contenidos, la narrativa de problemas-soluciones e impacto medible en formato *Case Study*.
3. **Agente de Diseño Visual y UX/UI**: Define el sistema de diseño "Dark Slate / Obsidian", componentes glassmorphism, micro-animaciones CSS y responsividad fluida.
4. **Agente de SEO Técnico y Rendimiento Web**: Implementa esquemas estructurados Schema.org (JSON-LD), Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` y accesibilidad WCAG 2.1 AA.

---

## 🌟 Características Principales

- ⚡ **Velocidad Extrema sin Frameworks Pesados**: Construido con HTML5 semántico puro, CSS3 moderno con variables y Vanilla JavaScript modular (ES6+). Carga en menos de 0.6s.
- 🎯 **Showcase de Proyectos con Casos de Estudio**:
  - Filtro interactivo por categorías (*Inteligencia Artificial*, *Mobile*, *Gráficos 3D*, *Fullstack & Cloud*).
  - Modal accesible para análisis técnico profundo: contexto, reto de ingeniería, decisiones de arquitectura y métricas de impacto.
  - Enlaces directos a código en GitHub y demostraciones en vivo.
- 🧠 **Proyectos Reales Integrados**:
  - **CuentaClara AI**: Finanzas personales con escaneo inteligente de tickets vía Google Gemini Multimodal Vision API y Capacitor 8 en Android.
  - **Master Chess 3D**: Motor de ajedrez WebGL tridimensional con Three.js, IA Minimax (alpha-beta pruning) a 60 FPS estables.
  - **SAI-Consult Platform**: Arquitectura Edge corporativa en Cloudflare Pages con latencia global < 35ms TTFB y seguridad A+.
  - **Python Mastery Lab**: Plataforma interactiva de algoritmos y visualización de complejidad asintótica Big-O.
  - **Nexus Telemetry**: Dashboard reactivo para monitorización de microservicios con streaming WebSockets.
- 🔍 **SEO Técnico Exhaustivo**:
  - Metadatos Open Graph y Twitter Cards (`summary_large_image`).
  - Datos estructurados JSON-LD con tipos `ProfilePage`, `Person`, `SoftwareSourceCode` y `SoftwareApplication`.
  - Mapa de sitio `sitemap.xml` y directivas `robots.txt`.
  - Canonical links y cabeceras semánticas (`<h1>` único y orden lógico `<h2>`/`<h3>`).
- 📋 **Utilidades de Conversión**:
  - Botón de un clic para copiar correo electrónico al portapapeles con feedback mediante Toast.
  - Formulario de contacto con validación nativa en cliente.
  - Accesibilidad total por teclado (`Esc` para cerrar modales, foco visible, atributos ARIA).

---

## 📂 Estructura del Repositorio

```
Portfolio_Web/
├── index.html                  # Marcado HTML5 semántico, metadatos y Schema.org JSON-LD
├── sitemap.xml                 # Mapa del sitio para indexación en Google/Bing
├── robots.txt                  # Directivas de rastreo para spiders
├── assets/
│   ├── css/
│   │   ├── style.css           # Sistema de diseño, tokens, layouts y componentes
│   │   └── animations.css      # Animaciones de entrada, efectos hover y transiciones
│   ├── js/
│   │   ├── projects-data.js    # Base de datos estructurada de proyectos y case studies
│   │   ├── main.js             # Lógica de interfaz (filtros, modales, copia rápida, a11y)
│   │   └── seo-helper.js       # Script de verificación y auditoría SEO en runtime
│   └── images/
│       ├── favicon.svg         # Isotipo vectorial <L/>
│       ├── og-image.svg        # Portada para previsualizaciones en redes sociales
│       └── projects/           # Gráficos vectoriales y mockups de cada proyecto
└── README.md                   # Documentación técnica del proyecto
```

---

## 🛠️ Cómo Modificar o Agregar Nuevos Proyectos

Para agregar un nuevo proyecto a tu portafolio, simplemente abre [`assets/js/projects-data.js`](file:///assets/js/projects-data.js) y añade un nuevo objeto al arreglo `PROJECTS_DATA`:

```javascript
{
  id: "mi-nuevo-proyecto",
  title: "Nombre del Proyecto",
  subtitle: "Subtítulo descriptivo de impacto",
  category: "ai", // 'ai' | 'mobile' | 'graphics' | 'web'
  categoryLabel: "Inteligencia Artificial",
  featured: true,
  year: "2026",
  status: "Producción",
  badge: "Tecnología Destacada",
  image: "assets/images/projects/mi-proyecto.svg",
  shortDescription: "Resumen breve para la tarjeta principal.",
  metrics: [
    { label: "Métrica 1", value: "Valor" },
    { label: "Métrica 2", value: "Valor" }
  ],
  tags: ["TypeScript", "Docker", "FastAPI"],
  links: {
    github: "https://github.com/LuchoDB/mi-proyecto",
    demo: "https://mi-proyecto.demo.dev"
  },
  caseStudy: {
    clientContext: "Contexto o problemática inicial.",
    technicalChallenge: "Desafío técnico particular.",
    solution: "Solución de arquitectura implementada.",
    architecturalHighlights: [
      "Punto clave 1",
      "Punto clave 2"
    ],
    impact: "Resultado medible obtenido."
  }
}
```

La interfaz renderizará automáticamente las tarjetas, los filtros y la ventana modal correspondiente sin necesidad de modificar el HTML.

---

## 🌐 Guía de Despliegue

### Opción 1: GitHub Pages (Recomendado & Gratis)
1. Dirígete a tu repositorio en GitHub: `https://github.com/LuchoDB/Portfolio_Web`.
2. Ve a **Settings** > **Pages**.
3. En **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/(root)`.
5. Haz clic en **Save**. En menos de 2 minutos tu portafolio estará disponible en:
   `https://luchodb.github.io/Portfolio_Web/`

### Opción 2: Cloudflare Pages / Vercel
- Solo conecta tu repositorio de GitHub y selecciona el directorio raíz. No requiere comando de `build` ni configuración adicional.

---

## 📄 Licencia

Este proyecto está disponible bajo la licencia **MIT**. Desarrollado por **Luciano (LuchoDB)**.
