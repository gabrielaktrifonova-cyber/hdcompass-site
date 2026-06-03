/* ── HD Compass Site JS ─────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const toggle = document.querySelector('.nav-mobile-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--cream)';
      links.style.padding = '16px 28px 24px';
      links.style.borderBottom = '0.5px solid var(--border)';
      links.style.gap = '18px';
      links.style.zIndex = '99';
    });
  }

  /* Active nav link highlighting */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && currentPage.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  /* Smooth reveal on scroll */
  const revealEls = document.querySelectorAll(
    '.reading-card, .testi-card, .blog-card, .compass-feat, .about-cert-num'
  );
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });
  }

  /* Contact form — prevent default, show thank you */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message sent ✦';
      btn.disabled = true;
      btn.style.background = 'var(--gold)';
      btn.style.color = 'var(--brown)';
    });
  }

  /* Booking button → TidyCal */
  document.querySelectorAll('[data-book]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('https://tidycal.com/humandesign1', '_blank');
    });
  });

  /* Compass AI button */
  document.querySelectorAll('[data-compass]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('compass-ai.html', '_blank');
    });
  });

});
