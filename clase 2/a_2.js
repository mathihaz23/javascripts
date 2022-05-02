alert("Ejercicio Asincronico 03");
var num=prompt("Ingrese un numero");
alert(num%2==0 ? "el numero es par" : "el numero es impar" );

//----------------------------------
alert("Ejercico Asincronico 04 Parte 1");
var edad=prompt("Ingrese su edad si es mujer");
if(edad>60){
    alert("usted ya es una jubilada");
}else{
    alert("Usted es menor para jubilarse");
};
//-------------------------------parte 2
alert("PARTE 2")
var edad2=prompt("cuantos años tiene actualmente");
var sexo= prompt("escriba si es hombre o mujer");
if (sexo=="hombre" && edad2>= 65 || sexo=="mujer" && edad2>= 60 ) {alert("usted es " + sexo+ " con edad de "+edad2+ " tiene la edad de jubilacion");}
else{alert("usted es " + sexo+ " con edad de "+edad2+ " no tiene la edad de jubilacion");}
