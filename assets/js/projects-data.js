/**
 * Base de Datos Estructurada de Proyectos, Servicios y Casos de Estudio
 * Autor: Luciano Díaz Bertozzi
 * Especialidad: Ingeniería de Software, Sistemas Aeronáuticos & Plataformas de Alto Rendimiento
 */

const PROJECTS_DATA = [
  {
    id: "sai-consult-platform",
    title: "SAI CONSULT",
    subtitle: "Plataforma Corporativa Edge de Servicios Aeronáuticos Integrales",
    category: "aero",
    categoryLabel: "Aeronáutica & Cloud",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Edge Network",
    badge: "Cloudflare Edge • Lighthouse 100",
    gradient: "linear-gradient(135deg, #0ea5e9, #10b981)",
    accentColor: "#0ea5e9",
    image: "assets/images/projects/sai-consult.svg",
    shortDescription:
      "Plataforma digital corporativa para la consultora aeronáutica SAI Consult. Diseñada bajo arquitectura Edge-First en Cloudflare Pages, logrando puntajes perfectos en Core Web Vitals (Lighthouse 100/100), seguridad estricta y presentación formal ante ANAC y ENACOM.",
    metrics: [
      { label: "Puntaje Lighthouse", value: "100 / 100" },
      { label: "Latencia Global", value: "< 35ms TTFB" },
      { label: "Cumplimiento", value: "ANAC / OACI" },
      { label: "Infraestructura", value: "Cloudflare Edge" }
    ],
    tags: ["Cloudflare Pages", "Wrangler", "Vanilla JS", "Modern CSS", "Seguridad CSP", "SEO Semántico"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "La consultora aeronáutica SAI Consult requería un portal institucional de máxima sobriedad y rigor técnico para presentar servicios especializados de habilitación de pistas, helipuertos y trámites ante ANAC, ENACOM y Catastro.",
      technicalChallenge:
        "Garantizar tiempos de carga prácticamente instantáneos a nivel internacional, blindaje contra vulnerabilidades web mediante políticas CSP estrictas y accesibilidad WCAG 2.1 AA sin librerías pesadas innecesarias.",
      solution:
        "Despliegue distribuido en la red Edge de Cloudflare con microcomponentes modulares, estricto marcado semántico HTML5 y cabeceras de seguridad de grado A+ (HSTS, Content-Security-Policy, X-Frame-Options).",
      architecturalHighlights: [
        "Distribución en 300+ nodos Edge de Cloudflare para mínima latencia global.",
        "Largest Contentful Paint (LCP) inferior a 0.5 segundos verificado en Google PageSpeed.",
        "Arquitectura de información orientada a directores de aeródromos, propietarios de aeronaves y entidades regulatorias.",
        "Formularios serverless y métricas de privacidad sin rastreo invasivo."
      ],
      impact:
        "Posicionamiento orgánico de referencia en servicios de consultoría aeronáutica y disponibilidad ininterrumpida del 99.99%."
    }
  },
  {
    id: "sai-software-aero",
    title: "SAI SOFTWARE",
    subtitle: "Software de Ingeniería Aeronáutica & Factibilidad Técnica (LAD/LADH)",
    category: "aero",
    categoryLabel: "Aeronáutica & Desktop",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Desktop Workstation",
    badge: "Electron • RAAC 153/154 • React 19",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    accentColor: "#2563eb",
    image: "assets/images/projects/sai-software.svg",
    shortDescription:
      "Suite integral de escritorio para cálculo y auditoría de factibilidad técnica aeronáutica. Automatiza el estudio de pistas LAD (RAAC 153), helipuertos LADH (RAAC 154 / OACI Anexo 14), cálculo de rumbos QFU y rosa de los vientos vectorial de 16 rumbos con persistencia SQLite.",
    metrics: [
      { label: "Normativa Base", value: "RAAC 153 / 154" },
      { label: "Usabilidad OACI", value: "≥ 95% Calculado" },
      { label: "Rosa de Vientos", value: "16 Rumbos Vector" },
      { label: "Arquitectura", value: "Electron + React 19" }
    ],
    tags: ["Electron", "React 19", "TypeScript", "Tailwind CSS", "SQLite Embebido", "Vite", "Viento Cruzado"],
    links: {
      github: "https://github.com/LuchoDB",
      demo: "#",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Los estudios de factibilidad para habilitar pistas y helipuertos demandaban semanas de cálculos manuales de viento cruzado, comprobaciones trigonométricas de rumbos magnéticos QFU y armado artesanal de dossiers para ANAC.",
      technicalChallenge:
        "Diseñar un motor matemático riguroso capaz de procesar historiales anemométricos, calcular vientos transversales según envergadura de aeronaves de diseño y generar planos acotados vectoriales imprimibles sin margen de error.",
      solution:
        "Desarrollo de una estación de trabajo nativa en Electron con React 19 y TypeScript. Incluye motor de cálculo vectorial para rumbos magnéticos con declinación anual, rosa de vientos interactiva en SVG y arquitectura multi-agente para auditoría normativa.",
      architecturalHighlights: [
        "Cálculo automático de rumbos verdaderos, declinación magnética y designador de pista QFU a partir de coordenadas de umbral.",
        "Rosa de los vientos interactiva con interpolación de frecuencias de viento y factor de usabilidad OACI.",
        "Generador de dossiers técnicos en alta resolución listos para firma profesional y presentación en ANAC.",
        "Base de datos SQLite local (node:sqlite) aislada mediante ContextBridge seguro de Electron."
      ],
      impact:
        "Reducción del 90% en el tiempo de emisión de dictámenes de factibilidad aeronáutica con validación matemática infalible."
    }
  },
  {
    id: "cartografo-code-gis",
    title: "CARTÓGRAFO",
    subtitle: "Plataforma de Cartografía Viva de Software, Análisis Estático y Onboarding Inteligente",
    category: "aero",
    categoryLabel: "Cartografía de Software & IA",
    featured: true,
    flagship: true,
    year: "2026",
    status: "Producción / Open Source",
    badge: "Next.js 16 • 9 Agentes IA • Cero Alucinaciones",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    accentColor: "#0ea5e9",
    image: "assets/images/projects/cartografo.svg",
    shortDescription:
      "Plataforma para comprender bases de código complejas y legacy en horas en vez de meses. Ingesta repositorios vía GitHub o archivos ZIP y genera grafos interactivos de dependencias, flujos de negocio reconstruidos paso a paso, modelos entidad-relación (ERD) y tours guiados de onboarding gobernados por 9 agentes de IA y el principio de Cero Alucinaciones.",
    metrics: [
      { label: "Tiempo Onboarding", value: "Horas vs Meses" },
      { label: "Principio Base", value: "Cero Alucinaciones" },
      { label: "Sistema de Agentes", value: "9 Agentes IA" },
      { label: "Stack Tecnológico", value: "Next.js 16 + React 19" }
    ],
    tags: ["Next.js 16", "React 19", "TypeScript 5.7", "Tailwind CSS v4", "Multi-Agente", "Análisis Estático", "GitHub Pages"],
    links: {
      github: "https://github.com/LuchoDB/Cartografo",
      demo: "https://luchodb.github.io/Cartografo/",
      caseStudy: true
    },
    caseStudy: {
      clientContext:
        "Incorporarse a bases de código legacy de cientos de miles de líneas suele demandar semanas o meses de arqueología de software, navegando código indocumentado, arquitecturas difusas y dependencias obsoletas.",
      technicalChallenge:
        "Automatizar la comprensión profunda de repositorios complejos sin incurrir en alucinaciones plausibles pero falsas, asegurando que cada diagnóstico esté respaldado por evidencia verificable en el código fuente.",
      solution:
        "Desarrollo de Cartógrafo con Next.js 16 y React 19. El sistema ingesta repositorios vía URL o ZIP y orquesta 9 agentes especializados bajo el principio de Cero Alucinaciones, distinguiendo con rigor hechos <detectados> de hipótesis <inferidas>.",
      architecturalHighlights: [
        "Orquestador multi-agente que sintetiza el conocimiento de 9 agentes especializados (Explorador, Arquitectura, Flujos, BD/ERD, Riesgos/CVE).",
        "Generación reactiva de grafos de arquitectura y dependencias con renderizado ultrarrápido con Tailwind CSS v4.",
        "Tours interactivos de onboarding guiado adaptados al rol del desarrollador (Junior, Semi-Senior, Senior).",
        "Matriz de riesgos, CVEs y deuda técnica priorizada con enlaces directos a archivos y líneas de código.",
        "Despliegue automatizado en GitHub Pages con pipeline de CI/CD vía GitHub Actions."
      ],
      impact:
        "Reducción radical del tiempo de comprensión de sistemas legacy de meses a horas, acelerando el onboarding de equipos de ingeniería con cero margen de error."
    }
  },
  {
    id: "cuentaclara-ai",
    title: "CuentaClara AI",
    subtitle: "Gestión Financiera Móvil con Visión Artificial y Gemini Multimodal",
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
      "Aplicación móvil para administración financiera con escaneo inteligente de recibos y facturas mediante modelos de visión artificial de Google Gemini, salida estructurada sin margen de alucinación y soporte Android nativo con Capacitor 8.",
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
        "La transcripción manual de comprobantes físicos genera fricción y errores sistemáticos en la contabilidad personal y de pequeñas empresas.",
      technicalChallenge:
        "Interpretar comprobantes impresos deteriorados o con formatos variables directamente desde la cámara del smartphone con mínima latencia.",
      solution:
        "Pipeline de preprocesamiento de imágenes conectado a Google Gemini AI mediante esquemas JSON tipados para extraer con precisión emisores, fechas, conceptos, impuestos y totales.",
      architecturalHighlights: [
        "Uso de @google/genai con schemas declarativos estrictos.",
        "Puente nativo de cámara y almacenamiento seguro mediante Capacitor.",
        "Análisis de código estricto con Oxlint y TypeScript."
      ],
      impact:
        "Reducción del 85% en tiempo de carga manual de gastos e integración instantánea con balance mensual."
    }
  },
  {
    id: "python-mastery-lab",
    title: "Python Mastery Lab",
    subtitle: "Entorno Interactivo de Algoritmos y Análisis de Complejidad Big-O",
    category: "cloud",
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
      "Plataforma interactiva para el estudio y visualización en tiempo real de estructuras de datos complejas (árboles AVL, grafos dirigidos, tablas hash) y evaluación de rendimiento asintótico computacional.",
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
        "La enseñanza y análisis de algoritmos avanzados requiere una correlación visual inmediata entre la estructura teórica y el coste de CPU/memoria.",
      technicalChallenge:
        "Simular pasos de ejecución y rebalanceos arbóreos sin bloquear la tasa de refresco del navegador web.",
      solution:
        "Aislamiento de la computación pesada en hilos de Web Workers y renderizado reactivo en Canvas SVG con cómputo de operaciones elementales.",
      architecturalHighlights: [
        "Ejecución multi-hilo desacoplada del hilo principal de UI.",
        "Visualización de árboles balanceados, grafos dirigidos y recorridos Dijkstra/A*.",
        "Benchmarks comparativos empíricos vs teóricos."
      ],
      impact:
        "Herramienta adoptada para formación técnica y aceleración del aprendizaje de complejidad algorítmica."
    }
  },
  {
    id: "nexus-system-telemetry",
    title: "Nexus System Telemetry",
    subtitle: "Dashboard Reactivo para Monitoreo de Microservicios con WebSockets",
    category: "cloud",
    categoryLabel: "DevOps & Cloud",
    featured: false,
    flagship: false,
    year: "2026",
    status: "Open Source",
    badge: "Streaming & Observabilidad",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    accentColor: "#06b6d4",
    image: "assets/images/projects/nexus.svg",
    shortDescription:
      "Panel de supervisión y telemetría de sistemas distribuidos con streaming continuo por WebSockets, detección estadística de anomalías y latencias en tiempo real.",
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
        "El diagnóstico de latencia y saturación de microservicios requería una interfaz ultraliviana sin consumo desmedido de memoria en estaciones locales.",
      technicalChallenge:
        "Ingerir miles de métricas concurrentes por segundo sin degradar la tasa de frames de visualización.",
      solution:
        "Buffers circulares tipados y renderizado en Canvas 2D con suscripción por canales binarios comprimidos.",
      architecturalHighlights: [
        "Serialización binaria ultrarrápida con ArrayBuffers.",
        "Detección predictiva de cuellos de botella con desviación estándar móvil."
      ],
      impact:
        "Reducción sustancial en el tiempo de diagnóstico y visualización de salud de microservicios."
    }
  }
];

// Servicios Especializados (Estructura NextGenAppsPro)
const SERVICES_DATA = [
  {
    id: "service-aero",
    title: "Ingeniería Aeronáutica & Software Técnico",
    badge: "Normativa RAAC & OACI",
    description:
      "Desarrollo de estaciones de trabajo y software de cálculo para factibilidad de pistas LAD (RAAC 153) y helipuertos LADH (RAAC 154 / OACI Anexo 14). Cálculos vectoriales de rumbos magnéticos QFU, estudios de viento cruzado, rosas de vientos de 16 rumbos y emisión de dossiers formales para ANAC y ENACOM.",
    deliverables: [
      "Estudios de factibilidad técnica LAD y LADH",
      "Cálculo de viento cruzado y factor de usabilidad OACI",
      "Software desktop en Electron con SQLite integrado",
      "Dossiers técnicos listos para presentación regulatoria"
    ]
  },
  {
    id: "service-cloud",
    title: "Arquitectura Cloud Edge & Sistemas de Alto Rendimiento",
    badge: "Lighthouse 100/100",
    description:
      "Diseño de plataformas corporativas desplegadas en la red Edge global (Cloudflare Pages, Workers, CDNs distribuidas). Eliminación de sobrecargas de frameworks para conseguir latencias inferiores a 35ms TTFB, seguridad CSP estricta y cumplimiento absoluto de Core Web Vitals.",
    deliverables: [
      "Despliegues Edge-First multi-región en Cloudflare",
      "Puntuación 100/100 constante en Google Lighthouse",
      "Políticas rígidas de seguridad (HSTS, CSP, XSS)",
      "SEO técnico avanzado y marcado estructurado JSON-LD"
    ]
  },
  {
    id: "service-carto-code",
    title: "Cartografía de Software, Análisis Estático & Multi-Agente",
    badge: "Next.js 16 • Cero Alucinaciones",
    description:
      "Plataformas avanzadas para ingesta y mapeo de arquitecturas de software legacy y complejas (Suite Cartógrafo). Descomposición de sistemas mediante grafos vivos de dependencias, reconstrucción de flujos de negocio y tours guiados de onboarding orquestados por agentes de inteligencia artificial sin alucinaciones.",
    deliverables: [
      "Mapeo vivo de dependencias y arquitectura en tiempo real",
      "Modelos entidad-relación (ERD) interactivos",
      "Auditoría de riesgos, CVEs y deuda técnica priorizada",
      "Tours de onboarding adaptativos por seniority técnico"
    ]
  },
  {
    id: "service-ai",
    title: "Inteligencia Artificial Multimodal & Aplicaciones Móviles",
    badge: "Gemini Vision & Capacitor",
    description:
      "Creación de aplicaciones multiplataforma para Android y Web que integran capacidades de visión artificial e inteligencia artificial multimodal (Google Gemini API), con esquemas de datos estructurados para automatización de flujos documentales y de negocio.",
    deliverables: [
      "Procesamiento multimodal con salida JSON estructurada",
      "Aplicaciones Android nativas y PWAs con Capacitor",
      "Arquitecturas reactivas en TypeScript y React 19",
      "Análisis estático y calidad de código garantizada"
    ]
  }
];

// Stack Tecnológico Organizado por Capas de Ingeniería
const TECH_STACK = [
  {
    category: "Ingeniería Aeronáutica & Normativas",
    icon: "compass",
    skills: [
      { name: "RAAC 153 (LAD / Pistas)", level: "Especialista", detail: "Diseño geométrico, márgenes, pendientes longitudinales y transversales" },
      { name: "RAAC 154 / OACI Anexo 14 (LADH)", level: "Especialista", detail: "FATO, TLOF, áreas de seguridad, superficies de aproximación" },
      { name: "Cálculo Vectorial QFU & Vientos", level: "Especialista", detail: "Rosas de viento 16 rumbos, coeficiente de usabilidad ≥ 95%" },
      { name: "Cartografía y Normativa ANAC", level: "Avanzado", detail: "Superficies Limitadoras de Obstáculos (SLO), expedientes ANAC/ENACOM" }
    ]
  },
  {
    category: "Cartografía de Software & Análisis Estático",
    icon: "layers",
    skills: [
      { name: "Cartógrafo Multi-Agente", level: "Creador", detail: "Orquestación de 9 agentes IA, análisis de grafos y deuda técnica" },
      { name: "Principio Cero Alucinaciones", level: "Especialista", detail: "Hechos <detectados> verificables vs hipótesis <inferidas>" },
      { name: "Next.js 16 & React 19", level: "Avanzado", detail: "Arquitectura de componentes, App Router, Server Components" },
      { name: "Tailwind CSS v4 & Lucide", level: "Avanzado", detail: "Sistemas de diseño modernos y estilizado dinámico" }
    ]
  },
  {
    category: "Lenguajes & Paradigmas",
    icon: "code",
    skills: [
      { name: "TypeScript 5.7", level: "Avanzado", detail: "Tipado estricto, contratos de datos, modularidad sólida" },
      { name: "JavaScript (ES6+)", level: "Experto", detail: "Asincronía, Web APIs, Event Loop, micro-optimizaciones" },
      { name: "Python", level: "Avanzado", detail: "Algoritmia, automatización, análisis numérico y scripts" },
      { name: "HTML5 Semántico & SEO", level: "Experto", detail: "Accesibilidad WCAG 2.1 AA, Schema.org, metadatos enriquecidos" },
      { name: "CSS3 Moderno", level: "Avanzado", detail: "Variables CSS, Grid, Flexbox, micro-animaciones fluidas" }
    ]
  },
  {
    category: "Desktop, Cloud & Bases de Datos",
    icon: "layout",
    skills: [
      { name: "Electron Desktop", level: "Avanzado", detail: "IPC seguro con ContextBridge, empaquetado nativo Windows" },
      { name: "Cloudflare Pages & Edge", level: "Avanzado", detail: "Distribución CDN global, Wrangler, headers de seguridad HTTP" },
      { name: "SQLite Embebido (node:sqlite)", level: "Avanzado", detail: "Persistencia local, transacciones seguras e indexación" },
      { name: "Lighthouse & Core Web Vitals", level: "Experto", detail: "Auditorías de 100/100 en rendimiento, accesibilidad y SEO" }
    ]
  }
];

// Principios de Ingeniería y Filosofía de Trabajo
const ENGINEERING_PHILOSOPHY = [
  {
    number: "01",
    title: "Rigor Matemático y Cumplimiento Regulatorio",
    description: "En sistemas aeronáuticos y de ingeniería no hay lugar para la ambigüedad. Cada cálculo de rumbo QFU, usabilidad de viento o despeje de obstáculos se valida contra normativas oficiales (ANAC, OACI)."
  },
  {
    number: "02",
    title: "Principio de Cero Alucinaciones en Análisis de Código",
    description: "En Cartógrafo y en cada análisis de arquitectura, distinguimos estrictamente los hechos demostrables en el código (<detectado>) de las hipótesis (<inferido>), protegiendo al equipo de falsas certezas."
  },
  {
    number: "03",
    title: "Rendimiento Extremo sin Dependencias Infladas",
    description: "Priorizo arquitecturas limpias y código eficiente. Si una solución puede resolverse con JavaScript moderno y CSS nativo en el Edge con carga sub-segundo, evitamos librerías superfluas."
  },
  {
    number: "04",
    title: "Diseño Ergonómico para Operaciones Complejas",
    description: "Una estación de trabajo profesional debe reducir la fatiga cognitiva. Las rosas de vientos, mapas de arquitectura y esquemas técnicos se diseñan con alta legibilidad y precisión visual."
  }
];

// Perfil de Autor Formal
const AUTHOR_PROFILE = {
  fullName: "Luciano Díaz Bertozzi",
  shortName: "Luciano",
  monogram: "LDB",
  role: "Ingeniero de Software & Diseñador de Sistemas Críticos",
  specialties: "Sistemas Aeronáuticos (RAAC/OACI) • Cartografía de Software • Cloud Edge • Desktop Electron",
  location: "Argentina / Remoto Internacional",
  email: "lucianodiazbertozzi@gmail.com",
  github: "https://github.com/LuchoDB",
  linkedin: "https://linkedin.com/in/lucianodiazbertozzi",
  availability: "Disponible para proyectos estratégicos de ingeniería, consultoría técnica y sistemas críticos",
  yearsExperience: "4+",
  lighthouseScore: "100/100"
};
