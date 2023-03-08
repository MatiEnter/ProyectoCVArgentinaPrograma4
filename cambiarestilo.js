function toggleTheme() {
    const link = document.getElementById('theme-link');
    if (link.getAttribute('href') === 'estiloclaro.css') {
      link.setAttribute('href', 'estilooscuro.css');
    } else {
      link.setAttribute('href', 'estiloclaro.css');
    }
  }
  
  