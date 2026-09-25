const botonMenu = document.querySelector(".boton-menu");
const menuLateral = document.querySelector(".menu-lateral");

botonMenu.addEventListener("click", function () {
  menuLateral.classList.toggle("abierto");
});

document.addEventListener("click", function (evento) {
  const clicEnMenu = menuLateral.contains(evento.target);
  const clicEnBoton = botonMenu.contains(evento.target);

  if (!clicEnMenu && !clicEnBoton) {
    menuLateral.classList.remove("abierto");
  }
});
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
