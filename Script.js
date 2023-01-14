/*Cambiar el estado de un libro leido a no leido y al reves */
const Leido=document.querySelectorAll(".Leido");
Leido.forEach(Libro => {
    Libro.addEventListener("click",(e)=>{
        if(Libro.textContent==="No leído"){
            Libro.textContent="Leído"
            Libro.style.backgroundColor="#00FF00";
        }else{
            Libro.textContent="No leído"
            Libro.style.backgroundColor="#a9aeb4";
        }
    })
});
/*Eliminar el libro cada vez que se apreta el boton de eliminar*/
const Eliminar=document.querySelectorAll(".Eliminar");
Eliminar.forEach(Libro => {
    Libro.addEventListener("click",(e)=>{
        Libro.parentElement.remove();
    })
});

