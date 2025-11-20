// Basic interaction: mobile menu and back-to-top visibility
(() => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');
  const yearEl = document.getElementById('year');

  // set current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile menu toggle (adds class on body so CSS can show menu)
  menuToggle && menuToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  // close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // smooth scroll for anchor links (native smooth fallback)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // back to top show/hide
  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 520) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };

  window.addEventListener('scroll', toggleBackToTop);
  // initialize
  toggleBackToTop();
})();
