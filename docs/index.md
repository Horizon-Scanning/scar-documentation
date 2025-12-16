---
template: main.html
---

<script>
  // Redirect to English version by default
  var pathname = window.location.pathname;
  var basePath = '/scar-documentation';
  
  // Remove trailing slash and normalize
  pathname = pathname.replace(/\/$/, '');
  
  // Check if we're at root or index page
  if (pathname === '' || pathname === basePath || pathname === basePath + '/index' || pathname === basePath + '/index.html' || pathname.endsWith('/index.html')) {
    window.location.href = basePath + '/index.en/';
  }
</script>

<meta http-equiv="refresh" content="0; url=index.en/">
<link rel="canonical" href="index.en/" />

# Redirecting...

If you are not redirected automatically, [click here](index.en.md).

