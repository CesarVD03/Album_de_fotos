console.log("JS conectado 🔥");

let formulario = document.querySelector("form");
let entrada = document.querySelector("#entrada");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let anioIngresado = entrada.value.trim();
    let anioCorrecto = "2023";

    if (anioIngresado === "") {
        alert("¡No puedes dejar este espacio vacío! 💔");
    } else if (anioIngresado === anioCorrecto) {
        alert("Correcto te ganaste una estrellita en tu frente ⭐")
        window.location.href = "album.html";
    } else {
        alert("Mmm... ese no es el año. ¡Inténtalo de nuevo! 👀");
        entrada.value = "";
    }
});