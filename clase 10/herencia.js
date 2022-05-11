var fecha = new Date();
console.log(fecha);



///-----

class Usuario {    

constructor (nombre,password) {
this.nombre=nombre
this.password=password;}
ingresar=function(){
    console.log("bienvenido" + this.nombre);
}
salir=function(){
    console.log("adios" + this.nombre);
}



}
 var Usuario1= new Usuario ("matias", "123");
 var Usuario2= new Usuario ("fredy", "1423");
 var Usuario3= new Usuario ("juan", "14243");

var arregloUsuarios = ^[Usuario1,Usuario2,Usuario3];
console.log("el nombre del usuario es:" + Usuario1.nombre);
Usuario1.ingresar();
console.log("el nombre del usuario es:" + arregloUsuarios[1].nombre)

//clase que hereda todas las propiedades y funcionamiento
// desde la clase de usuario

class Administrador extends Usuario{
    eliminarUsuario=function(nombre){
arregloUsuarios.filter(function(u){
    return u.nombre ! = nombre ;
})

    }


}

//crear un administrador
var adm1=new Administrador ("denis","24412");
//llamo a la propiedad nombre, que administrador hereda de usuario
console.log("el nombre del administrador es:") + adm1.nombre);
//llamo a la funcion ingresar que esta definidad en usuario
//pero que administrador hereda

adm1.ingresar();
adm1.ingresar("hola ");
adm1.salir();

///////////////7


class Triangulo {
    constructor(lado1, lado2 , lado3) {
      this.lado1 = lado1;
      this.lado2 = lado2;
      this.lado3 = lado3;
    }
  }