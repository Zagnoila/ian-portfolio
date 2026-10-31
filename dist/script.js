// Fit the original 600px Figma diagram to its responsive container.
// All page navigation and content work without JavaScript.
document.querySelectorAll('.diagram').forEach(function (diagram) {
  function resizeDiagram() {
    diagram.style.setProperty('--diagram-scale', diagram.clientWidth / 600);
  }
  resizeDiagram();
  new ResizeObserver(resizeDiagram).observe(diagram);
});

// Reveal each project or column once, when it enters the screen.
// Content stays visible if JavaScript or IntersectionObserver is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('main .project-card, main .columns > *');

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-waiting');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.05});

  revealItems.forEach(function (item) {
    // Leave anything already on screen visible, including direct-link arrivals.
    if (item.getBoundingClientRect().top >= window.innerHeight) {
      item.classList.add('reveal', 'is-waiting');
      observer.observe(item);
      // Keyboard visitors should never land on an invisible link.
      item.addEventListener('focusin', function () {
        item.classList.remove('is-waiting');
        observer.unobserve(item);
      });
    }
  });

  reducedMotion.addEventListener('change', function () {
    if (reducedMotion.matches) {
      revealItems.forEach(function (item) {
        item.classList.remove('is-waiting');
      });
      observer.disconnect();
    }
  });
}
