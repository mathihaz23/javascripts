
var edad = prompt ("cual es tu edad");
var calculodias = 365*edad;
alert ("pasaron " + calculodias+ "  dias desde que nacio") 

//----
var max = 95;
var edad =  prompt ("¿Cuántos snacks vas a comer el resto tu vida , para saber ingrese su edad");
var snack = (" de ")
var snackfavorito =prompt ("cual es tu snack favorito?");
var snackdiarios = Number(prompt("cuantos snack de "+ snackfavorito +" consideras comer diariamente"));
var valor = Number(prompt ("cuanto consideras que vale cada "+ snackfavorito+ " actualmente en pesos chilenos"));
var precio= valor*snackdiarios;
alert ( "necesitara "   +  ( max-edad)*365*snackdiarios +snack +  snackfavorito +"  para el resto de su vida");

 alert  ( "necesitaras "  + (max-edad)*365*precio +  " pesos chilenos para comprar snack favorito por el resto de su vida");




