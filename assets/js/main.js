/**
 * PORTFOLIO WEB - LÓGICA DE INTERFAZ E INTERACCIÓN
 * Estilo: NextGenAppsPro (Bootstrap 5 Style)
 * Autor: Luciano Díaz Bertozzi
 * Soporte Bilingüe: Español (ES) / English (EN)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Referencias DOM
  const flagshipContainer = document.getElementById('flagship-container');
  const servicesContainer = document.getElementById('services-container');
  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentBody = document.getElementById('modal-dynamic-body');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectSubtitle = document.getElementById('modal-project-subtitle');
  const toastNotice = document.getElementById('toast-notice');
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const emailTextEl = document.getElementById('author-email-text');
  const copyWhatsappBtn = document.getElementById('btn-copy-whatsapp');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const currentYearSpan = document.getElementById('current-year');
  const stackContainer = document.getElementById('stack-container');
  const philosophyContainer = document.getElementById('philosophy-container');

  // Estado activo
  let currentLang = localStorage.getItem('portfolio_lang') || 'es';
  if (!['es', 'en'].includes(currentLang)) currentLang = 'es';
  let currentFilter = 'all';

  // Asignar año dinámico
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // SISTEMA DE INTERNACIONALIZACIÓN (i18n)
  // =========================================================================
  const t = (key) => {
    if (typeof UI_TRANSLATIONS !== 'undefined' && UI_TRANSLATIONS[currentLang] && UI_TRANSLATIONS[currentLang][key]) {
      return UI_TRANSLATIONS[currentLang][key];
    }
    if (typeof UI_TRANSLATIONS !== 'undefined' && UI_TRANSLATIONS['es'] && UI_TRANSLATIONS['es'][key]) {
      return UI_TRANSLATIONS['es'][key];
    }
    return key;
  };

  const getProjectsData = () => {
    if (currentLang === 'en' && typeof PROJECTS_DATA_EN !== 'undefined') {
      return PROJECTS_DATA_EN;
    }
    return typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA : [];
  };

  const getServicesData = () => {
    if (currentLang === 'en' && typeof SERVICES_DATA_EN !== 'undefined') {
      return SERVICES_DATA_EN;
    }
    return typeof SERVICES_DATA !== 'undefined' ? SERVICES_DATA : [];
  };

  const getTechStackData = () => {
    if (currentLang === 'en' && typeof TECH_STACK_EN !== 'undefined') {
      return TECH_STACK_EN;
    }
    return typeof TECH_STACK !== 'undefined' ? TECH_STACK : [];
  };

  const getPhilosophyData = () => {
    if (currentLang === 'en' && typeof ENGINEERING_PHILOSOPHY_EN !== 'undefined') {
      return ENGINEERING_PHILOSOPHY_EN;
    }
    return typeof ENGINEERING_PHILOSOPHY !== 'undefined' ? ENGINEERING_PHILOSOPHY : [];
  };

  // =========================================================================
  // 1. RENDERIZADO DE PROYECTOS FLAGSHIP (SAI CONSULT, SAI SOFT, CARTÓGRAFO)
  // =========================================================================
  const renderFlagshipProjects = () => {
    if (!flagshipContainer) return;

    const data = getProjectsData();
    const flagships = data.filter(p => p.flagship === true);

    flagshipContainer.innerHTML = flagships.map((project) => {
      const metricsHtml = project.metrics && project.metrics.length > 0
        ? `
          <div class="flagship-metrics-box">
            <div class="f-metric-item">
              <span class="f-metric-lbl">${escapeHtml(project.metrics[0].label)}</span>
              <span class="f-metric-val">${escapeHtml(project.metrics[0].value)}</span>
            </div>
            <div class="f-metric-item">
              <span class="f-metric-lbl">${escapeHtml(project.metrics[1] ? project.metrics[1].label : (currentLang === 'en' ? 'Category' : 'Categoría'))}</span>
              <span class="f-metric-val">${escapeHtml(project.metrics[1] ? project.metrics[1].value : project.categoryLabel)}</span>
            </div>
          </div>
        `
        : '';

      const tagsHtml = project.tags
        ? project.tags.slice(0, 4).map(tTag => `<span class="f-tag">${escapeHtml(tTag)}</span>`).join('')
        : '';

      const caseStudyLabel = t('btn_case_study');
      const caseStudyAria = currentLang === 'en'
        ? `View Case Study for ${escapeHtml(project.title)}`
        : `Ver Caso de Estudio de ${escapeHtml(project.title)}`;

      return `
        <article class="flagship-card" id="flagship-card-${escapeHtml(project.id)}">
          <div class="mock-window-header">
            <div class="mock-window-dots" aria-hidden="true">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <span class="flagship-badge-top">${escapeHtml(project.badge)}</span>
          </div>
          <div class="flagship-preview">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" class="flagship-svg-img" loading="lazy" width="600" height="340" />
          </div>
          <div class="flagship-body">
            <h3 class="flagship-title">${escapeHtml(project.title)}</h3>
            <h4 class="flagship-subtitle">${escapeHtml(project.subtitle)}</h4>
            <p class="flagship-desc">${escapeHtml(project.shortDescription)}</p>
            ${metricsHtml}
            <div class="flagship-tags-wrap">
              ${tagsHtml}
            </div>
            <div class="flagship-footer">
              <button type="button" class="btn-open-case" data-project-id="${escapeHtml(project.id)}" id="btn-flagship-${escapeHtml(project.id)}" aria-label="${caseStudyAria}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <span>${caseStudyLabel}</span>
              </button>
              <div class="project-external-links">
                ${project.links.github ? `
                  <a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="btn-icon" style="width: 36px; height: 36px;" title="GitHub" aria-label="GitHub: ${escapeHtml(project.title)}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    attachModalTriggers();
  };

  // =========================================================================
  // 2. RENDERIZADO DE SERVICIOS ESPECIALIZADOS
  // =========================================================================
  const renderServices = () => {
    if (!servicesContainer) return;

    const services = getServicesData();

    servicesContainer.innerHTML = services.map((srv) => {
      const deliverablesHtml = srv.deliverables.map(item => `
        <li class="deliverable-item">
          <svg class="deliverable-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(item)}</span>
        </li>
      `).join('');

      return `
        <article class="service-card" id="service-card-${escapeHtml(srv.id)}">
          <div class="service-card-top">
            <h3 class="service-title">${escapeHtml(srv.title)}</h3>
            <span class="service-badge">${escapeHtml(srv.badge)}</span>
          </div>
          <p class="service-desc">${escapeHtml(srv.description)}</p>
          <ul class="service-deliverables-list">
            ${deliverablesHtml}
          </ul>
        </article>
      `;
    }).join('');
  };

  // =========================================================================
  // 3. RENDERIZADO DE GALERÍA DE PROYECTOS Y FILTROS
  // =========================================================================
  const renderProjects = (filter = 'all') => {
    if (!projectsGrid) return;

    currentFilter = filter;
    const data = getProjectsData();

    const filtered = filter === 'all'
      ? data
      : data.filter(p => p.category === filter);

    projectsGrid.innerHTML = '';

    filtered.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = 'project-card animate-fade-in';
      card.style.animationDelay = `${index * 0.08}s`;
      card.id = `project-card-${project.id}`;

      const miniMetricsHtml = project.metrics && project.metrics.length > 0
        ? `
          <div class="project-metrics-mini">
            <div class="metric-mini-item">
              <span class="metric-mini-label">${escapeHtml(project.metrics[0].label)}</span>
              <span class="metric-mini-val">${escapeHtml(project.metrics[0].value)}</span>
            </div>
            <div class="metric-mini-item">
              <span class="metric-mini-label">${escapeHtml(project.metrics[1] ? project.metrics[1].label : (currentLang === 'en' ? 'Category' : 'Categoría'))}</span>
              <span class="metric-mini-val">${escapeHtml(project.metrics[1] ? project.metrics[1].value : project.categoryLabel)}</span>
            </div>
          </div>
        `
        : '';

      const tagsHtml = project.tags
        ? project.tags.map(tTag => `<span class="project-tag">${escapeHtml(tTag)}</span>`).join('')
        : '';

      const caseStudyLabel = t('btn_case_study');
      const caseStudyAria = currentLang === 'en'
        ? `View Case Study for ${escapeHtml(project.title)}`
        : `Ver Caso de Estudio de ${escapeHtml(project.title)}`;

      card.innerHTML = `
        <div class="project-banner">
          <img src="${escapeHtml(project.image)}" alt="Previsualización de ${escapeHtml(project.title)}" class="project-banner-svg" loading="lazy" width="600" height="340" />
          <span class="project-category-badge">${escapeHtml(project.categoryLabel)}</span>
          <span class="project-status-badge">${escapeHtml(project.status)}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <h4 class="project-subtitle">${escapeHtml(project.subtitle)}</h4>
          <p class="project-desc">${escapeHtml(project.shortDescription)}</p>
          ${miniMetricsHtml}
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-footer">
            <button type="button" class="btn-case-study" data-project-id="${escapeHtml(project.id)}" id="btn-case-${escapeHtml(project.id)}" aria-label="${caseStudyAria}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <span>${caseStudyLabel}</span>
            </button>
            <div class="project-external-links">
              ${project.links.github ? `
                <a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="GitHub" aria-label="GitHub: ${escapeHtml(project.title)}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    attachModalTriggers();
  };

  // Filtrado de pestañas
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // =========================================================================
  // 4. MODAL DE CASO DE ESTUDIO (ACCESIBLE & RIGOR TÉCNICO)
  // =========================================================================
  const openModal = (projectId) => {
    const data = getProjectsData();
    const project = data.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    modalProjectTitle.textContent = project.title;
    modalProjectSubtitle.textContent = `${project.subtitle} • (${project.year})`;

    const cs = project.caseStudy;
    const highlights = cs.architecturalHighlights.map(h => `
      <li class="case-highlight-item">
        <svg class="case-highlight-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${escapeHtml(h)}</span>
      </li>
    `).join('');

    const metricsDetail = project.metrics.map(m => `
      <div class="metric-card" style="padding: 14px;">
        <span class="metric-label">${escapeHtml(m.label)}</span>
        <div class="metric-value" style="font-size: 1.3rem;">${escapeHtml(m.value)}</div>
      </div>
    `).join('');

    const contextTitle = currentLang === 'en' ? 'Project Context &amp; Objectives' : 'Contexto del Proyecto &amp; Objetivos';
    const challengeTitle = t('modal_challenge_title');
    const solutionTitle = t('modal_solution_title');
    const metricsTitle = t('modal_metrics_title');
    const impactTitle = t('modal_impact_title');

    modalContentBody.innerHTML = `
      <div class="case-section">
        <h4 class="case-subtitle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          ${contextTitle}
        </h4>
        <p class="case-text">${escapeHtml(cs.clientContext)}</p>
      </div>

      <div class="case-section">
        <h4 class="case-subtitle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          ${challengeTitle}
        </h4>
        <p class="case-text">${escapeHtml(cs.technicalChallenge)}</p>
      </div>

      <div class="case-section">
        <h4 class="case-subtitle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ${solutionTitle}
        </h4>
        <p class="case-text">${escapeHtml(cs.solution)}</p>
        <ul class="case-highlights-list">
          ${highlights}
        </ul>
      </div>

      <div class="case-section">
        <h4 class="case-subtitle">${metricsTitle}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 10px;">
          ${metricsDetail}
        </div>
      </div>

      <div class="case-section" style="margin-bottom: 0;">
        <h4 class="case-subtitle">${impactTitle}</h4>
        <p class="case-text" style="color: #34d399; font-weight: 500;">${escapeHtml(cs.impact)}</p>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  const attachModalTriggers = () => {
    const triggers = document.querySelectorAll('.btn-open-case, .btn-case-study');
    triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        if (pId) openModal(pId);
      });
    });
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // =========================================================================
  // 5. RENDERIZADO DEL STACK TECNOLÓGICO Y FILOSOFÍA
  // =========================================================================
  const renderStack = () => {
    if (!stackContainer) return;
    const stack = getTechStackData();

    stackContainer.innerHTML = stack.map((cat, idx) => `
      <div class="stack-category-card" id="stack-cat-${idx}">
        <div class="stack-cat-header">
          <div class="stack-cat-icon-wrap" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          </div>
          <h3 class="stack-cat-title">${escapeHtml(cat.category)}</h3>
        </div>
        <div class="skills-list">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">${escapeHtml(s.name)}</span>
                <span class="skill-level-badge">${escapeHtml(s.level)}</span>
              </div>
              <span class="skill-detail">${escapeHtml(s.detail)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  };

  const renderPhilosophy = () => {
    if (!philosophyContainer) return;
    const philosophy = getPhilosophyData();

    philosophyContainer.innerHTML = philosophy.map((phil, idx) => `
      <div class="philosophy-card" id="philosophy-card-${idx}">
        <span class="philosophy-number">${escapeHtml(phil.number)}</span>
        <h3 class="philosophy-title">${escapeHtml(phil.title)}</h3>
        <p class="philosophy-desc">${escapeHtml(phil.description)}</p>
      </div>
    `).join('');
  };

  // =========================================================================
  // 6. TOAST NOTICES & CLIPBOARD
  // =========================================================================
  const showToast = (message) => {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-message').textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  };

  if (copyEmailBtn && emailTextEl) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailTextEl.textContent.trim();
      const successMsg = t('toast_email_copied');
      try {
        await navigator.clipboard.writeText(email);
        showToast(successMsg);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(successMsg);
      }
    });
  }

  if (copyWhatsappBtn) {
    copyWhatsappBtn.addEventListener('click', async () => {
      const phone = '3434709389';
      const successMsg = t('toast_phone_copied');
      try {
        await navigator.clipboard.writeText(phone);
        showToast(successMsg);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = phone;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(successMsg);
      }
    });
  }

  // =========================================================================
  // 7. APLICAR IDIOMA Y EVENT LISTENERS DE TRADUCCIÓN
  // =========================================================================
  const applyLanguage = (lang, notify = false) => {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Actualizar botones de idioma en header y mobile drawer
    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar textos estáticos mediante data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (UI_TRANSLATIONS[currentLang] && UI_TRANSLATIONS[currentLang][key]) {
        el.innerHTML = UI_TRANSLATIONS[currentLang][key];
      }
    });

    // Actualizar placeholders de inputs/textareas
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (UI_TRANSLATIONS[currentLang] && UI_TRANSLATIONS[currentLang][key]) {
        el.placeholder = UI_TRANSLATIONS[currentLang][key];
      }
    });

    // Re-renderizar componentes dinámicos con los datos del idioma activo
    renderFlagshipProjects();
    renderServices();
    renderProjects(currentFilter);
    renderStack();
    renderPhilosophy();

    if (notify) {
      const msg = lang === 'en'
        ? 'Website translated to English!'
        : '¡Página traducida al Español!';
      showToast(msg);
    }
  };

  // Registrar listeners de cambio de idioma en todos los botones de switch
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        applyLanguage(lang, true);
      }
    });
  });

  // =========================================================================
  // 8. NAVEGACIÓN MÓVIL Y SCROLLSPY
  // =========================================================================
  const closeMobileMenu = () => {
    if (!mobileMenuToggle || !navMenu) return;
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('mobile-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('active');
    document.body.classList.remove('nav-open');
  };

  const openMobileMenu = () => {
    if (!mobileMenuToggle || !navMenu) return;
    mobileMenuToggle.classList.add('active');
    navMenu.classList.add('mobile-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('active');
    document.body.classList.add('nav-open');
  };

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (mobileNavBackdrop) {
      mobileNavBackdrop.addEventListener('click', closeMobileMenu);
    }

    navMenu.querySelectorAll('.nav-link, a:not(.lang-pill-btn)').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobLinks = document.querySelectorAll('.mobile-bar-item[href^="#"]');

  const onScroll = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        mobLinks.forEach(item => {
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  };

  // Manejo explícito de clics en la barra de navegación inferior móvil
  mobLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 64;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          mobLinks.forEach(item => item.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  // Formulario de contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(t('toast_form_sent'));
      contactForm.reset();
    });
  }

  function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // 9. INICIALIZACIÓN CON EL IDIOMA SELECCIONADO
  // =========================================================================
  applyLanguage(currentLang, false);
});
