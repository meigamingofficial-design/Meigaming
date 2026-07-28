/**
 * MeiGaming - Main Interactivity & Utility Helpers
 */
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Copyright Year
  const yearSpans = document.querySelectorAll('.copyright-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => span.textContent = currentYear);

  // Copy Email to Clipboard helper
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'meigaming.official@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('Contact us at meigaming.official@gmail.com');
      });
    });
  });

  // Intersection Observer for scroll animation triggers
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.observe-animate').forEach(el => {
    observer.observe(el);
  });
});

/**
 * Displays a non-intrusive toast notification
 */
function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--accent-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
