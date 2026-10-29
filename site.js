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

  /* Contact form — sends through Web3Forms to humandesign@hdcompass.com */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      const fail = () => {
        btn.disabled = false;
        btn.textContent = original;
        let note = form.querySelector('.form-note');
        if (!note) { note = document.createElement('p'); note.className = 'form-note'; note.style.cssText = 'margin-top:14px;font-size:14px;color:var(--warm-brown);text-align:center;'; form.appendChild(note); }
        note.innerHTML = 'Sorry — that didn\u2019t send. Please email me directly at <a href="mailto:humandesign@hdcompass.com" style="text-decoration:underline">humandesign@hdcompass.com</a>';
      };
      const key = form.querySelector('[name="access_key"]');
      if (!key || key.value.indexOf('PASTE') === 0) { fail(); return; }
      btn.disabled = true;
      btn.textContent = 'Sending…';
      const data = new FormData(form);
      if (!data.get('subject')) data.set('subject', 'New message from hdcompass.com');
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        const out = await res.json();
        if (!out.success) throw new Error(out.message || 'failed');
        form.reset();
        btn.textContent = 'Message sent ✦';
        btn.style.background = 'var(--gold)';
        btn.style.color = 'var(--brown)';
      } catch (err) { fail(); }
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
      window.open('/compass-ai.html', '_blank');
    });
  });

});
