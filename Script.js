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
/*Muestra el formulario cuando se presiona agregar libro*/
const Agregar=document.querySelector(".Agregar");
Agregar.addEventListener("click",(e)=>{
    let form=document.querySelector("form")
    Agregar.style.display="none";
    form.style.display="block"
})
const Submit=document.querySelector(".Submit");
Submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let Titulo=document.querySelector("#Titulo"), TextoTitulo=Titulo.value,
    Autor=document.querySelector("#Autor"), TextoAutor=Autor.value,
    Paginas=document.querySelector("#Paginas"), TextoPaginas=Paginas.value;
    /*Creo todos los elementos de un libro*/
    if(TextoAutor!="" && TextoTitulo!="" && TextoPaginas!=""){
        let Libros=document.querySelector(".Libros"),
        Libro=document.createElement("div"),
        Ptitulo=document.createElement("p"),
        Pautor=document.createElement("p"),
        Ppaginas=document.createElement("p"),
        Leido=document.createElement("Button"),
        Eliminar=document.createElement("Button");
        Libros.classList.add("Libros");
        Libro.classList.add("Libro");
        Ptitulo.textContent=TextoTitulo;
        Pautor.textContent=TextoAutor;
        Ppaginas.textContent=TextoPaginas;
        Leido.textContent="No leído";
        Leido.classList.add("Leido");
        Eliminar.textContent="Eliminar libro";
        Eliminar.classList.add("Eliminar");
        /*Agrego todos los elementos a sus padres*/
        Libros.appendChild(Libro);
        Libro.appendChild(Ptitulo);
        Libro.appendChild(Pautor);
        Libro.appendChild(Ppaginas);
        Libro.appendChild(Leido);
        Libro.appendChild(Eliminar);
        /*Agrego los eventListeners que se usaron al principio, por lo tanto estos no los tienen*/
        Leido.addEventListener("click",(e)=>{
            if(Leido.textContent==="No leído"){
                Leido.textContent="Leído"
                Leido.style.backgroundColor="#00FF00";
            }else{
                Leido.textContent="No leído"
                Leido.style.backgroundColor="#a9aeb4";
            }
        })
        Eliminar.addEventListener("click",(e)=>{
            Eliminar.parentElement.remove();
        })
        let form=document.querySelector("form");
        form.style.display="none";
        let Agregar=document.querySelector(".Agregar");
        Agregar.style.display="inline"
        /*Vacio los inputs*/
        Autor.value="";
        Titulo.value="";
        Paginas.value="";
    }
})
