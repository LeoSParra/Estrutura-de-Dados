function fatorial(numero) {
    // checa se o numero é positivo/valido
    if (numero < 0) {
        return -1
    }
    // se o numero for 0, a função irá parar e retornar a recursão
    else if (numero == 0) {
        return 1
    } 
    else {
        return (numero * fatorial(numero - 1))
    }
}

let resultado = fatorial(4)
console.log(resultado)

function fibonacci(numero) {
    if ((numero == 1) || (numero ==2)) {
        return 1
    }
    else {
        return fibonacci(numero - 1) + fibonacci(numero - 2)
    }
}

let resultado2 = fibonacci(4)
console.log(resultado2)

function potencia(base, expoente) {
    if (expoente == 0) {
        return 1
    }
    //else if (expoente == 1) {
        //return base
    //}
    else {
        return base * potencia(base, expoente - 1)        
    }
}

let resultado3 = potencia(5,5)
console.log(resultado3)