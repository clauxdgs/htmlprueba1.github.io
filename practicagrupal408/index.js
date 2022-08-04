function checkNacionalidad(pais){
    if(pais == 'Uruguay'){
        return true;
    }else{
        return confirm("Amas Uruguay?")
    }
}

let age = prompt("Cual es tu Pais?", 'Chino');

if (checkAge(age)){
    alert("Acceso Concedido");
}else{
    alert("No puedes ver el contenido!");
}
