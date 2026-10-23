"use strict";
// Menú lateral hamburguesa: abre/cierra el menú al hacer clic
const botonMenu = document.querySelector(".boton-hamburguesa");
const menuLateral = document.querySelector(".menu-lateral");
if (botonMenu instanceof HTMLElement && menuLateral instanceof HTMLElement) {
    botonMenu.addEventListener("click", function () {
        menuLateral.classList.toggle("abierto");
    });
    document.addEventListener("click", function (evento) {
        const destino = evento.target;
        const clicEnMenu = destino instanceof Node && menuLateral.contains(destino);
        const clicEnBoton = destino instanceof Node && botonMenu.contains(destino);
        if (!clicEnMenu && !clicEnBoton) {
            menuLateral.classList.remove("abierto");
        }
    });
}
// Animación "reveal": los elementos con la clase .reveal aparecen al hacer scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});
// Efecto de máquina de escribir en el texto de la página "Sobre mí"
const elemento = document.getElementById("texto-escrito");
if (elemento) {
    const texto = elemento.textContent?.trim() ?? "";
    elemento.textContent = "";
    let posicion = 0;
    const escribir = () => {
        if (posicion < texto.length) {
            const contenidoActual = elemento.textContent ?? "";
            elemento.textContent = contenidoActual + texto.charAt(posicion);
            posicion++;
            setTimeout(escribir, 10); // Más milisegundos = más lento
        }
    };
    escribir();
}
