// ===== Mobile menu =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('is-open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

// ===== Sticky header glow on scroll =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) header.style.background = 'rgba(5, 5, 5, 0.95)';
  else header.style.background = 'rgba(10, 10, 10, 0.85)';
}, { passive: true });

// ===== Smooth scroll offset for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== Reveal on scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('is-visible');
      observer.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.service-card, .client-card, .gallery-item, .about-feature, .contact-channel').forEach(el => observer.observe(el));

// ===== Form submission feedback =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', () => {
    const success = document.getElementById('contact-success');
    setTimeout(() => { if (success) success.classList.add('is-visible'); }, 100);
  });
}
