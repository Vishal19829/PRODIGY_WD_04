// Include this as js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.background = '#ffeb3b';
        btn.style.color = '#333';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'white';
        btn.style.color = '#007aff';
      });
    });
  });
  