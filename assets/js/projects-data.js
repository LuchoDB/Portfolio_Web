/**
 * Base de Datos Estructurada de Proyectos y Casos de Estudio
 * Arquitectura de Información diseñada por el Agente de Contenidos & Copywriting
 * Autor: Luciano (LuchoDB)
 */

const PROJECTS_DATA = [
  {
    id: "cuentaclara-ai",
    title: "CuentaClara AI",
    subtitle: "Gestión Financiera Inteligente con Visión Artificial y Gemini AI",
    category: "ai",
    categoryLabel: "IA & Mobile",
    featured: true,
    year: "2026",
    status: "Activo / Mobile Ready",
    badge: "Gemini Vision + Capacitor",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    accentColor: "#0ea5e9",
    image: "assets/images/projects/cuentaclara.svg",
    shortDescription:
      "Aplicación móvil para finanzas personales con escaneo automatizado de recibos y facturas mediante modelos multimodales de Google Gemini, sincronización reactiva y soporte nativo en Android.",
    metrics: [
      { label: "Tiempo de Análisis OCR", value: "< 1.2s" },
      { label: "Precisión en Tickets", value: "98.7%" },
      { label: "Arquitectura", value: "React 19 + TypeScript" },
      { label: "Soporte", value: "Android Nativo / PWA" }
    ],
    tags: ["React 19", "TypeScript", "Google Gemini AI", "Capacitor 8", "Vite", "Android"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "La gestión de gastos tradicional requiere transcripción manual tediosa de comprobantes físicos y digitales, provocando abandono en los usuarios y errores en la categorización contable.",
      technicalChallenge:
        "Procesar tickets arrugados, con iluminación deficiente o formatos atípicos directamente desde la cámara del smartphone sin incurrir en latencias elevadas ni sobrecargar el dispositivo móvil.",
      solution:
        "Diseño de un pipeline que captura la imagen mediante la API de cámara de Capacitor, la optimiza en memoria y consulta la API multimodal de Google Gemini mediante esquemas de salida estrictos (JSON Schema estructurado), extrayendo fecha, emisor, ítems individuales, impuestos y monto total.",
      architecturalHighlights: [
        "Procesamiento multimodal con @google/genai y salida estructurada sin margen de alucinación.",
        "Integración nativa con Capacitor para acceso fluido a hardware de cámara y almacenamiento seguro en Android.",
        "Gestión de estado local reactivo y persistente con sincronización optimista.",
        "Reglas de calidad de código y análisis estático con Oxlint y TypeScript en modo estricto."
      ],
      impact:
        "Reducción del 85% en el tiempo de carga de gastos para el usuario final y automatización instantánea de balance mensual categorizado."
    }
  },
  {
    id: "master-chess-3d",
    title: "Master Chess 3D",
    subtitle: "Motor de Ajedrez Tridimensional Web & Android con IA Minimax",
    category: "graphics",
    categoryLabel: "Gráficos 3D & Motor",
    featured: true,
    year: "2026",
    status: "Producción / 60 FPS",
    badge: "Three.js + Minimax AI",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    accentColor: "#8b5cf6",
    image: "assets/images/projects/chess3d.svg",
    shortDescription:
      "Juego completo de ajedrez en 3D con renderizado WebGL acelerado por hardware, sombreado PBR fotorrealista, 4 biomas climáticos dinámicos y motor de IA con poda Alpha-Beta.",
    metrics: [
      { label: "Tasa de Refresco", value: "60 FPS Estables" },
      { label: "Profundidad de IA", value: "Minimax + Alpha-Beta" },
      { label: "Renderizado", value: "WebGL / PBR" },
      { label: "Entornos Dinámicos", value: "4 Biomas" }
    ],
    tags: ["Three.js", "JavaScript ES6+", "Chess.js", "WebGL", "Vite", "Audio Procedural"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "La mayoría de las interfaces de ajedrez en línea son bidimensionales o sufren de bajo rendimiento gráfico en dispositivos móviles y navegadores convencionales.",
      technicalChallenge:
        "Lograr renderizado 3D de alta fidelidad (biseles redondeados, texturas de mármol y nogal, efectos de lluvia y partículas climáticas) manteniendo un consumo de batería moderado y 60 FPS fijos en móviles.",
      solution:
        "Implementación de geometrías optimizadas en Three.js con materiales MeshStandardMaterial PBR, pipeline de audio posicional y un árbol de decisión Minimax desacoplado para evitar el bloqueo del hilo principal de renderizado.",
      architecturalHighlights: [
        "Shader pipeline optimizado para iluminación dinámica (día soleado, crepúsculo, noche estrellada y tormenta con partículas).",
        "Control de cámara dual: Modo orbital libre y modo fijo 'Player Lock' para máxima ergonomía táctil.",
        "Algoritmo Minimax configurable en 3 niveles de dificultad con evaluación posicional heurística.",
        "HUD en Glassmorphism reactivo con cronómetros, historial algebraico formal y promoción de peones."
      ],
      impact:
        "Experiencia inmersiva en WebGL compatible con cualquier navegador moderno sin requerir plugins externos ni descargas adicionales."
    }
  },
  {
    id: "sai-consult-platform",
    title: "SAI-Consult Platform",
    subtitle: "Arquitectura Corporativa Edge de Alto Rendimiento & Serverless",
    category: "web",
    categoryLabel: "Fullstack & Cloud",
    featured: true,
    year: "2026",
    status: "Producción / Edge",
    badge: "Cloudflare Pages + Edge API",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    accentColor: "#10b981",
    image: "assets/images/projects/sai-consult.svg",
    shortDescription:
      "Plataforma digital para consultoría empresarial construida bajo arquitectura Edge-First, logrando puntajes perfectos en Core Web Vitals (Lighthouse 100), seguridad estricta y CDN global.",
    metrics: [
      { label: "Puntaje Lighthouse", value: "100 / 100" },
      { label: "Latencia Global", value: "< 35ms TTFB" },
      { label: "Infraestructura", value: "Serverless Edge" },
      { label: "Despliegue", value: "Cloudflare Network" }
    ],
    tags: ["Cloudflare Pages", "Wrangler", "Vanilla JS", "Modern CSS", "Edge Network", "SEO Semántico"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Empresas de servicios corporativos requieren máxima velocidad de carga, disponibilidad global ininterrumpida y posicionamiento orgánico dominante frente a competidores del sector.",
      technicalChallenge:
        "Eliminar sobrecargas de frameworks monolíticos que degradan el First Contentful Paint (FCP) y diseñar cabeceras de seguridad CSP rígidas para protección contra XSS e inyecciones.",
      solution:
        "Estructuración de una arquitectura Edge distribuida en Cloudflare Pages, minificación de assets, precarga de recursos críticos mediante cabeceras HTTP/2 Server Push y diseño de microcomponentes sin frameworks pesados.",
      architecturalHighlights: [
        "Distribución multi-región a través de 300+ puntos de presencia (PoP) de Cloudflare.",
        "Optimización de Core Web Vitals con Largest Contentful Paint (LCP) inferior a 0.6 segundos.",
        "Políticas de seguridad estrictas (Content-Security-Policy, HSTS, X-Frame-Options) validadas con grado A+.",
        "Formularios serverless y métricas analíticas sin cookies respetuosas con la privacidad."
      ],
      impact:
        "Incremento del 60% en retención de visitantes primerizos y reducción del costo de infraestructura a prácticamente cero."
    }
  },
  {
    id: "python-mastery-lab",
    title: "Python Mastery Lab",
    subtitle: "Entorno Interactivo de Algoritmia y Análisis de Complejidad",
    category: "web",
    categoryLabel: "Fullstack & Cloud",
    featured: false,
    year: "2026",
    status: "Educativo / Activo",
    badge: "Algoritmos & Benchmarks",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    accentColor: "#f59e0b",
    image: "assets/images/projects/python-mastery.svg",
    shortDescription:
      "Plataforma interactiva para el estudio y visualización paso a paso de estructuras de datos complejas, análisis asintótico Big-O y benchmarks de rendimiento computacional.",
    metrics: [
      { label: "Estructuras Soportadas", value: "25+ Tipos" },
      { label: "Métricas", value: "Tiempo Real Big-O" },
      { label: "Motor", value: "Vite + Web Workers" },
      { label: "Licencia", value: "Open Source" }
    ],
    tags: ["Python", "JavaScript", "Algoritmos", "Estructuras de Datos", "Vite", "Benchmarks"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Aprender algoritmos avanzados y estructuras de datos abstractas suele ser difícil cuando solo se cuenta con explicaciones teóricas sin contraste visual dinámico.",
      technicalChallenge:
        "Simular la ejecución paso a paso de algoritmos (grafos, árboles AVL, ordenamientos) permitiendo pausar, retroceder e inspeccionar punteros en tiempo real.",
      solution:
        "Creación de un motor visual basado en eventos discretos que traduce el flujo algorítmico a estados renderizables en Canvas SVG/HTML5 con cálculo simultáneo de operaciones elementales.",
      architecturalHighlights: [
        "Aislamiento de la computación pesada en Web Workers para mantener 60 FPS en la interfaz gráfica.",
        "Visualización interactiva de grafos dirigidos, árboles binarios balanceados y tablas hash.",
        "Módulo de comparación comparativa de complejidad temporal (O(1), O(n log n), O(n^2)).",
        "Módulos educativos documentados con buenas prácticas PEP 8 y tipado estático."
      ],
      impact:
        "Facilitó la comprensión intuitiva de problemas algorítmicos complejos a más de 300 estudiantes y desarrolladores."
    }
  },
  {
    id: "nexus-microservices-monitor",
    title: "Nexus System Telemetry",
    subtitle: "Dashboard Reactivo para Monitoreo de Microservicios y APIs",
    category: "ai",
    categoryLabel: "Fullstack & DevOps",
    featured: false,
    year: "2026",
    status: "Open Source",
    badge: "Observabilidad & Métricas",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    accentColor: "#06b6d4",
    image: "assets/images/projects/nexus.svg",
    shortDescription:
      "Panel de control y telemetría de sistemas distribuidos con streaming de eventos por WebSockets, detección de anomalías en latencia y alertas automatizadas.",
    metrics: [
      { label: "Frecuencia de Muestreo", value: "100ms" },
      { label: "Consumo Memoria", value: "< 28 MB" },
      { label: "Protocolos", value: "WebSocket / REST" },
      { label: "Alertas", value: "Tiempo Real" }
    ],
    tags: ["TypeScript", "WebSockets", "Node.js", "Tailwind/CSS", "Docker", "DevOps"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "La supervisión de microservicios en arquitecturas distribuidas suele depender de herramientas pesadas que consumen excesivos recursos en entornos pequeños o medianos.",
      technicalChallenge:
        "Recibir y graficar miles de eventos por segundo en el navegador sin provocar saturación de recolección de basura (Garbage Collection lag).",
      solution:
        "Arquitectura basada en buffers circulares y renderizado eficiente en Canvas 2D con suscripción por canales WebSockets comprimidos.",
      architecturalHighlights: [
        "Uso de ArrayBuffers tipados para serialización y deserialización binaria ultrarrápida.",
        "Detección predictiva de cuellos de botella basada en ventanas deslizantes de desviación estándar.",
        "Contenedores Docker listos para desplegar con orquestación simple."
      ],
      impact:
        "Reducción del 40% en el tiempo medio de detección y resolución de incidentes (MTTD/MTTR)."
    }
  }
];

// Stack Tecnológico Organizado por Capas de Ingeniería
const TECH_STACK = [
  {
    category: "Lenguajes & Paradigmas",
    icon: "code",
    skills: [
      { name: "TypeScript", level: "Avanzado", detail: "Tipado estricto, genéricos, diseño de contratos" },
      { name: "JavaScript (ES6+)", level: "Experto", detail: "Asincronía, Web APIs, Event Loop, DOM" },
      { name: "Python", level: "Avanzado", detail: "Estructuras de datos, algoritmos, scripts de automatización" },
      { name: "HTML5 Semántico", level: "Experto", detail: "Accesibilidad WCAG AA, SEO técnico, Schema.org" },
      { name: "CSS3 Moderno", level: "Avanzado", detail: "Variables CSS, Grid, Flexbox, micro-animaciones" }
    ]
  },
  {
    category: "Frontend & UI Engineering",
    icon: "layout",
    skills: [
      { name: "React 19 / 18", level: "Avanzado", detail: "Hooks personalizados, arquitectura de componentes, Concurrent Mode" },
      { name: "Three.js / WebGL", level: "Intermedio-Avanzado", detail: "Escenas 3D, cámaras, sombreadores PBR, partículas" },
      { name: "Vite Toolchain", level: "Experto", detail: "Configuración HMR, optimización de bundles, plugins" },
      { name: "Responsive & A11y", level: "Experto", detail: "Mobile-first, contraste estricto, navegación por teclado" }
    ]
  },
  {
    category: "Mobile & Multiplataforma",
    icon: "smartphone",
    skills: [
      { name: "Capacitor 8", level: "Avanzado", detail: "Puentes nativos Android, plugins de hardware (Cámara, Storage)" },
      { name: "Android Toolchain", level: "Intermedio", detail: "SDK, Gradle, emuladores y testing en hardware real" },
      { name: "Progressive Web Apps", level: "Avanzado", detail: "Service Workers, cache offline, manifiestos web" }
    ]
  },
  {
    category: "IA, APIs & Backend",
    icon: "cpu",
    skills: [
      { name: "Google Gemini API", level: "Avanzado", detail: "Modelos multimodales, structured output JSON, visión" },
      { name: "Node.js & Express", level: "Intermedio-Avanzado", detail: "Servicios REST, middlewares, gestión asíncrona" },
      { name: "WebSockets & Event Streams", level: "Avanzado", detail: "Comunicación bidireccional en tiempo real" },
      { name: "Bases de Datos & SQL", level: "Intermedio", detail: "Modelado relacional, PostgreSQL, SQLite local" }
    ]
  },
  {
    category: "Cloud, DevOps & Calidad",
    icon: "cloud",
    skills: [
      { name: "Cloudflare Pages & Edge", level: "Avanzado", detail: "Despliegues CDN, Wrangler CLI, headers HTTP seguros" },
      { name: "Git & GitHub CI/CD", level: "Avanzado", detail: "Flujos trunk-based, code reviews, automatización" },
      { name: "Linter & Static Analysis", level: "Avanzado", detail: "Oxlint, ESLint, TypeScript Compiler" },
      { name: "Lighthouse & Core Web Vitals", level: "Experto", detail: "LCP, CLS, INP optimizados para 99+ constante" }
    ]
  }
];

// Principios de Ingeniería y Filosofía de Trabajo
const ENGINEERING_PHILOSOPHY = [
  {
    number: "01",
    title: "Arquitectura Orientada a Rendimiento",
    description: "Cada byte cuenta. Priorizo código eficiente, tiempos de carga inferiores a 1 segundo y experiencias fluidas sin sobrecarga de librerías innecesarias."
  },
  {
    number: "02",
    title: "Tipado Estricto y Calidad de Código",
    description: "Uso riguroso de TypeScript y análisis estático para prevenir fallos en tiempo de ejecución, documentar contratos de datos y garantizar mantenibilidad a largo plazo."
  },
  {
    number: "03",
    title: "Experiencia de Usuario & Estética Sobria",
    description: "El software potente debe ser agradable e intuitivo. Cuido la jerarquía visual, la accesibilidad (a11y) y los detalles que marcan la diferencia profesional."
  },
  {
    number: "04",
    title: "Innovación Práctica con IA y Nuevas Tecnologías",
    description: "Integro modelos de IA de última generación (como Gemini Vision) donde aportan valor real de negocio, manteniendo predictibilidad y fiabilidad en las respuestas."
  }
];

// Metadatos Globales de Autor
const AUTHOR_PROFILE = {
  name: "Luciano",
  handle: "LuchoDB",
  role: "Desarrollador de Software & Diseñador de Sistemas",
  location: "Argentina / Remoto Global",
  email: "luciano.developer@luchodb.dev",
  github: "https://github.com/LuchoDB",
  linkedin: "https://linkedin.com/in/luchodb",
  availability: "Disponible para proyectos de alto impacto y roles de ingeniería",
  yearsExperience: "4+",
  projectsCompleted: "15+",
  coreFocus: "Fullstack, Mobile Nativo/Híbrido, Gráficos WebGL & Soluciones impulsadas por Inteligencia Artificial"
};
