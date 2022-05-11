class Libro {
    constructor(nombre, autor, editorial, genero){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.año = año
        this.genero = genero
    }
}

const ver1= new Libro("el sirmarillion", "J.R.R.Tolkien", "minotauro","1977", "Novela");
const ver2= new Libro("el hobbit", "J.R.R.Tolkien", "minotauro", "1982", "Novela")
const ver3= new Libro("los hijos de hurin", "J.R.R.Tolkien", "minotauro", "2007", "Novela");
const ver4= new Libro("La Llamada de Cthulhu", "H.P Lovecraft", "edisur", "1987", "Cuento")
console.log(ver1);
console.log(ver2);
console.log(ver3);
console.log(ver4);

let Libros=["nombre", "autor","editorial","año", "genero"];
console.log(Libros[1])