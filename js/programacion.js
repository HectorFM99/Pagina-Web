let nombre = "Hector";
let apellido = "Franco Magallo";
let edad = 25;
function calcularDescuento(precio){return precio * 0.9;}
function aplicarIVA(precio){return precio * 1.21;}
let precio1 =aplicarIVA(100);
let precio2 = aplicarIVA(200);
function dividir(a, b){if (b === 0){
    console.error("No se puede dividir por cero");
    return null;
}
return a / b;
}
document.getElementById("titulo").innerText = "Bienvenido a mi pagina";
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este texto lo genero Javascript";
document.body.appendChild(nuevoParrafo);
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("Hiciste clic en el boton");
});