"use strict";

// ==================== DOM ====================
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("#header");
const scrollProgress = document.querySelector(".scroll-progress");

// ==================== Navegación por apartados (scroll suave) ====================
navLinks.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = header ? header.offsetHeight : 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// Resaltar enlace activo según la sección visible
function actualizarEnlaceActivo() {
  if (!header) return;
  const headerOffset = header.offsetHeight + 40;
  const secciones = document.querySelectorAll("section.seccion");
  let actual = null;

  secciones.forEach((seccion) => {
    const top = seccion.offsetTop;
    const bottom = top + seccion.offsetHeight;
    if (window.pageYOffset >= top - headerOffset && window.pageYOffset < bottom - headerOffset) {
      actual = seccion.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${actual}`) {
      link.classList.add("activo");
    } else {
      link.classList.remove("activo");
    }
  });
}

// Actualizar al hacer scroll
window.addEventListener("scroll", () => {
  actualizarEnlaceActivo();
  if (scrollProgress) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = height ? (winScroll / height) * 100 : 0;
    scrollProgress.style.width = `${scrolled}%`;
  }
});

// Ejecutar una vez al cargar
document.addEventListener("DOMContentLoaded", actualizarEnlaceActivo);

// ==================== Animación Reveal al hacer scroll ====================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

// ==================== Efecto máquina de escribir ====================
const elemento = document.getElementById("texto-escrito");
if (elemento) {
  const texto = elemento.textContent?.trim() ?? "";
  elemento.textContent = "";
  elemento.setAttribute("aria-label", texto);
  let posicion = 0;
  const escribir = () => {
    if (posicion < texto.length) {
      const contenidoActual = elemento.textContent ?? "";
      elemento.textContent = contenidoActual + texto.charAt(posicion);
      posicion++;
      setTimeout(escribir, 12);
    }
  };
  setTimeout(escribir, 400);
}

// ==================== Efecto Cyberpunk al hacer clic ====================
document.querySelectorAll("a, button, .tarjeta, .contacto-social, .tarjeta-estudio, .tarjeta-certificado").forEach((el) => {
  el.addEventListener("mousedown", () => {
    if (el instanceof HTMLElement) {
      el.style.filter = "brightness(1.4) hue-rotate(15deg)";
      setTimeout(() => {
        el.style.filter = "";
      }, 150);
    }
  });
});
