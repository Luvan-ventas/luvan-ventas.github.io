'use strict';



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Scroll suave al hacer clic en los enlaces de la navbar
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();

      const targetSection = document.querySelector(href);

      if (targetSection) {
        // Cerrar navbar móvil si está activa
        navbar.classList.remove('active');

        // Realizar el scroll suave hacia la sección
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
