// Traer los elementos del HTML DOM
const valor = document.getElementById("valor");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// Habilita el botón solo si los 3 campos están llenos
function revisarCampos() {
    if (valor.value !== "" && origen.value !== "" && destino.value !== "") {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}

// Cada vez que el usuario cambia algo se revisan los campos
valor.addEventListener("input", revisarCampos);
origen.addEventListener("change", revisarCampos);
destino.addEventListener("change", revisarCampos);

// Hace la conversión
function convertir() {
    let numero = Number(valor.value);
    let de = origen.value;
    let a = destino.value;
    let celsius;
    let respuesta;

    // Primero se pasa todo a Celsius
    if (de === "Fahrenheit") {
        celsius = (numero - 32) * 5 / 9;
    } else if (de === "Kelvin") {
        celsius = numero - 273.15;
    } else {
        celsius = numero;
    }

    // Luego se pasa de Celsius a la unidad destino
    if (a === "Fahrenheit") {
        respuesta = celsius * 9 / 5 + 32;
    } else if (a === "Kelvin") {
        respuesta = celsius + 273.15;
    } else {
        respuesta = celsius;
    }

    // Mostrar el resultado con 2 decimales
    resultado.textContent = numero + " " + de + " es " + respuesta.toFixed(2) + " " + a;
}

boton.addEventListener("click", convertir);