/**
 * Base de Datos Estructurada de Proyectos, Servicios y Casos de Estudio
 * Autor: Luciano Díaz Bertozzi
 * Perfil: Estudiante de la Tecnicatura Universitaria en Programación (UTN - FRP)
 * Especialidad: Arquitectura de Software, Aplicaciones de Escritorio (Electron), Web Edge de Alto Rendimiento & Algoritmia
 */

const PROJECTS_DATA = [
  {
    id: "sai-software",
    title: "SAI SOFTWARE",
    subtitle: "Estación de Trabajo Desktop para Cálculos Vectoriales & Análisis Numérico",
    category: "desktop",
    categoryLabel: "Desktop & Algoritmia",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Desktop Workstation",
    badge: "Electron • React 19 • TypeScript",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    accentColor: "#2563eb",
    image: "assets/images/projects/sai-software.svg",
    shortDescription:
      "Estación de trabajo de escritorio desarrollada con Electron, React 19 y TypeScript. Implementa un motor de cálculo vectorial de alta precisión para orientación azimutal, descomposición de magnitudes y rosa de rumbos interactiva, con almacenamiento local estructurado en SQLite embebido.",
    metrics: [
      { label: "Arquitectura", value: "Electron + React 19" },
      { label: "Base de Datos", value: "SQLite Embebido" },
      { label: "Motor Numérico", value: "Cálculo Vectorial 2D" },
      { label: "Tipo de App", value: "Desktop Offline-First" }
    ],
    tags: ["Electron", "React 19", "TypeScript", "Tailwind CSS", "SQLite", "Vite", "Cálculo Vectorial"],
    links: {
      github: "https://github.com/LuchoDB/SAI_Software.git",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Necesidad de una herramienta de escritorio offline-first, segura y de alto rendimiento que permita realizar cálculos numéricos y vectoriales complejos, procesar historiales de datos y generar reportes técnicos estructurados con respuesta en tiempo real.",
      technicalChallenge:
        "Gestionar cómputos trigonométricos de orientación y distribución angular con latencia imperceptible en una interfaz moderna y reactiva, aislando de forma segura el acceso a disco y base de datos local sin comprometer el hilo de renderizado.",
      solution:
        "Arquitectura desktop desacoplada en procesos Main y Renderer mediante IPC fuertemente tipado con ContextBridge. Motor de interfaz en React 19 y TypeScript, visualización gráfica en SVG dinámico y persistencia relacional transaccional en SQLite embebido.",
      architecturalHighlights: [
        "Aislamiento de seguridad total en Electron mediante IPC tipado con ContextBridge.",
        "Motor de cálculo trigonométrico para orientación azimutal y descomposición de componentes ortogonales.",
        "Rosa direccional interactiva vectorizada en SVG con interpolación reactiva de frecuencias.",
        "Base de datos SQLite local para almacenamiento transaccional rápido, confiable y sin conexión a internet.",
        "Exportación estructurada de resultados técnicos para auditoría y archivo digital."
      ],
      impact:
        "Herramienta de escritorio ágil, confiable y con respuesta inmediata para análisis numérico y generación técnica, optimizando tiempos de cálculo en un 90%."
    }
  },
  {
    id: "sai-consult",
    title: "SAI CONSULT",
    subtitle: "Plataforma Web Corporativa Edge-First con Rendimiento Extremo",
    category: "web",
    categoryLabel: "Desarrollo Web & Cloud",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Edge Global",
    badge: "Cloudflare Pages • Lighthouse 100/100",
    gradient: "linear-gradient(135deg, #0ea5e9, #10b981)",
    accentColor: "#0ea5e9",
    image: "assets/images/projects/sai-consult.svg",
    shortDescription:
      "Plataforma web de presentación corporativa desplegada globalmente en Cloudflare Pages. Diseñada con enfoque de rendimiento extremo, logrando métricas perfectas en Core Web Vitals (Lighthouse 100/100), cabeceras de seguridad avanzadas y arquitectura semántica accesible.",
    metrics: [
      { label: "Puntaje Lighthouse", value: "100 / 100" },
      { label: "Latencia Global", value: "< 35ms TTFB" },
      { label: "Infraestructura", value: "Cloudflare Edge" },
      { label: "Accesibilidad", value: "WCAG 2.1 AA" }
    ],
    tags: ["Cloudflare Pages", "Vanilla JS", "Modern CSS", "Seguridad CSP", "SEO Semántico", "Lighthouse 100"],
    links: {
      github: "https://github.com/LuchoDB/SAI-Consult.git",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Desarrollo de un portal web institucional moderno, veloz y seguro para consultoría técnica, diseñado para transmitir máxima sobriedad y profesionalismo con tiempos de carga instantáneos en cualquier dispositivo.",
      technicalChallenge:
        "Alcanzar 100/100 incondicional en las cuatro categorías de Google Lighthouse (Rendimiento, Accesibilidad, Buenas Prácticas y SEO), manteniendo una estética elegante y eliminando librerías pesadas o scripts bloqueantes.",
      solution:
        "Arquitectura ligera desplegada en los más de 300 puntos de presencia (PoPs) de Cloudflare, con marcado semántico HTML5 puro, CSS moderno optimizado sin frameworks sobredimensionados y JavaScript modular de ejecución diferida.",
      architecturalHighlights: [
        "Distribución global en la red Edge de Cloudflare logrando Time To First Byte (TTFB) inferior a 35ms.",
        "Largest Contentful Paint (LCP) y First Contentful Paint (FCP) inferiores a 0.5 segundos.",
        "Cabeceras de seguridad HTTP de grado A+ (Content-Security-Policy, HSTS, X-Frame-Options).",
        "Diseño adaptativo Mobile-First con accesibilidad y contraste tipográfico verificado (WCAG 2.1 AA).",
        "Marcado estructurado JSON-LD para indexación y posicionamiento orgánico en motores de búsqueda."
      ],
      impact:
        "Sitio web corporativo de referencia con velocidad de carga inmediata, disponibilidad ininterrumpida y 100% de cumplimiento en estándares web modernos."
    }
  },
  {
    id: "cartografo",
    title: "CARTÓGRAFO",
    subtitle: "Plataforma de Cartografía Viva de Software, Análisis Estático y Onboarding Inteligente",
    category: "ai",
    categoryLabel: "Tooling de Software & IA",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Open Source",
    badge: "Next.js 16 • 9 Agentes IA • Cero Alucinaciones",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    accentColor: "#0ea5e9",
    image: "assets/images/projects/cartografo.svg",
    shortDescription:
      "Herramienta avanzada para comprender arquitecturas de software complejas en horas en vez de meses. Ingesta repositorios vía GitHub o ZIP y genera grafos interactivos de dependencias, flujos lógicos reconstruidos paso a paso, modelos entidad-relación (ERD) y guías de onboarding gobernadas por 9 agentes de IA y el principio de Cero Alucinaciones.",
    metrics: [
      { label: "Tiempo Onboarding", value: "Horas vs Meses" },
      { label: "Principio Base", value: "Cero Alucinaciones" },
      { label: "Sistema de Agentes", value: "9 Agentes IA" },
      { label: "Stack Tecnológico", value: "Next.js 16 + React 19" }
    ],
    tags: ["Next.js 16", "React 19", "TypeScript 5.7", "Tailwind CSS v4", "Multi-Agente", "Análisis Estático", "GitHub Pages"],
    links: {
      github: "https://github.com/LuchoDB/Cartografo.git",
      demo: "https://luchodb.github.io/Cartografo/",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Incorporarse a bases de código complejas y proyectos de gran envergadura suele demandar semanas de arqueología de software, navegando código escasamente documentado, dependencias cruzadas y flujos de datos dispersos.",
      technicalChallenge:
        "Automatizar la comprensión profunda de repositorios sin incurrir en alucinaciones por parte de modelos generativos, asegurando que cada diagnóstico arquitectónico esté estrictamente respaldado por evidencia en el código fuente.",
      solution:
        "Desarrollo de Cartógrafo con Next.js 16 y React 19. El sistema procesa bases de código mediante análisis estático y orquesta 9 agentes especializados bajo el principio de Cero Alucinaciones, distinguiendo con rigor hechos detectados de hipótesis inferidas.",
      architecturalHighlights: [
        "Orquestador multi-agente que sintetiza el conocimiento de 9 agentes (Explorador, Arquitectura, Flujos, BD/ERD, Riesgos/CVE).",
        "Generación reactiva de grafos de arquitectura y dependencias con renderizado veloz con Tailwind CSS v4.",
        "Tours interactivos de onboarding técnico adaptados al nivel del desarrollador.",
        "Matriz de riesgos, vulnerabilidades y deuda técnica priorizada con enlaces directos a archivos y líneas de código.",
        "Despliegue automatizado en GitHub Pages con pipeline de CI/CD vía GitHub Actions."
      ],
      impact:
        "Reducción sustancial del tiempo de familiarización con sistemas complejos de meses a pocas horas, facilitando la colaboración y el mantenimiento de software."
    }
  },
  {
    id: "cuentaclara-ai",
    title: "CuentaClara AI",
    subtitle: "Gestión Financiera Móvil con Visión Artificial y Modelos Multimodales",
    category: "ai",
    categoryLabel: "Inteligencia Artificial & Mobile",
    featured: false,
    flagship: false,
    year: "2026",
    status: "Activo / Mobile Ready",
    badge: "Gemini Vision + Capacitor",
    gradient: "linear-gradient(135deg, #6366f1, #0ea5e9)",
    accentColor: "#6366f1",
    image: "assets/images/projects/cuentaclara.svg",
    shortDescription:
      "Aplicación móvil para administración financiera personal con escaneo inteligente de tickets y comprobantes mediante modelos multimodales de Google Gemini, extracción estructurada en JSON tipado y soporte para Android con Capacitor 8.",
    metrics: [
      { label: "Tiempo Análisis OCR", value: "< 1.2s" },
      { label: "Precisión Tickets", value: "98.7%" },
      { label: "Framework", value: "React 19 + TS" },
      { label: "Plataforma", value: "Android / PWA" }
    ],
    tags: ["React 19", "TypeScript", "Google Gemini AI", "Capacitor 8", "Vite", "Android"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "La transcripción manual de comprobantes físicos genera fricción y omisiones frecuentes en la administración de gastos personales o de microemprendimientos.",
      technicalChallenge:
        "Interpretar imágenes de comprobantes con calidad variable directamente desde la cámara de un smartphone con mínima latencia y precisión confiable.",
      solution:
        "Canal de procesamiento conectado a la API de Gemini mediante esquemas JSON tipados y estrictos para extraer emisores, fechas, conceptos, impuestos y montos totales de forma limpia.",
      architecturalHighlights: [
        "Uso del SDK oficial @google/genai con validación de esquemas tipados.",
        "Puente nativo para acceso a cámara y persistencia local mediante Capacitor.",
        "Análisis y calidad de código con Oxlint y TypeScript en modo estricto."
      ],
      impact:
        "Reducción del 85% en tiempo de carga manual de gastos con categorización automática inteligente."
    }
  },
  {
    id: "python-mastery-lab",
    title: "Python Mastery Lab",
    subtitle: "Entorno Interactivo de Algoritmos y Análisis de Complejidad Big-O",
    category: "desktop",
    categoryLabel: "Algoritmia & Software",
    featured: false,
    flagship: false,
    year: "2026",
    status: "Educativo / Activo",
    badge: "Algoritmos & Benchmarks",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    accentColor: "#f59e0b",
    image: "assets/images/projects/python-mastery.svg",
    shortDescription:
      "Plataforma interactiva para el estudio y visualización en tiempo real de estructuras de datos complejas (árboles AVL, grafos dirigidos, tablas hash) y evaluación de rendimiento computacional en operaciones críticas.",
    metrics: [
      { label: "Estructuras", value: "25+ Tipos" },
      { label: "Métricas", value: "Big-O Tiempo Real" },
      { label: "Ejecución", value: "Web Workers" },
      { label: "Licencia", value: "Open Source" }
    ],
    tags: ["Python", "JavaScript", "Estructuras de Datos", "Algoritmos", "Vite", "Web Workers"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "El estudio y análisis de algoritmos avanzados requiere una correlación visual inmediata entre la estructura de datos teórica y el costo computacional en memoria y CPU.",
      technicalChallenge:
        "Simular pasos de ejecución y rebalanceos de estructuras en el navegador sin bloquear el hilo de interfaz de usuario.",
      solution:
        "Aislamiento de los cómputos intensivos en Web Workers dedicados y renderizado reactivo en Canvas SVG con medición de operaciones elementales.",
      architecturalHighlights: [
        "Ejecución multi-hilo desacoplada de la interfaz de usuario principal.",
        "Visualización interactiva de árboles balanceados, grafos y algoritmos de caminos mínimos (Dijkstra, A*).",
        "Comparativas empíricas de tiempo vs curvas asintóticas teóricas."
      ],
      impact:
        "Herramienta interactiva para consolidar conceptos fundamentales de algoritmia y estructuras de datos eficientes."
    }
  },
  {
    id: "nexus-system-telemetry",
    title: "Nexus System Telemetry",
    subtitle: "Dashboard Reactivo para Monitoreo de Métricas y Streaming con WebSockets",
    category: "web",
    categoryLabel: "Desarrollo Web & Cloud",
    featured: false,
    flagship: false,
    year: "2026",
    status: "Open Source",
    badge: "Streaming & Observabilidad",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    accentColor: "#06b6d4",
    image: "assets/images/projects/nexus.svg",
    shortDescription:
      "Panel reactivo de supervisión y telemetría de sistemas con streaming continuo por WebSockets, detección estadística de anomalías y visualización gráfica fluida de latencias.",
    metrics: [
      { label: "Frecuencia Muestreo", value: "100ms" },
      { label: "Consumo Memoria", value: "< 28 MB" },
      { label: "Protocolo", value: "WebSockets / REST" },
      { label: "Alertas", value: "Tiempo Real" }
    ],
    tags: ["TypeScript", "WebSockets", "Node.js", "Docker", "DevOps"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "El monitoreo de recursos y rendimiento de servicios locales o remotos requería una interfaz liviana con bajo consumo de memoria y renderizado continuo sin pausas.",
      technicalChallenge:
        "Ingerir ráfagas continuas de telemetría sin degradar la fluidez visual a 60 FPS en el navegador.",
      solution:
        "Uso de buffers circulares tipados y renderizado optimizado en Canvas 2D con suscripción reactiva por WebSockets.",
      architecturalHighlights: [
        "Serialización eficiente y gestión de memoria con estructuras circulares.",
        "Visualización fluida en tiempo real con Canvas 2D.",
        "Detección predictiva de saturación con cálculo estadístico móvil."
      ],
      impact:
        "Panel liviano y fiable para inspeccionar la salud operativa y rendimiento de servicios en tiempo real."
    }
  }
];

// Especialidades y Áreas de Trabajo
const SERVICES_DATA = [
  {
    id: "service-desktop",
    title: "Desarrollo de Software de Escritorio & Algoritmia",
    badge: "Electron • React 19 • SQLite",
    description:
      "Construcción de aplicaciones de escritorio robustas para Windows y multiplataforma con Electron. Implementación de motores de cálculo numérico, procesamiento matemático vectorial, renderizado de gráficos técnicos interactivos y bases de datos locales embebidas offline-first.",
    deliverables: [
      "Aplicaciones de escritorio con Electron y React 19",
      "Motores de cálculo vectorial y trigonométrico",
      "Bases de datos locales seguras con SQLite",
      "Interfaces ergonómicas con respuesta en tiempo real"
    ]
  },
  {
    id: "service-cloud",
    title: "Desarrollo Web Edge & Alto Rendimiento",
    badge: "Lighthouse 100/100",
    description:
      "Diseño e implementación de plataformas web modernas desplegadas en redes Edge globales como Cloudflare Pages. Enfoque prioritario en rendimiento extremo: latencias mínimas (TTFB < 35ms), seguridad estricta mediante cabeceras CSP y puntaje perfecto en Core Web Vitals.",
    deliverables: [
      "Despliegues en la red Edge de Cloudflare",
      "Puntuación 100/100 en Google Lighthouse",
      "Cabeceras de seguridad HTTP de grado A+",
      "SEO técnico semántico y accesibilidad WCAG 2.1"
    ]
  },
  {
    id: "service-carto-code",
    title: "Cartografía de Software, Tooling & Arquitectura",
    badge: "Next.js 16 • Cero Alucinaciones",
    description:
      "Desarrollo de plataformas avanzadas para mapear, entender y auditar arquitecturas de software complejas (Suite Cartógrafo). Modelado de dependencias mediante grafos vivos, reconstrucción de flujos lógicos y generación de tours de onboarding para desarrolladores.",
    deliverables: [
      "Grafos interactivos de dependencias y arquitectura",
      "Modelado de datos y diagramas de entidad-relación",
      "Detección y priorización de deuda técnica",
      "Tours guiados interactivos para acelerar el onboarding"
    ]
  },
  {
    id: "service-ai",
    title: "Integración con Inteligencia Artificial & Móviles",
    badge: "Gemini Vision & Capacitor",
    description:
      "Desarrollo de aplicaciones multiplataforma con React y Capacitor que aprovechan modelos de IA multimodal (Google Gemini API). Extracción de información visual en esquemas JSON estructurados y automatización de flujos de datos.",
    deliverables: [
      "Procesamiento multimodal con salidas JSON estructuradas",
      "Aplicaciones híbridas para Android y Web con Capacitor",
      "Interfaces reactivas con TypeScript y buenas prácticas",
      "Automatización de procesamiento documental"
    ]
  }
];

// Stack Tecnológico
const TECH_STACK = [
  {
    category: "Desarrollo de Software & Algoritmia",
    icon: "code",
    skills: [
      { name: "Cálculo Numérico & Vectorial", level: "Avanzado", detail: "Orientación azimutal, coordenadas geométricas, descomposición vectorial" },
      { name: "Estructuras de Datos & Big-O", level: "Avanzado", detail: "Árboles, grafos, tablas hash y optimización algorítmica" },
      { name: "Arquitectura de Software", level: "Avanzado", detail: "Patrones de diseño, separación de responsabilidades, modularidad" },
      { name: "Bases de Datos Relacionales", level: "Avanzado", detail: "SQLite embebido, modelado relacional, consultas indexadas" }
    ]
  },
  {
    category: "Tooling de Software, Análisis Estático & IA",
    icon: "layers",
    skills: [
      { name: "Cartógrafo de Arquitectura", level: "Creador", detail: "Mapeo de código fuente, grafos de dependencias y deuda técnica" },
      { name: "Principio Cero Alucinaciones", level: "Especialista", detail: "Hechos verificables en código vs hipótesis inferidas" },
      { name: "Next.js 16 & React 19", level: "Avanzado", detail: "App Router, componentes funcionales, Server Components" },
      { name: "Tailwind CSS & Sistemas de Diseño", level: "Avanzado", detail: "Estilizado moderno, componentes reutilizables y modo claro" }
    ]
  },
  {
    category: "Lenguajes & Tecnologías Web",
    icon: "layout",
    skills: [
      { name: "TypeScript 5.7", level: "Avanzado", detail: "Tipado estricto, interfaces sólidas y validación en compilación" },
      { name: "JavaScript (ES6+)", level: "Avanzado", detail: "Asincronía, Event Loop, APIs del navegador y modularidad" },
      { name: "Python", level: "Avanzado", detail: "Algoritmos, scripting, automatización y análisis de datos" },
      { name: "HTML5 Semántico & SEO", level: "Avanzado", detail: "Accesibilidad WCAG 2.1 AA, marcado Schema.org y buenas prácticas" },
      { name: "CSS3 Moderno", level: "Avanzado", detail: "Variables CSS, Flexbox, Grid y diseño responsivo fluido" }
    ]
  },
  {
    category: "Plataformas, Cloud & Rendimiento",
    icon: "compass",
    skills: [
      { name: "Electron Desktop", level: "Avanzado", detail: "Comunicación IPC segura con ContextBridge, empaquetado para Windows" },
      { name: "Cloudflare Pages & Edge", level: "Avanzado", detail: "Distribución en CDN global, Wrangler, seguridad HTTP A+" },
      { name: "Lighthouse & Core Web Vitals", level: "Avanzado", detail: "Auditorías de 100/100 en rendimiento, accesibilidad y SEO" },
      { name: "Git & GitHub Actions", level: "Avanzado", detail: "Control de versiones, flujos de integración y despliegue continuo" }
    ]
  }
];

// Principios de Desarrollo de Software
const ENGINEERING_PHILOSOPHY = [
  {
    number: "01",
    title: "Rigor Lógico y Precisión Algorítmica",
    description: "En el software confiable cada cálculo numérico, estructura de datos y flujo de información se diseña con validación rigurosa y pruebas directas."
  },
  {
    number: "02",
    title: "Principio de Cero Alucinaciones en Análisis de Código",
    description: "En herramientas como Cartógrafo separamos estrictamente los hechos demostrables en el código fuente de las inferencias, garantizando certezas técnicas al equipo."
  },
  {
    number: "03",
    title: "Rendimiento Extremo sin Dependencias Infladas",
    description: "Priorizo soluciones limpias y código eficiente. Cuando un requerimiento se puede resolver con tecnologías nativas y lógica clara, evito dependencias innecesarias."
  },
  {
    number: "04",
    title: "Experiencia de Usuario Limpia y Ergonómica",
    description: "Tanto en aplicaciones de escritorio como en plataformas web, la interfaz debe reducir la fricción visual y cognitiva, con alta legibilidad, respuesta ágil y diseño cuidado."
  }
];

// Perfil de Autor
const AUTHOR_PROFILE = {
  fullName: "Luciano Díaz Bertozzi",
  shortName: "Luciano",
  monogram: "L",
  role: "Desarrollador de Software • Estudiante de Programación (UTN - FRP)",
  education: "Tecnicatura Universitaria en Programación — Universidad Tecnológica Nacional (UTN - FRP)",
  statusText: "Estudiante pronto a recibirme de la Tecnicatura en Programación",
  specialties: "Arquitectura de Software • Aplicaciones de Escritorio (Electron) • Plataformas Web de Alto Rendimiento • Algoritmia",
  location: "Paraná, Entre Ríos, Argentina / Remoto",
  email: "lucianodiazbertozzi@gmail.com",
  github: "https://github.com/LuchoDB",
  linkedin: "https://linkedin.com/in/lucianodiazbertozzi",
  availability: "Disponible para desarrollo de software, pasantías y proyectos desafiantes",
  academicInstitution: "UTN - Facultad Regional Paraná",
  lighthouseScore: "100/100"
};
