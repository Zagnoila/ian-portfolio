// Fit the original 600px Figma diagram to its responsive container.
// All page navigation and content work without JavaScript.
document.querySelectorAll('.diagram').forEach(function (diagram) {
  function resizeDiagram() {
    diagram.style.setProperty('--diagram-scale', diagram.clientWidth / 600);
  }
  resizeDiagram();
  new ResizeObserver(resizeDiagram).observe(diagram);
});
