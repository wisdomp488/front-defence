document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      link.classList.add('text-purple-400');
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (href) window.location.href = href;
    });
  });

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('bg-purple-700');
    });
  });
});