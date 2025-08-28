const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const elementoContenido = document.getElementById("Contenido");

function Suma(){
    const suma = parseInt(numero1.value) + parseInt(numero2.value);
    elementoContenido.textContent = suma;
}

function Resta(){
    const resta = parseInt(numero1.value) - parseInt(numero2.value);
    elementoContenido.textContent = resta;
}

function Multiplicacion(){
    const multiplicacion = parseInt(numero1.value) * parseInt(numero2.value);
    elementoContenido.textContent = multiplicacion;
}

function Division(){
    const division = parseInt(numero1.value) / parseInt(numero2.value);
    elementoContenido.textContent = division;
}

function Raiz(){
    const raiz = Math.sqrt(numero1.value);
    elementoContenido.textContent = raiz;
}

function Potencia(){
    const potencia = Math.pow(numero1.value, numero2.value);
    elementoContenido.textContent = potencia;
}

function Absoluto() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.abs(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function Random() {
    const resultado = Math.random()
    elementoContenido.textContent = resultado
}

//Estas funciones son de Redondeo//

function RedondearCercano() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.round(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function RedondearAbajo() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.floor(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function RedondearArriba() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.ceil(numero);
    elementoContenido.textContent = resultado || textoActual;
}

