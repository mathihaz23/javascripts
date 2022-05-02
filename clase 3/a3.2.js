var piedra = 0;
var papel = 1;
var tijera = 2;


function aleatorio(min, max)
{
    var numero = Math.floor( Math.random()* (max - min +1) + min )
return numero;
}

var opcionUsuario;
var opcionMaquina= aleatorio (0,2)
var opciones = ["piedra", "papel", "tijera"]
opcionUsuario = prompt("elige una opcion piedra = 0  papel = 1  tijera =2 ")

alert("elegiste " + opciones[opcionUsuario])
alert("la maquina eligio " + opciones[opcionMaquina])


if (opcionUsuario==piedra)
{
    
    if(opcionMaquina==piedra)
    {alert("Empate");}
    else if(opcionMaquina==papel)
    {alert("perdiste");}
    else if(opcionMaquina==tijera)
    {alert("ganaste");}


}
else if (opcionUsuario==papel)
{
 
    if(opcionMaquina==piedra)
    {alert("ganaste");}
    else if(opcionMaquina==papel)
    {alert("empate");}
    else if(opcionMaquina==tijera)
    {alert("perdiste :(");}

}
else if (opcionUsuario==tijera)
{

    if(opcionMaquina==piedra)
    {alert("perdiste");}
    else if(opcionMaquina==papel)
    {alert("ganaste");}
    else if(opcionMaquina==tijera)
    {alert("empate");}
    
}

else {alert("wtf¡¡¡¡")}