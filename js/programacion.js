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