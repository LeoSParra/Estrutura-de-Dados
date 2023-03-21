function torreHanoi(quantidade, origem, destino, auxiliar) {
    if (quantidade == 1) {
        console.log(`mover disco 1 de ${origem} para ${destino}`)
    } else {
        torreHanoi(quantidade-1, origem, auxiliar, destino)
        console.log(`mover disco ${quantidade} de ${origem} para ${destino}`)
        torreHanoi(quantidade-1, auxiliar, destino, origem)
    }
}

torreHanoi(3, 'A', 'B', 'C')