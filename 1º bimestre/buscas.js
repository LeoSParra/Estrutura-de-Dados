// busca sequencial em um vetor nao ordenado
function buscaSequencial(vetor, numeroProcurado) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] == numeroProcurado) {
            return `A posição achada foi: ${i} `
        }
    }
    return "não achou no vetor"
}

function buscaBinaria(vetor, valorBusca) {
    let comeco = 0
    let final = vetor.length-1

    while (final >= comeco){
        //encontra o meio do vetor, math.floor para retornar sempre numeros inteiros na divisão
        let meio = Math.floor((comeco + final)/2)

        //checa se o meio é o valor procurado
        if(vetor[meio] == valorBusca){
            return `Binária: valor encontrado na posição ${meio}`
        }
        //se nao encontrou procura a esquerda ou direita do vetor
        else if (valorBusca > vetor[meio]){
            comeco = meio + 1
        }
        else{
            final = meio - 1
        }
    }
    //caso nao encontre o valor
    return "Binária: nao foi encontrado a chave"
}

function buscaBinariaRecursiva(vetor, valorBusca, inicio, fim) {
    let meio

    if (inicio > fim) {
        return "não encontrado"
    }
    else {
        meio = Math.floor((inicio + fim) / 2)
        if (vetor[meio] == valorBusca) {
            return `Valor encontrado na posição ${meio}`
        }
        else if (valorBusca < vetor[meio]) {
            return buscaBinariaRecursiva(vetor, valorBusca, inicio, meio-1)
        }
        else {
            return buscaBinariaRecursiva(vetor, valorBusca, meio+1, fim)
        }
    }
}

let vetor = [1,2,3,4,5,6,7,8,9,10,11,12]
let resultado = buscaBinariaRecursiva(vetor, 5, 0, vetor.length-1)
console.log(resultado)

