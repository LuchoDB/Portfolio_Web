/**
 * Módulo de Utilidades y Validación SEO
 * Agente Especialista en SEO Técnico & Performance
 * Luciano (LuchoDB) Portfolio
 */

(function () {
  'use strict';

  // Verificación de Metadatos Críticos en Tiempo de Ejecución (QA Interno)
  const auditSeoHealth = () => {
    const requiredMetas = [
      'description',
      'viewport',
      'robots',
      'author',
      'theme-color'
    ];

    const missingMetas = [];
    requiredMetas.forEach(name => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        missingMetas.push(name);
      }
    });

    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical || !canonical.href) {
      missingMetas.push('canonical link');
    }

    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      missingMetas.push('JSON-LD schema');
    } else {
      try {
        JSON.parse(jsonLd.textContent);
      } catch (e) {
        console.warn('⚠️ [SEO Agent] Advertencia: El bloque JSON-LD tiene un error sintáctico:', e);
      }
    }

    if (missingMetas.length > 0) {
      console.warn('⚠️ [SEO Agent] Faltan metadatos SEO recomendados:', missingMetas);
    } else {
      console.log('✅ [SEO Agent] Auditoría SEO superada con éxito: Metadatos, Canonical y Schema.org validados.');
    }
  };

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', auditSeoHealth);
  } else {
    auditSeoHealth();
  }
})();
