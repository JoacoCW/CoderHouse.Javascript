function funcion(){
    let numeroIngresado = prompt('Ingresar un numero. Si no está entre 10 y 50, hay tabla.');
    // Verifico  -> está entre 10 y 50?
    let numero = parseInt(numeroIngresado);
    if((numero >=10 ) && (numero <=50 )){
        alert('Tu numero es '+numero);
    }else {
    alert('Hay tabla');
    document.getElementById("img1").src= "assets/img/hay_tabla.jpg";
    }
    console.log(parseInt(numero));
}