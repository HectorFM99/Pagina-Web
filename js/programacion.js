"use strict";

// ==================== DOM ====================
const botonMenu = document.querySelector(".boton-hamburguesa");
const btnCerrarMenu = document.querySelector(".btn-cerrar-menu");
const menuLateral = document.querySelector("#menuLateral");
const fondoDifuminado = document.querySelector("#fondoDifuminado");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("#header");
const scrollProgress = document.querySelector(".scroll-progress");

// ==================== Menú lateral ====================
function abrirMenu() {
  if (menuLateral) menuLateral.classList.add("abierto");
  if (fondoDifuminado) fondoDifuminado.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function cerrarMenu() {
  if (menuLateral) menuLateral.classList.remove("abierto");
  if (fondoDifuminado) fondoDifuminado.classList.remove("visible");
  document.body.style.overflow = "";
}

if (botonMenu) {
  botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirMenu();
  });
}

if (btnCerrarMenu) {
  btnCerrarMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    cerrarMenu();
  });
}

if (fondoDifuminado) {
  fondoDifuminado.addEventListener("click", cerrarMenu);
}

// Cerrar menú al hacer clic en un enlace del menú lateral
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    cerrarMenu();
  });
});

// Clic fuera del menú (en desktop no aplica mucho, pero lo dejamos)
document.addEventListener("click", (evento) => {
  const destino = evento.target;
  if (!menuLateral || !botonMenu) return;
  const clicEnMenu = destino instanceof Node && menuLateral.contains(destino);
  const clicEnBoton = destino instanceof Node && botonMenu.contains(destino);
  if (!clicEnMenu && !clicEnBoton && menuLateral.classList.contains("abierto")) {
    cerrarMenu();
  }
});

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
  // Pequeña pausa para que se vea la carga
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
