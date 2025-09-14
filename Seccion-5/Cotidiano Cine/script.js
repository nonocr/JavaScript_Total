function Pelicula(genero){
    let elementoEdad = document.getElementById("edad");
    let elementoRecomendacion = document.getElementById("recomendacion");
    let edad = parseInt(elementoEdad.value, 10);

    switch(genero){
        case "Drama":
            if(edad > 16) 
                elementoRecomendacion.textContent = "Taxi Driver";
            else if(edad > 13)
                elementoRecomendacion.textContent = "Casa Blanca";
            else
                elementoRecomendacion.textContent = "The shawshank redemption";
            break;
        case "Comedia":
            if(edad > 16) 
                elementoRecomendacion.textContent = "The wolf of wall street";
            else if(edad > 13)
                elementoRecomendacion.textContent = "Back to the future";
            else
                elementoRecomendacion.textContent = "The truman show";
            break;
        case "Musical":
            if(edad > 16) 
                elementoRecomendacion.textContent = "The Rocky Horror Picture Show";
            else if(edad > 13)
                elementoRecomendacion.textContent = "La La Land";
            else
                elementoRecomendacion.textContent = "Les Miserables";
            break;
        case "Crimen":
            if(edad > 16) 
                elementoRecomendacion.textContent = "The Godfather";
            else if(edad > 13)
                elementoRecomendacion.textContent = "No hay opciones disponibles";
            else
                elementoRecomendacion.textContent = "El secreto de sus ojos";
            break;
    }     
}
