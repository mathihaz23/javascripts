var Capturar = function(){
    let lstNumero = document.getElementsByClassName("formulario");
    let lista = new Array();
    lista.push(lstNumero);
        
   
function mostrarUsuarios(){
    for (i=0; i<lista.length; i++){
    document.getElementById('div_salida').innerHTML = nombre[i]+'<br>';
    }
    }
}