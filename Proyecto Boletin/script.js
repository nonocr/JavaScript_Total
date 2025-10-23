let notas = [9, 8, 10, 9, 5, 7, 3];


function promedio(){
 let suma = 0;    //crear variable suma

for ( let i = 0; i < notas.length; i++ ) {   //bucle para recorrer el array y sumar las notas
    suma += notas[i];
}
let promedio = suma / notas.length;  //calcular el promedio
document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2); //mostrar el resultado con 2 decimales
}

function nAlta(){ 
let mayor = notas[0]; // asignar la primera nota como la mayor inicialmente

for(let i = 0; i < notas.length; i++ ) { //bucle para recorrer el array y encontrar la nota más alta
    if(notas[i] > mayor){
        mayor = notas[i];
    }
}
document.getElementById("resultado").textContent = "Nota más alta: " + mayor; //mostrar el resultado
}

function Aplazadas(){
let contador = 0; //variable para contar las asignaturas aplazadas
 for(let i = 0; i < notas.length; i++ ) { //bucle para recorrer el array y contar las notas menores a 4
    if(notas[i] < 4){
        contador ++;
    }
 }
 document.getElementById("resultado").textContent = "Número de asignaturas aplazadas: " + contador; //mostrar el resultado
}