class Libro {
    constructor(nombre, autor, editorial, genero){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }
}
mostrarLibro = function (){
    return ("Nombre del libro: "+this.nombre +" Autor: "+ this.autor +" Editorial: "+ this.editorial+" Genero: "+ this.genero)}

let libro1= new Libro("el sirmarillion", "J.R.R.Tolkien", "minotauro", "Novela");
let libro2= new Libro("el hobbit", "J.R.R.Tolkien", "minotauro",  "Novela")
let libro3= new Libro("los hijos de hurin", "J.R.R.Tolkien", "minotauro",  "Novela");
let libro4= new Libro("La Llamada de Cthulhu", "H.P Lovecraft", "edisur", "Cuento")
console.log(mostrarLibro)
console.log(mostrarLibro)
console.log(mostrarLibro)
console.log(mostrarLibro)

var libros = [libro1, libro2, libro3,libro4];


function filtrarPorAutor(){
    for(i = 0; i< libros.length; i++){
        if ( buscar.value == libros[i].autor)}
}  