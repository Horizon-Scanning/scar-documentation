---
template: main.html
---

<script>
  // Redirect to English version by default
  (function() {
    var pathname = window.location.pathname;
    
    // Detect base path dynamically
    var pathParts = pathname.split('/').filter(function(p) { return p; });
    var basePath = '';
    
    // If pathname starts with /scar-documentation, use that as base
    if (pathname.indexOf('/scar-documentation') === 0) {
      basePath = '/scar-documentation';
    }
    
    // Normalize pathname
    pathname = pathname.replace(/\/$/, '');
    var normalizedPath = pathname.replace(basePath, '') || '/';
    
    // Check if we're at root or index page
    if (normalizedPath === '/' || normalizedPath === '/index' || normalizedPath === '/index.html' || normalizedPath.endsWith('/index.html')) {
      window.location.href = basePath + '/index.en/';
    }
  })();
</script>

<meta http-equiv="refresh" content="0; url=index.en/">
<link rel="canonical" href="index.en/" />

# Redirecting...

If you are not redirected automatically, [click here](index.en.md).

