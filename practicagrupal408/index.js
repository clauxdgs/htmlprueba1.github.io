function checkpais(pais){
    if(pais == 'Uruguay'){
        return true;
    }else{
        return confirm("Amas Uruguay?")
    }
}

let pais = prompt("Cual es tu Pais?", 'China');

if (checkpais(pais)){
    alert("Acceso Concedido");
}else{
    alert("No puedes ver el contenido!");
}
