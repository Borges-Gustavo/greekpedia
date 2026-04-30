// Efeito de Fade na Imagem conforme scroll para cima
window.addEventListener('scroll', function() {
  const heroOverlay = document.querySelector('.hero-overlay');
  const scrollPosition = window.scrollY;
  
  if (heroOverlay) {
    // Aumenta a opacidade do overlay (ofusca a imagem) conforme scroll
    const opacity = Math.min(0.85, 0.3 + (scrollPosition / 300));
    heroOverlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
