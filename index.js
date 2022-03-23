const displayValorAnterior = document.getElementById("valorAnterior");
const displayValorActual = document.getElementById("valorActual");
const numberButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

numberButtons.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

operatorButton.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})