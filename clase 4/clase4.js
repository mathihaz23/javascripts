

//-------------------------------------------------------
var sumanota = 0;            //acumulador, para sumar todas las notas
var cantnotas = 0;           // contador , para contar la cantidad total de notas
var nota;                     // aqui se guardara lo que ingrese el usuario

while(nota!=0){ 
    nota=Number(prompt("ingrese una nota (0 para salir"));
    if (nota!=0){
        sumanota+=nota;
        cantnotas++;
    }
}

var promedio = sumanota/cantnotas;
alert("promedio=" + promedio);
