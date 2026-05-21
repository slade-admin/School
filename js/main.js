/* ===== JS: main.js ===== */
'use strict';

/* ---------- Navbar scroll effect ---------- */
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar && navbar.classList.add('scrolled');
    backToTop && backToTop.classList.add('visible');
  } else {
    navbar && navbar.classList.remove('scrolled');
    backToTop && backToTop.classList.remove('visible');
  }
});

/* ---------- Mobile nav ---------- */
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add('open');
  // Prevent background scroll while menu is open
  document.body.style.overflow = 'hidden';
  // Basic a11y state
  navToggle && navToggle.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
  navToggle && navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && mobileNav) {
  // a11y attribute baseline
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    // Toggle open/close
    if (mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  mobileNavClose && mobileNavClose.addEventListener('click', closeMobileNav);

  // Close when clicking any link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close with ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  // If resizing to desktop, ensure mobile menu is closed
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });
}

/* ---------- Active nav link ---------- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ---------- Intersection Observer (fade-in) ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ---------- Animated counters ---------- */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const step = Math.ceil(duration / target);
  let current = 0;

  const update = () => {
    current += Math.ceil(target / 60);
    if (current >= target) {
      el.textContent = target.toLocaleString() + suffix;
    } else {
      el.textContent = current.toLocaleString() + suffix;
      requestAnimationFrame(update);
    }
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ---------- Tabs ---------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    const parent = btn.closest('.curriculum-tabs') || document.body;

    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});

/* ---------- Filter buttons (faculty) ---------- */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.faculty-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-dept') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ---------- Contact form ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2e7d32';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ---------- Admission form ---------- */
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
  admissionForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = admissionForm.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Submitting…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Application Received!';
      btn.style.background = '#2e7d32';
      admissionForm.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    }, 1500);
  });
}
