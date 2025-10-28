function AgregarProductos(){
    const input1 = document.getElementById("producto")
    const input2 = document.getElementById("precio")
    const input3 = document.getElementById("cantidad")
    const lista = document.getElementById("detalleProductos")
    const precioTotal = input2 * input3
    const texto = input1.value.trim() + " - ₡" + input2.value.trim() + " x " + input3.value.trim() + " = ₡" + (input2 * input3)

    if (texto !== '') {
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
        input1.value = ''; 
        input2.value = ''; 
        input3.value = ''; 
      }
        
}

function GenerarFactura(){
    
    

}

