/*Muestra el formulario cuando se presiona agregar libro*/
const Agregar=document.querySelector(".Agregar");
Agregar.addEventListener("click",(e)=>{
    let form=document.querySelector("form")
    Agregar.style.display="none";
    form.style.display="block"
})
/*
const Submit=document.querySelector(".Submit");
Submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let Titulo=document.querySelector("#Titulo"),
    Autor=document.querySelector("#Autor"),
    Paginas=document.querySelector("#Paginas");
    let Libro=new Libros(Titulo.value,Autor.value,Paginas.value,"No leído")
    /*Creo todos los elementos de un libro
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
        /*Agrego todos los elementos a sus padres
        Libros.appendChild(Libro);
        Libro.appendChild(Ptitulo);
        Libro.appendChild(Pautor);
        Libro.appendChild(Ppaginas);
        Libro.appendChild(Leido);
        Libro.appendChild(Eliminar);
        /*Agrego los eventListeners que se usaron al principio, por lo tanto estos no los tienen
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
        /*Vacio los inputs
        Autor.value="";
        Titulo.value="";
        Paginas.value="";
    }
})*/

let Libreria=[]

function Libro(Titulo,Autor,Paginas,Leido){
    this.Autor=Autor
    this.Titulo=Titulo
    this.Paginas=Paginas
    this.Leido=Leido
    this.AgregarLibro=function(){ /*Creo todos los elementos HTML correspondientes al libro*/
        let Libros=document.querySelector(".Libros"),
        Libro=document.createElement("div"),
        titulo=document.createElement("p"),
        autor=document.createElement("p"),
        paginas=document.createElement("p"),
        Leido=document.createElement("Button"),
        Eliminar=document.createElement("Button");
        Libros.classList.add("Libros");
        Libro.classList.add("Libro");
        titulo.textContent=this.Titulo;
        autor.textContent=this.Autor;
        paginas.textContent=this.Paginas;
        Leido.textContent="No leído";
        Leido.classList.add("Leido");
        Eliminar.textContent="Eliminar libro";
        Eliminar.classList.add("Eliminar");
        /*Agrego todos los elementos a sus padres*/
        Libros.appendChild(Libro);
        Libro.appendChild(autor);
        Libro.appendChild(titulo);
        Libro.appendChild(paginas);
        Libro.appendChild(Leido);
        Libro.appendChild(Eliminar);
    }
}

function NuevoLibro(Titulo,Autor,Paginas){
    Libreria[Libreria.length]=new Libro(Titulo,Autor,Paginas)
    Libreria[Libreria.length-1].AgregarLibro();
}
NuevoLibro("H","O","1");
NuevoLibro("L","A","2");
NuevoLibro("C","H","3");

const Submit=document.querySelector(".Submit");
Submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let Titulo=document.querySelector("#Titulo"),
    Autor=document.querySelector("#Autor"),
    Paginas=document.querySelector("#Paginas");
    NuevoLibro(Titulo.value,Autor.value,Paginas.value);
})
