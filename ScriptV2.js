let Libreria=[]
/*
function Libro(Titulo,Autor,Paginas,Leido){
    this.Autor=Autor
    this.Titulo=Titulo
    this.Paginas=Paginas
    this.Leido=Leido
    this.AgregarLibro=function(){ Creo todos los elementos HTML correspondientes al libro
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
        Agrego todos los elementos a sus padres
        Libros.appendChild(Libro);
        Libro.appendChild(titulo);
        Libro.appendChild(autor);
        Libro.appendChild(paginas);
        Libro.appendChild(Leido);
        Libro.appendChild(Eliminar);
        CambiarLeido(Leido);
        EliminarLibro(Eliminar);
    }
}
*/
class Libro{
    constructor(Titulo,Autor,Paginas,Leido){
        this.Autor=Autor
        this.Titulo=Titulo
        this.Paginas=Paginas
        this.Leido=Leido
    }
    AgregarLibro(){
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
        Libros.appendChild(Libro);
        Libro.appendChild(titulo);
        Libro.appendChild(autor);
        Libro.appendChild(paginas);
        Libro.appendChild(Leido);
        Libro.appendChild(Eliminar);
        CambiarLeido(Leido);
        EliminarLibro(Eliminar);
    }
}
function NoExiste(Titulo){
    let I=0;
    while(I<Libreria.length && Libreria[I].Titulo!=Titulo)
        I++;
    if(I==Libreria.length)
        return true;
    else
        return false;
}
function BuscarLibro(Titulo){
    let I=0;
    while(I<Libreria.length && Libreria[I].Titulo!=Titulo)
        I++;
    return I;
}
function NuevoLibro(Titulo,Autor,Paginas){
    if(NoExiste(Titulo)){
        Libreria[Libreria.length]=new Libro(Titulo,Autor,Paginas)
        Libreria[Libreria.length-1].AgregarLibro();
    }else
        alert("El libro que queres ingresar ya esta en la libreria.")
}

const Submit=document.querySelector(".Submit");
Submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let Titulo=document.querySelector("#Titulo"),
    Autor=document.querySelector("#Autor"),
    Paginas=document.querySelector("#Paginas");
    if(Titulo.value!="" && Autor.value!="" && Paginas.value!="")
        NuevoLibro(Titulo.value,Autor.value,Paginas.value);
    else
        alert("No se ingresaron todos los datos del libro")
    let form=document.querySelector("form");
    form.style.display="none";
    let Agregar=document.querySelector(".Agregar");
    Agregar.style.display="inline"
    /*Vacio los inputs*/
    Autor.value="";
    Titulo.value="";
    Paginas.value="";
    
})

/*Muestra el formulario cuando se presiona agregar libro*/
const Agregar=document.querySelector(".Agregar");
Agregar.addEventListener("click",(e)=>{
    let form=document.querySelector("form")
    Agregar.style.display="none";
    form.style.display="block"
})


/*Cambiar el estado de un libro leido a no leido y al reves */
function CambiarLeido(Libro){
    Libro.addEventListener("click",(e)=>{
        if(Libro.textContent==="No leído"){
            Libro.textContent="Leído"
            Libro.style.backgroundColor="#00FF00";
        }else{
            Libro.textContent="No leído"
            Libro.style.backgroundColor="#a9aeb4";
        }
    })
}
/*Eliminar el libro cada vez que se apreta el boton de eliminar*/
function EliminarLibro(Eliminar){
    Eliminar.addEventListener("click",(e)=>{
        /*Busco el titulo del libro*/
        let Titulo=Eliminar.parentElement.firstChild.nextSibling.textContent;
        Eliminar.parentElement.remove();
        Libreria.splice(BuscarLibro(Titulo),1)
    });
}
