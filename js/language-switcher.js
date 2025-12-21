// Language switcher for SCAR documentation
// Handles switching between .en.html and .he.html pages
// This script must run early to intercept Material theme's language switcher

(function() {
  'use strict';
  
  console.log('SCAR Language Switcher: Script loaded');
  console.log('Current URL:', window.location.href);
  console.log('Current pathname:', window.location.pathname);

  // Get current page path
  function getCurrentPath() {
    return window.location.pathname;
  }

  // Get base path from site URL
  function getBasePath() {
    const siteUrl = 'https://horizon-scanning.github.io/scar-documentation/';
    try {
      const url = new URL(siteUrl);
      return url.pathname.replace(/\/$/, '') || '';
    } catch (e) {
      // Fallback: try to detect from current location
      const path = window.location.pathname;
      if (path.startsWith('/scar-documentation/')) {
        return '/scar-documentation';
      }
      return '';
    }
  }

  // Convert path between English and Hebrew versions
  // MkDocs Material uses directory-style URLs (with trailing slashes)
  function switchLanguage(path, targetLang) {
    const basePath = getBasePath();
    const basePrefix = basePath ? basePath + '/' : '/';
    
    if (!path) return basePrefix + (targetLang === 'he' ? 'index.he/' : 'index.en/');
    
    // Remove base path if present
    let normalizedPath = path;
    if (basePath && normalizedPath.startsWith(basePath)) {
      normalizedPath = normalizedPath.substring(basePath.length);
    }
    
    // Normalize path - remove leading/trailing slashes for processing
    normalizedPath = normalizedPath.replace(/^\/+|\/+$/g, '');
    
    // Handle root/index pages
    if (normalizedPath === '' || normalizedPath === 'index' || normalizedPath === 'index.html') {
      return basePrefix + (targetLang === 'he' ? 'index.he/' : 'index.en/');
    }
    
    // Handle directory-style URLs (with trailing slash or .html extension)
    // Remove .html extension if present, then handle directory-style
    normalizedPath = normalizedPath.replace(/\.html$/, '');
    
    // Handle language-specific pages (.en/ or .he/)
    if (normalizedPath.endsWith('.en')) {
      const newPath = targetLang === 'he' 
        ? normalizedPath.replace('.en', '.he')
        : normalizedPath.replace('.en', '');
      return basePrefix + newPath + '/';
    }
    
    if (normalizedPath.endsWith('.he')) {
      const newPath = targetLang === 'en'
        ? normalizedPath.replace('.he', '.en')
        : normalizedPath.replace('.he', '');
      return basePrefix + newPath + '/';
    }
    
    // For other pages, add language suffix
    return basePrefix + normalizedPath + (targetLang === 'he' ? '.he/' : '.en/');
  }

  // Update all language switcher links
  function updateLanguageSwitcher() {
    const currentPath = getCurrentPath();
    
    // Find all potential language switcher links
    const selectors = [
      'a[lang="he"]',
      'a[lang="en"]',
      '[data-md-component="language"] a',
      '.md-header__option a',
      'a[href="/index.he.html"]',
      'a[href="/index.he/"]',
      'a[href="/index.en.html"]',
      'a[href="/index.en/"]',
      'a[href="/"]'
    ];
    
    selectors.forEach(function(selector) {
      try {
        const links = document.querySelectorAll(selector);
        links.forEach(function(link) {
          const href = link.getAttribute('href');
          const langAttr = link.getAttribute('lang');
          const text = link.textContent.trim();
          
          // Determine target language
          let targetLang = null;
          const basePath = getBasePath();
          const basePrefix = basePath ? basePath + '/' : '/';
          if (langAttr === 'he' || text === 'עברית' || (href && (href.includes('index.he') || href === basePrefix + 'index.he/' || href === '/index.he/'))) {
            targetLang = 'he';
          } else if (langAttr === 'en' || text === 'English' || href === '/' || href === basePrefix || (href && href.includes('index.en'))) {
            targetLang = 'en';
          }
          
          if (targetLang) {
            const newHref = switchLanguage(currentPath, targetLang);
            if (newHref && newHref !== href) {
              link.setAttribute('href', newHref);
              console.log('Updated link:', href, '->', newHref);
            }
          }
        });
      } catch (e) {
        console.warn('Error updating language switcher:', e);
      }
    });
  }

  // Debug: log current path
  console.log('Language switcher loaded. Current path:', getCurrentPath());

  // Intercept clicks on language switcher - use capture phase to catch early
  document.addEventListener('click', function(e) {
    let link = e.target;
    
    // Find the closest anchor tag
    while (link && link.tagName !== 'A') {
      link = link.parentElement;
    }
    
    if (!link || !link.tagName || link.tagName !== 'A') return;
    
    const href = link.getAttribute('href');
    const lang = link.getAttribute('lang');
    const text = (link.textContent || '').trim();
    const classes = link.className || '';
    
    // Check if this is a language switcher link - be very broad
    const basePath = getBasePath();
    const basePrefix = basePath ? basePath + '/' : '/';
    const isLanguageLink = 
      href === '/' || 
      href === basePrefix ||
      href === basePrefix + 'index.he/' ||
      href === '/index.he/' ||
      href === basePrefix + 'index.he.html' ||
      href === '/index.he.html' ||
      href === 'index.he.html' ||
      href === basePrefix + 'index.en/' ||
      href === '/index.en/' ||
      href === 'index.en.html' ||
      href === basePrefix + 'index.en.html' ||
      href === '/index.en.html' ||
      lang === 'he' || 
      lang === 'en' ||
      text === 'עברית' || 
      text === 'English' ||
      classes.includes('md-header__option') ||
      link.closest('[data-md-component="language"]') ||
      link.closest('.md-header__option') ||
      (href && (href.includes('index.he') || href.includes('index.en')));
    
    if (isLanguageLink) {
      const currentPath = getCurrentPath();
      let targetLang = null;
      
      // Determine target language
      if (lang === 'he' || text === 'עברית' || href === basePrefix + 'index.he/' || href === '/index.he/' || href === basePrefix + 'index.he.html' || href === '/index.he.html' || href === 'index.he.html') {
        targetLang = 'he';
      } else if (lang === 'en' || text === 'English' || href === '/' || href === basePrefix || href === basePrefix + 'index.en/' || href === '/index.en/' || href === 'index.en.html') {
        targetLang = 'en';
      } else {
        // Try to infer from current page
        if (currentPath.includes('.he') || currentPath.includes('/index.he/') || currentPath.includes('index.he')) {
          targetLang = 'en';
        } else {
          targetLang = 'he';
        }
      }
      
      if (targetLang) {
        const newHref = switchLanguage(currentPath, targetLang);
        console.log('Language switch:', currentPath, '->', newHref, '(target:', targetLang + ')');
        
        if (newHref && newHref !== href) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.location.href = newHref;
          return false;
        }
      }
    }
  }, true); // Use capture phase

  // Update links immediately and on DOM ready
  updateLanguageSwitcher();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateLanguageSwitcher();
      setTimeout(updateLanguageSwitcher, 100);
      setTimeout(updateLanguageSwitcher, 300);
      setTimeout(updateLanguageSwitcher, 500);
    });
  } else {
    setTimeout(updateLanguageSwitcher, 100);
    setTimeout(updateLanguageSwitcher, 300);
    setTimeout(updateLanguageSwitcher, 500);
  }
  
  // Use MutationObserver to catch dynamically added elements
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
      updateLanguageSwitcher();
    });
    observer.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();

