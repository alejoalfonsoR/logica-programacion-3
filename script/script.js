//Se crea funcion para obtener el dato desde el input del HTML
function calcularFactorial() {
    //Se obtiene el valor ingresado en el input
    const inputNumero = document.getElementById("numeroCalcular");

    //Se obtiene el elemento donde se mostrara el resultado
    const mostarResultado = document.getElementById("resultado");

    //Convertimos el valor ingresado a numero
    numero = parseInt(inputNumero.value);

    //Validamos que el valor ingresado sea un numero
    if (!isNaN(numero)) {
        //Invocamos la funcion que calcula el factorial, pasandole como parametro el numero a calcular
        const resultado = factorial(numero);
        mostarResultado.innerText = `El factorial de ${numero} es ${resultado}`;

        //Invocamos la funcion que limpia el input
        limpiarCampos();
    } else {
        alert(
            "El valor ingresado no es un número. Por favor, ingrese un dato válido y vuelva a intentarlo."
        );

        //Invocamos la funcion que limpia el input
        limpiarCampos();
        //Invocamos la funcion que limpia el resultado
        limpiarResultado();
    }
}

//Se crea funcion recursiva para calcular el factorial
function factorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

//Se crea funcion para limpiar el input
function limpiarCampos() {
    const input = document.getElementById("numeroCalcular");
    input.value = "";
}
//Se crea funcion para limpiar el resultado
function limpiarResultado() {
    const mostarResultado = document.getElementById("resultado");
    mostarResultado.innerText = "";
}