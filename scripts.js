// Mobile navigation & scroll reveal animations
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  const onScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".js-service-card");

  serviceCards.forEach((card) => {
    const toggle = card.querySelector(".service-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isActive = card.classList.contains("active");

      // close all
      document.querySelectorAll(".js-service-card.active").forEach((c) =>
        c.classList.remove("active")
      );

      if (!isActive) {
        card.classList.add("active");
      }
    });
  });
});
