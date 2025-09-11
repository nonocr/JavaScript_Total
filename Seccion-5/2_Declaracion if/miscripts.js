function evaluarCompra(cantidadDisponible) {
    let elementoRespuestas = document.getElementById("decision");
 
    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;
 
    if (cantidadComprada <= cantidadDisponible) {
        elementoRespuestas.textContent = "Compraste " + cantidadComprada + " hay disponible  "  + (cantidadDisponible - parseInt (cantidadComprada)).toString();;
    }
}