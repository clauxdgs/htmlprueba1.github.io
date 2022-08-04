function checkAge(nacionalidad){
    if(nacionalidad == 'uruguayo' || nacionalidad == 'uruguaya'){
        return true;
    }else{
        return confirm("Amas Uruguay?")
    }
}

let age = prompt("Cual es tu nacionalidad?", 'Chino');

if (checkAge(age)){
    alert("Acceso Concedido");
}else{
    alert("No puedes ver el contenido!");
}
