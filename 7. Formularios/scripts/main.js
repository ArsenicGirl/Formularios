'use strict'; //para que me corrija algunos errores
//crar contenedores
/*
1. var = global (mejor no usar)
2. let = local - variables (recomendado)
3. const = constantes
*/

const btnValidar= document.getElementById('validar');
//console.log(btnValidar);
//Al addEventListener deo pasar 2 parametros
btnValidar.addEventListener('click', function(e){
    e.preventDefault();
    let form = document.getElementById('dataForm');
    console.log(form[1],value);
    console.log(form[2],value);
}); //la (e) quiere decir eventod