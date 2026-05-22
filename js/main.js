// ============ Sticky Header ============
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ============ Mobile Menu Toggle ============
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

// ============ Scroll Reveal Animation ============
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Hero reveals on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => {
    el.classList.add('in');
  });
});

// ============ FAQ Accordion Toggle ============
document.querySelectorAll('[data-faq-trigger]').forEach(trigger => {
  trigger.addEventListener('click', function() {
    const content = this.nextElementSibling;
    const isOpen = this.getAttribute('aria-expanded') === 'true';

    this.setAttribute('aria-expanded', !isOpen);
    content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
  });
});
