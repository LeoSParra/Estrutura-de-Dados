function fila() {
    let fila = []
    let x

    // x = parseInt(prompt("Informe um numero"))
    x = 7
    fila.push(x)
    fila.push(10)
    fila.push(3)

    console.log("fila: " + fila)
    
    x = fila.shift()
    console.log("elemento: " + x)
    console.log("fila: " + fila)
}
fila()

function pilha() {
    let pilha = []
    let x = 7

    //x = parseInt(prompt("informe um numero: "))
    pilha.push(x)
    pilha.push(2)
    pilha.push(1)

    console.log("pilha: " + pilha)
    
    x = pilha.pop()

    console.log("elemento: " + x)
    console.log("pilha: " + pilha)
}
pilha()